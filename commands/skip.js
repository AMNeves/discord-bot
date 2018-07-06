module.exports = {
    name: 'skip',
    description: 'Skips to the next song in queue.',
    execute(message, args, client) {
		const { voiceChannel } = message.member;
		const youtube = require('../utils/youtube.js');
		youtube.skip(client, message, voiceChannel);
    },
};