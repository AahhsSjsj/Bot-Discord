const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "saychannel",
  alias: ["sc"],

execute (client, message, args){

 let canal = message.mentions.channels.first()
 if(!canal) return message.lineReply("Debes Mencionar un canal!")

 let texto = args.slice(1).join(" ")
 if(!texto) return message.lineReply("Debes escribir un texto")

 canal.send(texto)
 }

}