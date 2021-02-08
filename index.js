const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === '+ping') {  
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.login(config.BOT_TOKEN);
