const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
  name: "bal",
  alias: [""],

async execute (client, message, args){

 const user = message.mentions.users.first() || message.author;

  if(!dinero.tiene(`${user.id}`)){
    dinero.establecer(`${user.id}`, 0)
  }

 if(!dinerobanco.tiene(`${user.id}`)){
   dinerobanco.establecer(`${user.id}`, 0)
 }

 const dinerototal = await dinero.obtener(`${user.id}`)
 const dinerobancototal = await dinerobanco.obtener(`${user.id}`)

 message.lineReply(new Discord.MessageEmbed()
    .setAuthor(`Dinero de ${user.tag}`)
    .setDescription(`**Dinero:**\n**\`$${dinerototal}\`** \n**Dinero En El Banco:**\n**\`$${dinerobancototal}\`** \n**Dinero En Total:**\n**\`$${dinerototal + dinerobancototal}\`**`)
    .setFooter(`Requerido Por: ${user.username}`, message.author.avatarURL())
    .setColor('RANDOM')
   )
 
 }

}