

module.exports = {
	name: 'calaabocalixo',
	description: 'suck my dick',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sounds/stfu.mp3');

			dispatcher.on('end', () => {voiceChannel.leave();});
		});
	},
};