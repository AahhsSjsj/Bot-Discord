const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
  name: "dog",
  alias: ["perro"],

async execute (client, message, args){

 const res = await fetch(`https://dog.ceo/api/breeds/image/random/`)

 const json = await res.json()
 const attachment = new Discord.MessageAttachment(json.message);

 message.lineReply(attachment)
 
 }

}