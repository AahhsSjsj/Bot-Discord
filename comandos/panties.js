const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const DabiImages = require('dabi-images');
const DabiClient = new DabiImages.Client();

module.exports = {
  name: "panties",
  alias: [""],

async execute (client, message, args){

    if(!message.channel.nsfw) return message.channel.send("No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.

    DabiClient.nsfw.real.panties()
    .then((res) => {
        console.log('Panties Url:', res.url)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Panties`)
        .setColor("GREEN")
        .setImage(res.url);
        
        message.lineReply(embed);

    })

 
 }

}