const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const canallb = new db.crearDB('canalb')


module.exports = {
  name: "canalb",
  alias: [""],

async execute (client, message, args){

 var perms = message.member.hasPermission("ADMINISTRADOR")
 if(!perms) return message.lineReply('No tienes permisos!')

 const id = [0]
 if(!id) return message.lineReply('Debes decir una ID!')

 const canal =  message.mentions.channels.first() || client.canal.cache.get(id)
 const canalservidor = message.guild.channels.resolve(canal.id)
 if(!canalservidor) return message.lineReply("Debes Eligir un canal del servidor!")

 canallb.establecer(message.guild.id, canal.id)
 message.lineReply(`El Canal Para Dar Las Bienvenidas será **${canal.name}**`)
 
 }

}