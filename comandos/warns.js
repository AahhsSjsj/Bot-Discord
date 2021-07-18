const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const warns = new db.crearDB("warns")

module.exports = {
  name: "warns",
  alias: ["avisos"],

async execute (client, message, args){

  var perms = message.member.hasPermission('KICK_MEMBERS')
  if(!perms) return message.lineReply('No Tienes permisos para usar este comando')

  let persona = message.mentions.members.first()
  if(!persona) return message.lineReply('Debes Mencionar a alguien')

  let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

  if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
    message.lineReply("Esa Persona no tiene warns!")

    return;
  }

  message.lineReply(`${persona} Tiene **${cantidad}** de warns!`)
 
 }

}