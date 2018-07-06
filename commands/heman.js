module.exports = {
	name: 'man',
	description: 'By the Power of Grayskull!',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/man.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};