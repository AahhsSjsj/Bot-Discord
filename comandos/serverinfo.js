const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')

module.exports = {
  name: "serverinfo",
  alias: ["server"],

async execute (client, message, args){

 const embed = new Discord.MessageEmbed()

 .setTitle("Informacion")
 .setThumbnail(message.guild.iconURL())
 .setAuthor(message.guild.name, message.guild.iconURL())
 .addField('**ID**', message.guild.id)
 .addField('**Dia de Creacion**', message.guild.joinedAt)
 .addField('**Region**', message.guild.region)
 .addField('**Owner**', message.guild.owner)
 .addField('**Miembros**', message.guild.memberCount, true)
 .addField('**Bots**', message.guild.members.cache.filter(m => m.user.bot).size)
 .addField('**Emojis**', message.guild.emojis.cache.size)
 .addField('**Boosts**', message.guild.premiumSubscriptionCount.toString())
 .addField('**Nivel de Verificacion**', message.guild.verificationLevel)
 .addField('**Roles**', message.guild.roles.cache.size, true)
 .setColor('RANDOM')

 message.lineReply(embed)

 
 }

}