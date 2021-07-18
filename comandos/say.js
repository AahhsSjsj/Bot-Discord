const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  alias: ["say"],

execute (client, message, args){

  let texto = args.join(' ')
  if(!texto) return message.lineReply('Debes Escribir Algo!')
 
  message.channel.send(texto)
  message.delete()

 
 }

}