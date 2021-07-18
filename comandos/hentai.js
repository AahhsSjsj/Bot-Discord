const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();

module.exports = {
  name: "hentai",
  alias: [""],

async execute (client, message, args){

    if(!message.channel.nsfw) return message.channel.send("No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.
    const image = await nsfw.hentai();
const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai`)
    .setColor("GREEN")
    .setImage(image);
    
    message.lineReply(embed);

 
 }

}