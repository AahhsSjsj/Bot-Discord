const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "recordar",
  alias: [""],

async execute (client, message, args){

let tiempo = args[0]
if(!tiempo) return message.lineReply('Tienes Que Escribir Un Tiempo!')
let time = ms(tiempo)

let cosa = args.slice(1).join(" ")
if(!cosa) return message.lineReply('Tienes que poner que quieres recordar')

	message.lineReply("El Recordatorio se ha activado")

setTimeout(() => {
	message.channel.send(`${message.author}, tu Recordatorio de **${cosa}** se ha activado`)
}, time)
 
 }

}