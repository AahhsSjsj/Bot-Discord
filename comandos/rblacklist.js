const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')
const lineReply = require('discord-reply')

module.exports = {
  name: "rblacklist",
  alias: [""],

execute (client, message, args){

 const user = message.mentions.members.first()
 if(!user) return message.lineReply('Debes Mencionar a un Usuario!')

 blacklist.eliminar(user.id, user.user.tag)

 message.lineReply('EL Usuario ha sido eliminado de la blacklist')
 }
}