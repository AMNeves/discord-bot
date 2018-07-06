module.exports = {
	name: 'stfu',
	description: 'suck my dick',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return message.reply('Please join a voice channel first!');
		}
        voiceChannel.leave();

	},
};
