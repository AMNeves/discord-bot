module.exports = {
    name: 'recover',
    description: 'not heil',
    execute(message, args) {
    
    let oldName = "Nova lincs"
    let chans = { '91848983500029952': 'general',
    '91848983525195776': 'Sessão de Treino',
    '95582527619600384': 'Misteres do Mundial',
    '360413766661177356': 'Computational System',
    '360414028948045834': 'Campo da bola',
    '360414816856178689': 'fct1',
    '360415116564627456': 'fct2',
    '360415591623950338': 'Aquecimento',
    '360415672246861834': 'Knowledge Based Systems',
    '360765867010818060': 'Lil College',
    '388898699327045654': 'fct3',
    '388898715269857290': 'fctsec',
    '388898753068924928': 'Multimodal Systems',
    '388898899479232512': 'Software Systems',
    '408792159953616917': 'Banco de Suplentes',
    '410185011808174101': 'GAP - Grupo Anonimo da Punheta',
    '410198469014323200': 'nsfw',
    '415589878001172480': 'metinas',
    '450811294140989462': 'bot-test' }

    message.guild.setName(oldName);
    // Edit the guild icon
    message.guild.setIcon('./assets/nova.png');
    message.guild.channels.map( (channel)  => channel.setName(chans[channel.id]));
 
    },
};