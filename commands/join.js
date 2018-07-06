module.exports = {
    name: 'join',
    description: 'Joins your current voice channel.',
    execute(message, args) {
    // Only try to join the sender's voice channel if they are in one themselves
	if (message.member.voiceChannel) {
	  message.member.voiceChannel.join();
	} else {
	  message.reply('You need to join a voice channel first!');
	}
    },
};