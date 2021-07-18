const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  alias: ["desbanear"],

async execute (client, message, args){

 var perms = message.member.hasPermission("BAN_MEMBERS")
 if(!perms) return message.lineReply('No Tienes Los Suficientes Permisos!')

 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.lineReply('No Tengo Los suficientes Permisos!')

 let userID = args[0];
 const member = await client.users.fetch(userID)

 message.guild.fetchBans().then(bans => {
         if(bans.size === 0) return message.lineReply("El Server No Tiene ningun Miembro Baneado!")

         let bUser = bans.find(b => b.user.id == userID)
         if(!bUser) return message.lineReply("Ese Miembro No esta Baneado!")

         message.guild.members.unban(bUser.user)
 })

 message.lineReply(`El Usuario **${member.username}** fue desbaneado!`)
 
 }

}