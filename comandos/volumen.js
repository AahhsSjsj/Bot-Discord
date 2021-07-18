const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "volumen",
  alias: ["volume"],

async execute (client, message, args){


  const serverQueue = client.distube.getQueue(message)
  
  if(!message.member.voice.channel) return message.lineReply("Debes Estar en un Canal De Voz!")
  
  if(!message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply('Debes Estar en el mismo canal de voz que yo!')
  
  if(!serverQueue) return message.lineReply("No Hay canciones reproduciendose")
  
  const volume = args[0]
  if(!volume) return message.lineReply('Debes Decirme un Volumen!')
  if(!isNaN) return message.lineReply("Debes Decir un Numero.")
  
  if(volume < 1) return message.lineReply("El Numero Debe ser Mayor que 0")
  if(volume > 500) return message.lineReply("El Numero Debe Ser menor que 500!")
  
  client.distube.setVolume(message, volume)
  message.lineReply(`El Volumen se ha establecido al **${volume}**%`)
 }

}