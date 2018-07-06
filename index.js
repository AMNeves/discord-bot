const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, id } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const youtube = require('./utils/youtube.js');

const getRandomInt = require('./utils/RandomInt.js');
const getChannelByName = require('./utils/getChannelByName.js');
const commandFiles = fs.readdirSync('./commands');

const { notes, notesNames } = require('./assets/notes.json');

var voiceChannel;
var ready = true;

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// message.channel --- channel it was sent in
// message.guild --- message's server
// message.author --- message's author
// message.mentions.users.first() --- first user mentioned in the message 

client.on('message', message => {
	
	const n = getRandomInt.execute(0, 100);
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
		console.log(`'${message.author.username}' used: ${command}`);
	}
	catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
	
});

client.login(token);
