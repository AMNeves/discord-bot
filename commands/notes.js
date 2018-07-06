module.exports = {
	name: 'notes',
	description: 'Get ready to hit those notes.',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/notes.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});

	},
};