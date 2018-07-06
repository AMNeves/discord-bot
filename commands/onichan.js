module.exports = {
	name: 'onichan',
	description: 'Sugoi',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/Onii-chan-Daisuki.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};