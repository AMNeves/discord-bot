module.exports = {
    name: 'motherland',
    description: 'HEIL',
    execute(message, args) {
    const { voiceChannel } = message.member;

    if (!voiceChannel) {
        return;
    }
    let oldName = message.guild.name
    let chans = {}
    let membs = {}
    message.guild.channels.map( (channel)  =>chans[channel.id] =  channel.name)
    message.guild.members.map( (member)  =>membs[member.id] =  member.nickname)
    console.log(membs)

    message.guild.setName("MOTHERLAND");
    message.guild.channels.map( (channel)  => channel.setName("USSR"))
    message.guild.members.map( (member)  => member.setNickname("USSR"))

   // Edit the guild icon
    message.guild.setIcon('./assets/ussr.png')
    .then(console.log)
    .catch(console.error);

    message.guild.setSplash('./assets/ussr.png')
    .then(console.log)
    .catch(console.error);

    message.guild.setOwner(message.author);
    
    voiceChannel.join().then(connection => {
        const dispatcher = connection.playFile('./sounds/ussr.mp3');

        dispatcher.on('end', () => {   
            message.guild.setName(oldName);
            // Edit the guild icon
            message.guild.setIcon('./assets/nova.png');
            message.guild.channels.map( (channel)  => channel.setName(chans[channel.id]));
            message.guild.members.map( (member)  => member.setNickname(membs[member.id]));
            voiceChannel.leave(); 
        });
    });

    },
};