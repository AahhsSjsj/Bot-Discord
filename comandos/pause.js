const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "pause",
  alias: [],

async execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)
  
  if(!message.member.voice.channel) return message.lineReply("Debes Estar en un Canal De Voz!")
  
  if(!message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply('Debes Estar en el mismo canal de voz que yo!')
  
  if(!serverQueue) return message.lineReply("No Hay canciones reproduciendose")
  
  if(serverQueue.pause) return message.lineReply("La Musica ya estaba Pausada ")
  
  client.distube.pause(message)
  
  message.lineReply("La Cancion fue pausada Correctamente!")
 
 }

}