module.exports = {
    name: 'votekick',
    description: 'Start global vote kick',
    execute(message, args) {
    // Only try to join the sender's voice channel if they are in one themselves
    totalMembers = 0;
    votes = -1;
    waitTime = 15000;


    message.member.voiceChannel.members.forEach(function(entry) {
            totalMembers++;
        });

    message.channel.send('Mute ' + args[0] + '?').then(msg => msg.awaitReactions(reaction => reaction.emoji.name === ":thumbsup:").then(collected => console.log(`Collected ${collected.size} reactions`)));
    message.react(":thumbsup:");
    message.react(":thumbsdown:");

    

	if (votes > Math.floor(totalMembers/2)) {
        message.member.setMute(true, 'It needed to be done').then(() => console.log(`Muted '${message.member.displayName}'`));
        message.author.send('Muted');
	} else {
        message.member.voiceChannel.send("Vote kick failed BUEEEPI");
	}
    },
};