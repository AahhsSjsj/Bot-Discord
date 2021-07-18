const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn",
  alias: ["avisar"],

execute (client, message, args){

const user = message.mentions.users.first() || message.guild.members.resolve(args[0]) || message.author

 var perms = message.member.hasPermission("KICK_MEMBERS")
 if(!perms) return message.lineReply("No Tienes los suficientes Permisos!")

 let persona = message.mentions.users.first()
 if(!persona) return message.lineReply(new Discord.MessageEmbed()
 .setAuthor(`${user.username}#${message.author.discriminator}`, message.author.avatarURL())
 .setColor("RANDOM")
 .setTimestamp()
 .addField('**Error** <a:check22:851328742575964180>', `**Menciona a un Usuario para wanear!**`)
 .addField('**Tip**', '**No Sabes Como es?, Asi Podes Hacerlo: `!warn <@USERID> <RAZON o si no mas>` - `!warn @nameUser <RAZON o si no mas>`**')
)

 var razon = args.slice(1).join(" ")
 if(!razon){
     razon = 'No Especificado!'
 }

 if(!warns.tiene(`${message.guild.id}.${user.id}`)){
  warns.establecer(`${message.guild.id}.${user.id}`, 0)
}

 warns.sumar(`${message.guild.id}.${user.id}`, 1)

 message.lineReply(new Discord.MessageEmbed()
    .setAuthor('Warn!')
    .setTitle('Alguien A Hecho un Warn!')
    .addField(`**Moderador:**`, `**${message.author.tag}**`)
    .addField(`**Usuario Warneado:**`, `**${persona.tag}**`)
    .addField(`**Razon Del Warneo:**`, `**${razon}**`)
    .setFooter(`Comando Warn!`)
    .setTimestamp()
    .setColor('RANDOM')
 )
 
 persona.send(new Discord.MessageEmbed()
    .setAuthor('Warn!')
    .addField(`**Server Donde Te Hicieron Warn**`, `**${message.guild.name}**`)
    .addField(`**Moderador:**`, `**${message.author.tag}**`)
    .addField(`**Razon Del Warneo:**`, `**${razon}**`)
    .setFooter(`Comando Warn!`)
    .setTimestamp()
    .setColor('RANDOM')
)
 }

}