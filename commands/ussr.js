module.exports = {
	name: 'ussr',
	description: 'HEIL',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/ussr.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};