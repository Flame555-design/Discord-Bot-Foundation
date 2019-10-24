const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready'), () => {
  console.log('I am ready!');
  });
  
  client.login(process.env.BOT_TOKEN);
