const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require ('megadb');
const antienlaces = new db.crearDB('antienlaces')

module.exports = {
  name: "antilinks",
  alias: ["antienlaces"],

async execute (client, message, args){

 const servidor = message.guild.id
 
 var permisos = message.member.hasPermission("ADMINISTRATOR")
 if(!permisos) return message.lineReply('No Tienes Los  Permisos Suficientes!')

 const accion = args[0]
 if(!accion) return message.lineReply('Debes Decir si Bas a activar los enlaces (on) o descativalo (off)')

 if(accion === 'off'){

    antienlaces.establecer(servidor, servidor)

    message.lineReply("Los AntiEnlances han sido desactivados, ya podeis Mandarlos!")
 }

 if(accion === 'on'){

    antienlaces.eliminar(servidor)

    message.lineReply('Los antienlaces han sido activados, ya no podeis mandarlos!')
 }
 
 }

}
