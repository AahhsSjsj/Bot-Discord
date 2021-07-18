const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')

module.exports = {
  name: "jumbo",
  alias: [],

async execute (client, message, args){

 if(!args[0]) return message.lineReply('Debes Decirme un Emoji!')

 let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
 if(!emoji) return message.lineReply('Ese No Es un Emoji Válido!')

 const embed = new Discord.MessageEmbed()

 .setDescription(`**Descargar Emoji: [Click Aqui!](${emoji.url})**`)
 .setImage(emoji.url)
 .setColor('RANDOM')

 message.lineReply(embed)
 
 }

}