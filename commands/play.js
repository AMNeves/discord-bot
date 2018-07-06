module.exports = {
	name: 'play',
	description: 'Plays a youtube video (sound only).',
	execute(message, args, client) {
		const { voiceChannel } = message.member;
		const youtube = require('../utils/youtube.js');

		youtube.play(args, message, client, voiceChannel);
	},
};