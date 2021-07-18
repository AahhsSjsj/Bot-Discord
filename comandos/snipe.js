const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "snipe",
  alias: [],

execute (client, message, args){

 let usuario = message.mentions.members.first() || message.member;

 const channel = message.mentions.channels.first() || message.channel;

 const msg = client.snipes.get(channel.id)

 if(!msg){
     message.lineReply("No se ha Borrado ningun Mensaje")
 } else {
     const embed = new Discord.MessageEmbed()

     .setAuthor(`Snipe Comando!`)
     .addField("Mensaje Borrado:", msg.content)
     .addField("Author Del Mensaje:", `**${msg.delete.tag}**`)
     .addField("Author Del Mensaje Avatar:", `[**Click Aqui!**](${msg.delete.displayAvatarURL()})`)
     .addField("En El Canal:", `<#${msg.canal.id}>`)
     .setFooter(`Pedido Por ${message.member.displayName}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
     .setColor("GREEN")

     message.lineReply(embed)
     }
 }
 
 }

