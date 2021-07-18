const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "blacklist",
  alias: [""],

execute (client, message, args){

 if(message.author.id !== '804826341471420417') return message.lineReply('No Puedes Usar Este comando Solo Los Developers De Este Bot Lo Pueden Usar!')

 let user = message.mentions.members.first()
 if(!user) return message.lineReply('Debes Mencionar a un Usuario!')

 blacklist.establecer(user.id, user.user.tag)

 message.lineReply("El Usuario ha sido añadido a la BlackList!")
 
 }

}