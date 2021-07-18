const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require('ms')
const lineReply = require('discord-reply')

module.exports = {
  name: "reroll",
  alias: [""],

execute (client, message, args){


 var perms = message.member.hasPermission("ADMINISTRATROR")
 if(!perms) return message.lineReply("No Tienes Los Sufientes Permisos!")

 if(!args[0]) return message.lineReply("Eso No es una ID Valida !")

 let giveaway = client.giveawaysManager.giveaways.find((g) => g.price === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0])
 if(!giveaway) return message.lineReply("**No Se Ha Podido Encontrar ese Sorteo! D:**")

 client.giveawaysManager.reroll(args[0], {
     messages: {
         congrat: 'El Nuevo Ganador es {winners} ¡EnhoraBuena!',
         error: 'No Participó Nadie, No Se Puede Dar un Ganador'
     }
 }).catch((err) => {
     message.lineReply(`No Se Ha Encontrado un Sorteo con La Id **${message.id}**,Prueba de Nuevo!`)
 })
 
 }

}