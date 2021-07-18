const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const lineReply = require('discord-reply')


module.exports = {
  name: "ping",
  alias: ["ping"],

async execute (client, message, args){

  const msg = await message.lineReply(`🏓 Haciendo ping...`)
  const embed = new MessageEmbed()
    .setTitle('Pong!')
    .setDescription(`**El ping de WebSocket es ${client.ws.ping} MS**\n**El Ping de Edición del mensaje es ${Math.floor(msg.createdAt - message.createdAt)} MS!**`)
    .setColor('RANDOM')

    await message.lineReply(embed)
    msg.delete()
 
 }

}