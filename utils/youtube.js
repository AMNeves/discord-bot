const request = require('superagent');
const ytdl = require('ytdl-core');

var ytAudioQueue = [];
var dispatcher = null;

const API_KEY = "AIzaSyDiRYm18R7ozbU8P5Ji9qgkOgLJsUqk1UQ";
const WATCH_VIDEO_URL = "https://www.youtube.com/watch?v=";

exports.play = function play(searchTerm, message, client, voiceChannel) {
	if (client.voiceConnections.array().length == 0) {
        voiceChannel = message.member.voiceChannel;
        voiceChannel.join();
    }
    search(searchTerm, QueueYtAudioStream, client, message.author.username, message, voiceChannel);
}

function search(searchKeywords, callback, client, author, message, voiceChannel) {
    var requestUrl = 'https://www.googleapis.com/youtube/v3/search' + `?part=snippet&q=${escape(searchKeywords)}&key=${API_KEY}`;

    request(requestUrl, (error, response) => {
        if (!error && response.statusCode == 200) {

            var body = response.body;
            if (body.items.length == 0) {
				message.channel.send("Your search gave 0 results");
                console.log("Your search gave 0 results");
                return;
            }

            for (var item of body.items) {
                if (item.id.kind === 'youtube#video') {
                    callback(item.id.videoId, item.snippet.title, client, author, message, voiceChannel);
                    return; // prevent adding entire list of youtube videos
                }
            }
        }
        else {
            console.log("Unexpected error when searching YouTube");
            return;
        }
    });

    return;
};

function QueueYtAudioStream(videoId, videoName, client, author, message, voiceChannel) {
    var streamUrl = `${WATCH_VIDEO_URL}${videoId}`;

    if (!ytAudioQueue.length) {
        ytAudioQueue.push(
            {
                'streamUrl': streamUrl,
                'videoName': videoName
            }
        );
		message.channel.send(`Queued: '${videoName}'`);
        console.log(`'${author}' queued: '${videoName}'`);
        PlayStream(ytAudioQueue[0].streamUrl, client, message, voiceChannel);
    }
    else {
        ytAudioQueue.push(
            {
                'streamUrl': streamUrl,
                'videoName': videoName
            }
        );
		message.channel.send(`Queued: '${videoName}'`);
        console.log(`'${author}' queued: '${videoName}'`);
    }

}

function PlayStream(streamUrl, client, message, voiceChannel) {
    const streamOptions = {seek: 0, volume: 0.3};
    if (streamUrl) {
        const stream = ytdl(streamUrl, {filter: 'audioonly'});
        if (dispatcher == null) {
            var voiceConnection = client.voiceConnections.first();
            if (voiceConnection) {
				message.channel.send(`Now Playing: '${ytAudioQueue[0].videoName}'`);
                console.log(`Now Playing '${ytAudioQueue[0].videoName}'`);
                dispatcher = client.voiceConnections.first().playStream(stream, streamOptions);

                dispatcher.on('error', (err) => {
                    console.log(err);
                });
            }
        }
        else {
            dispatcher = client.voiceConnections.first().playStream(stream, streamOptions);
        }
    }
}

function PlayNextStreamInQueue(client, message, voiceChannel) {
    ytAudioQueue.splice(0, 1);
    // if there are streams remaining in the queue then try to play
    if (ytAudioQueue.length > 0) {
		message.channel.send(`Now Playing: '${ytAudioQueue[0].videoName}'`);
		console.log(`Now Playing '${ytAudioQueue[0].videoName}'`);
		PlayStream(ytAudioQueue[0].streamUrl, client, voiceChannel);
    } else {
		dispatcher = null;
		voiceChannel.leave();
	}
}

exports.skip = function skip(client, message, voiceChannel) {
	if(ytAudioQueue.length > 1)
		message.channel.send(`Skipped.`);
    PlayNextStreamInQueue(client, message, voiceChannel);
}

exports.stop = function stop(client, message, voiceChannel) {
    ytAudioQueue.splice(0, ytAudioQueue.length);
	dispatcher = null;
	voiceChannel.leave();
}