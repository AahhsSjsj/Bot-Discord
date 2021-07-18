const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb');
const warns = new db.crearDB('warns')

module.exports = {
  name: "unwarn",
  alias: [],

async execute (client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.lineReply("No Tienes los suficientes Permisos!")

    const user = message.mentions.members.first()
    if(!user) return message.lineReply(new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${message.author.discriminator}`, message.author.avatarURL())
     .setColor("RANDOM")
    .setTimestamp()
    .addField('**Error** <a:check22:851328742575964180>', `**Menciona a un Usuario para wanear!**`)
    .addField('**Tip**', '**No Sabes Como es?, Asi Podes Hacerlo: `!unwarn <@USERID> <RAZON o si no mas>` - `!unwarn @nameUser <RAZON o si no mas>`**')
)

    if(!warns.tiene(`${message.guild.id}.${user.id}`)){
        warns.establecer(`${message.guild.id}.${user.id}`, 0)

        message.lineReply('Esta No Tiene Warns!')
    }

    const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

    if(cantidad < 1) return message.lineReply("Esta persona no tiene Wanrs!")

    warns.restar(`${message.guild.id}.${user.id}`)

    message.lineReply(`El Usuario **${message.author.username}** Le ha quitado Aviso a **${user}**`)
 
 }

}