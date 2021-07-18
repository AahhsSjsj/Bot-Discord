const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "stop",
  alias: [""],

async execute (client, message, args){

const serverQueue = client.distube.getQueue(message)
  
  if(!message.member.voice.channel) return message.lineReply("Debes Estar en un Canal De Voz!")
  
  if(!message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply('Debes Estar en el mismo canal de voz que yo!')
  
  if(!serverQueue) return message.lineReply("No Hay canciones en La Lista!")
  
  client.distube.stop(message)
  
  message.lineReply("La PlayList Fue Eliminada!")
 
 }

}