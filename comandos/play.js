const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb');
const distube = require("distube");

module.exports = {
  name: "play",
  alias: [],

async execute (client, message, args){

    const cancion  = args.join(" ")
    if(!cancion) return message.lineReply("Debes Escribir una canción")

    if(!message.member.voice.channel) return message.lineReply("Debes Estar en un canal de Voz!")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply("Debes Estar en un canal de voz que yo!")
 
    client.distube.play(message, cancion)
 }

}