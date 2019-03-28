const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "<";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Texo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Texo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});