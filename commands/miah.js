var sleep = require('sleep');
function miaa(voiceChannel, i){
    if(i <= 0){ return }
    voiceChannel.join().then(connection => {
        const dispatcher = connection.playFile('./sounds/miah.mp3');
        dispatcher.on('end', () => {voiceChannel.leave(); sleep.sleep(2); miaa(voiceChannel, i-1)});
    });
}


module.exports = {
	name: 'miaaa',
	description: 'Miaaaah',
	execute(message) {
		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return;
		}
        
        miaa(voiceChannel, 5);
 
	},
};