const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "tempban",
  alias: ["tban"],

async execute (client, message, args){

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply("No Tienes Permisos!")
 if(!message.guild.me.hasPermission("BAN_MEMBER")) return message.lineReply("No tengo permisos! :c")

 const member = message.mentions.members.first()
 if(!member) return message.lineReply("Debes Mencionar a alguien")

 let time = args[1]
 if(!time) return message.lineReply("Debes Dedir un tiempo!")
 let timer = ms(time)

 message.lineReply(`EL Usuario ${member.username} fue baneado por ${message.author.username} Durante ${time}`)

 await member.ban({reason: `Usuario TempBaneado por: ${message.author.tag} durante ${time}`})
 await setTimeout(async function () {
     await message.guild.members.unban(member.id)

     message.channel.send(`El Usuario ${member.username} Fue Desbaneado`)
 }, timer)
 
 }

}