const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "shop",
  alias: ["tienda"],

async execute (client, message, args){

 const embed = new Discord.MessageEmbed()

 .setTitle("Tienda")
 .setDescription(`Has Dinero en el comando !work`)
 .addFields(
     { name: '**Nombre:**', value: '**Galleta**'},
     { name: '**Precio:**', value: '**200**'}
 )
 .setColor("RANDOM")

 message.lineReply(embed)
 
 }

}