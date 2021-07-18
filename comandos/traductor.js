const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const traductor = require('@k3rn31p4nic/google-translate-api')

module.exports = {
  name: "traductor",
  alias: [""],

async execute (client, message, args){

const idioma = args[0]
if(!idioma) return message.lineReply('Debes Decirme un Idioma!')

const texto = args.slice(1).join(" ")
if(!texto) return message.lineReply('Debes Decirme un Texto Para Traducir')

traductor(texto, {
    to: idioma
}).then(res => {
    const embed = new Discord.MessageEmbed()

    .setAuthor('Traductor!', `https://lh3.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA=s180-rw`)
    .addField('Texto Para Traducir:', texto)
    .addField('Texto Traducido:', res.text)
    .setColor('GREEN')

    message.lineReply(embed)
})
 
 }

}