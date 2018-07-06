const songsfolder = './sounds/dank/';
const fs = require('fs');


module.exports = {
	name: 'dank',
	description: 'DANK TIME!',
	execute(message, args) {
		const {
			voiceChannel,
		} = message.member;

		if (!voiceChannel) {
			return;
		}

		let list = '';
		const sname = args[0];
		fs.readdirSync(songsfolder).forEach(file => {
			list += file.split('.')[0] + '\n';
		});


		if(args.length == 0) {
			message.channel.send('Dank choice list (!dank <name>): \n' + list);
		}
		else{
			voiceChannel.join().then(connection => {
				const dispatcher = connection.playFile(songsfolder + sname + '.mp3');

				dispatcher.on('end', () => {
					voiceChannel.leave();
				});
			});
		}


	},
};