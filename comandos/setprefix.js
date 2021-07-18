const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const prefix_db = new db.crearDB("prefix")

module.exports = {
  name: "setprefix",
  alias: [""],

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.lineReply("No Tienes Permisos")

    if(!args[0]) return message.lineReply("Debes Decir un Prefix Nuevo!")

    message.guild.owner.send(`el prefix ha sido cambiado a **${args[0]}**`).catch('error', (err) => message.lineReply("El Owner Tiene los Mensajes Cerrados!"))

    prefix_db.establecer(message.guild.id, args[0])

    message.lineReply(`El Prefix ha sido Cambiado a **${args[0]}**`)
 
 }

}