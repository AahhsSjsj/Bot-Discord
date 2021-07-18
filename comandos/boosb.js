const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const akaneko = require('akaneko')
const NSFW = require('discord-nsfw')
const nsfw = new NSFW();

module.exports = {
  name: "boosbs",
  alias: [""],

async execute (client, message, args){


    if(!message.channel.nsfw) return message.channel.send("No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.

    const image = await nsfw.boobs(); ///definimos a img o gif que saldra en el embed.
    const embed = new Discord.MessageEmbed() ///creamos el embed.
    .setTitle("Disfrutalo ?")
    .setImage(image)
    .setColor("RANDOM")
    .setFooter(' '+client.user.username+' | NSFW', client.user.displayAvatarURL())

    message.lineReply(embed)
 
}
}