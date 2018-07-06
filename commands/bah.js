module.exports = {
	name: 'bah',
	description: 'Bah!',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/bah.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};