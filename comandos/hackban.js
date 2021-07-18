const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "hackban",
  alias: ["banid"],

async execute (client, message, args){

 var perms = message.member.hasPermission("BAN_MEMBERS")
 if(!perms) return message.lineReply("No Tienes suficientes Permisos!")

 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.lineReply("No Tengo los suficientes permisos!")

 const id = args.join(' ')
 if(!id) return message.lineReply("Debes Colocar una ID!")

 const member = await client.users.fetch(id)
 message.guild.members.ban(member.id)

 message.lineReply(`El Usuario **${member.username}** fue baneado correctamente`)
 
 }

}