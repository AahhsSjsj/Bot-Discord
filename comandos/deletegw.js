const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "deletegw",
  alias: ["dgw"],

execute (client, message, args){

 var perms = message.member.hasPermission("MANAGE_CHANNELS")
 if(!perms) return message.lineReply('No Tienes Permisos')

 let messageID = args[0]
 if(!messageID) return message.lineReply("Tienes que decirme una ID")

 client.giveawaysManager.delete(messageID).then(() => {
     message.lineReply("Sorteo Eliminado!")
  }).catch((err) => {
      message.lineReply(`No Se ha encontrado un sorteo con la ID ${messageID}`)
  })


 
 }

}