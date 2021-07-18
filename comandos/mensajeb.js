const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const mensajeb = new db.crearDB("mensajeb")

module.exports = {
  name: "mensajeb",
  alias: [""],

async execute (client, message, args){

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

 const mensaje = args.join(" ")
 if(!mensaje) return message.lineReply("Debes Escribir un mensaje!")

 //{user}
 //{user.tag}
 //{servidor}
 //{memberCount}
 //member.guild.id {servidorid}

 mensajeb.establecer(message.guild.id, mensaje)
 message.lineReply(`El Mensaje para dar bienvenida sera este: \n\n**${mensaje}**`)
 
 }

}