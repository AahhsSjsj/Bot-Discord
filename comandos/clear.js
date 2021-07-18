const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  alias: ["borrar"],

execute (client, message, args){


 const cantidad = args.join(" ");

 var perms = message.member.hasPermission("MANAGE_MESSAGES")
 if(!perms) return message.lineReply(`**Necesitas El Pemisos "MANAGE_MESSAGES"** `)

 if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Necesito el permisos **Gestionar Mensajes** para Borrar Los Mensajes!")

 if(!cantidad) return message.lineReply("Debes Escribir Una Cantidad!")

 if(cantidad === '0') return message.lineReply(`Debes escribir un numero mayor que "0" `)



 message.channel.bulkDelete(cantidad).then(()=> {
  message.channel.send(`**${cantidad}** mensajes borrados`)
 })
 
 }

}