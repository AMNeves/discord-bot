module.exports = {
	name: 'sieg',
	description: 'HEIL',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/naz.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};