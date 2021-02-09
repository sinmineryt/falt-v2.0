const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === 'f.ping') {  
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "https://site.falt.ml",  //The message shown
            type: "WATCHING" //STREAMING: PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.login(process.env.BOT_TOKEN);
