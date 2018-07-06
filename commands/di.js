module.exports = {
	name: 'di',
	description: 'Shows random mamado from DI.',
	execute(message, args) {
		const fs = require('fs');
		const { MessageAttachment } = require('discord.js');
		const getRandomInt = require('../utils/RandomInt.js');
		const mamadosFolder = './docentesDI/';
		
		var mamadosDI = [];
		
		fs.readdirSync(mamadosFolder).forEach(file => {
			mamadosDI.push(`./docentesDI/${file}`);
		});
		
		const n = getRandomInt.execute(0, mamadosDI.length);
		message.channel.send({
		  files: [
			`${mamadosDI[n]}`
		  ]
		})
	},
};