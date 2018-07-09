const fs = require('fs');

module.exports = {
	name: 'pomada',
	description: 'suck my dick',
	execute(message) {


        let rawdata = fs.readFileSync('./data/pomada.json');  
        let pomadas = JSON.parse(rawdata);  
        let res = "POMADA SCORE:\n";
        for (var p in pomadas){
            res += pomadas[p].username + " " + pomadas[p].score + "\n";
        }
        message.channel.send(res)
	},
};
