module.exports = {
	name: 'ajudem',
	description: 'Show all available commands.',
	execute(message) {
		const fs = require('fs');
		const commandsFolder = './commands';

		let list = '';
		fs.readdirSync(commandsFolder).forEach(f => {
			const props = require(`./${f}`);
			list += '!' + props.name + '      Description: ' + props.description + '\n';
		});

        message.author.send('Hi i am a vegan and these are the commands enjoy you meat eating fuck.\n\n'+list);
	},
};