const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const canalsgr = new db.crearDB('canalsugerencias')

module.exports = {
  name: "canalsgr",
  alias: ["cs"],

execute (client, message, args){

 const user = message.mentions.users.first() || message.guild.members.resolve(args[0]) || message.author

 var perms = message.member.hasPermission("MANAGE_CHANNELS")
 if(!perms) return message.lineReply("No Tienes Permisos!")

 const canal = message.mentions.channels.first()
 if(!canal) return message.lineReply(new Discord.MessageEmbed()
 .setAuthor(`${user.username}#${message.author.discriminator}`, message.author.avatarURL())
 .setColor("RANDOM")
 .setTimestamp()
 .addField('**Error** <a:check22:851328742575964180>', `**Pon Un Canal Para Mandar las Sugerencias de Usuarios!**`)
 .addField('**Tip**', '**No Sabes Como es?, Asi Podes Hacerlo: `!cs #Channel o <#channelID>` - `!canalsgr #Channel o <#channelID>`** ')
)
 

 message.lineReply(new Discord.MessageEmbed()
  .setAuthor(`${user.username}#${message.author.discriminator}`, message.author.avatarURL())
  .setDescription(`**Todo Ha salido Bien! Las sugerencias seran enviadas a ${canal}**`)
  .setColor('RANDOM')
 )

 canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)
 
 }

}