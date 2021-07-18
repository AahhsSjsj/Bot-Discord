const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "revertir",
  alias: ["rev"],

async execute (client, message, args){

 if(!args[0]) return message.lineReply('Debes Escribir Algo!')

 const revertir = args.join(' ').split('').reverse().join('')

 

 message.lineReply(`**${revertir}**`)
 
 }

}