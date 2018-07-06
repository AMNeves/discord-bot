module.exports = {
    name: 'stop',
    description: 'Stops the music.',
    execute(message, args, client) {
		const { voiceChannel } = message.member;
		const youtube = require('../utils/youtube.js');
		youtube.stop(client, message, voiceChannel);
    },
};