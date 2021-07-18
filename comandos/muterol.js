const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require("megadb")
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "muterol",
  alias: [""],

execute (client, message, args){

 var perms = message.member.hasPermission("MANAGE_ROLES")
 if(!perms) return message.lineReply("No Tienes Permisos de Para usar este comando!")

 let rol = message.mentions.roles.first();
 if(!rol) return message.lineReply("Debes Mencionar un rol!")

 muterol.establecer(message.guild.id, rol.id)

 message.lineReply(`Se Ha Establecido el rol **${rol.name}** como Rol Para Mutear!`)
 
 }

}