const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')

module.exports = {
  name: "slowmode",
  alias: [],

async execute (client, message, args){

 if(!message.member.hasPermission("MANAGE_CHANNELS"))  return message.lineReply('No Tienes Permisos !')

 let channel = message.channel

 let time = args[0]

 

 if(time === 'off'){
   channel.setRateLimitPerUser(0)

   return message.lineReply('El **SlowMode** Para Este Canal ha sido **desactivado**')
 }

 let convert = ms(time)
 let tuSecond = Math.floor(convert / 1000)

 if(!tuSecond || tuSecond == undefined) return message.lineReply("Debes Poner un Tiempo!")

 await channel.setRateLimitPerUser(tuSecond)
 message.lineReply(`El **Slowmode** para este canal Ahora es **${convert}**`)
}

}