module.exports = {
	name: 'halibut',
	description: 'gives pomada para desmamar',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/pomada.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};