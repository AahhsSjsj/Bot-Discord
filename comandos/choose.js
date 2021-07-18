const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "choose",
  alias: [""],

async execute (client, message, args){

 let textoDividido = args.join(" ").split(" - ")

 let textoRandom = textoDividido[Math.floor(Math.random() * textoDividido.length)]

 if(!textoDividido[1]){
     let embed = new Discord.MessageEmbed()
        .setTitle("Falta De Argumentos!")
        .setDescription("**```"+require('../config.json').prefix+"choose <opcion 1> - <opcion 2>```**")
        .setFooter('Es Obligatorio Usar el "-" para separar las opciones!')
        .setColor("RANDOM")
        message.channel.startTyping();
    
        setTimeout(() => {
            message.lineReply(embed);
            message.channel.stopTyping()
        }, 1000)
    return;
 }

 if(textoDividido[1]){

    let numeroDeOpiones = []
    let i = 1

    textoDividido.forEach(x => {
        numeroDeOpiones.push(["[" + i + "] - " + textoDividido[i - 1]] )
        i++
    })

    let embed2 = new Discord.MessageEmbed()
    .setTitle("<:xdcdxdxcx:865035127766909018> | Vamos A tomar decisiones!")
    .setDescription(numeroDeOpiones)
    .addField("📬 | Yo Elijo...", textoRandom)
    .setColor("RANDOM")

    message.channel.startTyping()

    setTimeout(() => {
        message.lineReply(embed2);
        message.channel.stopTyping()
    }, 1000)
return;
 }
 
 }

}