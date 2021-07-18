const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "reportbug",
  alias: ["reb"],

async execute (client, message, args){

 const reporte =  args.join(" ")
 if(!reporte) return message.lineReply('Debes Decir el reporte!')

 const embedenviado = new Discord.MessageEmbed()

 .setAuthor('Gracias')
 .setDescription(`**\`El Reporte Ha Sido Enviado Correctamente ✅ uwu\`**`)
 .addField('**Reporte:**', `**\`${reporte}\`**`)
 .setColor('GREEN')

 message.lineReply(embedenviado)

 const embed = new Discord.MessageEmbed()

 .setTitle("Reporte")
 .setDescription(`**El Usuario \`${message.author.username}\` ha hecho un Reporte  Desde el Servidor \`${message.guild.name}\`,**`)
 .addField('**Reporte:**', `**\`${reporte}\`**`)
 .setFooter("Arreglalo uwu")
 .setColor("RANDOM")

 client.users.cache.get('804826341471420417').send(embed)
 
 }

}