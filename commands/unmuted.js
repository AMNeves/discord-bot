
module.exports = {
    name: 'unmuted',
    description: 'Start global vote kick',
    execute(message, args) {
    // Only try to join the sender's voice channel if they are in one themselves
    totalMembers = 0;
    votes = -1;
    waitTime = 15000;


    message.member.voiceChannel.members.forEach(function(entry) {
            totalMembers++;
        });

    muted = message.mentions.members.first();
    message.react("👍");

    message.awaitReactions(reaction => reaction.emoji.name === "👍", {time: 15000 })
    .then(collected => {
        votes = collected.size - 1;
        if (votes > Math.floor(totalMembers/2)) {
            muted.setMute(false, 'It needed to be done').then(() => console.log(`Muted '${muted.displayName}'`));
            message.channel.send("DESMAMADO " + muted.toString())

        } else{
            message.channel.send("MUTADO MAMADO " + muted.toString())
        }
    
    });


    },
};