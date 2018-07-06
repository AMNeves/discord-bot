module.exports = {
    name: 'getChannelByName',
    description: 'Get a channel with a specific name',
    execute(name) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		var channel = client.channels.find(val => val.name === name);
		return channel;
    },
};