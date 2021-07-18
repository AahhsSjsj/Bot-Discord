const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const nsfw = require("discord-simple-nsfw")

module.exports = {
  name: "boobshentai",
  alias: [""],

async execute (client, message, args){

    if(!message.channel.nsfw) return message.channel.send("No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.
    const boobs = nsfw.boobs('hentai')

        console.log('Boobs Hentai:', boobs)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Boobs Hentai! `)
        .setColor("GREEN")
        .setImage(boobs);
        
        message.lineReply(embed);

 
 } 

}