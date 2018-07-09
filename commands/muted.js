
module.exports = {
    name: 'muted',
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

    const filter = (reaction, user) => reaction.emoji.name === "👍";

    let collector = message.createReactionCollector(filter, { time: waitTime });    
    
    var votes = 0;
    collector.on('collect', r => { votes++; console.log(`Collected ${r.emoji.name}`)});

    collector.on('end', collected => {
    
        if (votes > Math.floor(totalMembers/2)) {
            muted.setMute(true, 'It needed to be done');
            message.channel.send("MUTADO MAMADO " + muted.toString())
        } else{
            message.channel.send("DESMAMADO " + muted.toString())
        }
    });

    },
};