// Defini Bots
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const fs = require('fs');



client.login('     ');

//Start Bot
  client.on("ready", () =>{
	console.log(`----- Le bot ${client.user.tag} est connecté ! -----`);
	client.user.setActivity(".metria | .info | .membres", {
		type: "PLAYING",
		//type: "STREAMING",
		url: "https://twitch.tv/tomathhhh"
	  })
 });


//HELPER liste commandes------------------------
client.on('message', message => {
	if (message.content === '.Metria') {
		(" **.info**: Afficher toute les infos sur Metria \n**.membres**: Nombre de membre sur le Discord");
	}
});
client.on('message', message => {
	if (message.content === '.metria') {
		message.channel.send
    (" **.info**: Afficher toute les infos sur Metria \n**.membres**: Nombre de membre sur le Discord");
	}
});
//COMMANDE ANTI INSULTE / Spam ----------------------



//COMMANDE ----------------------
client.on('message', message => {
if (message.content === `.membres`) {
	message.channel.send(`\nMembres Discord: ${message.guild.memberCount}`);
}
});

client.on('message', message => {
	if (message.content === '.info') {
		message.channel.send('**Site Metria:** http://metria-rp.fr \n**Réglement:** \n**Invite Discord:** https://discord.gg/MTJ7j8gPqR');
	}
});
client.on('message', message => {
	if (message.content === '.') {
		message.channel.send('**A VENIR**');
	}
});

