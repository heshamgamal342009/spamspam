const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("556142127235727421")
setInterval(function() {
channel.send(`فيديو جديد كل يومين بقناتي MR OMO6R فيديو جديد كل يومين بقناتي MR OMO6R`);
}, 30)
})

client.login(process.env.BOT_TOKEN);