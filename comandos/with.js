const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const lineReply = require('discord-reply')
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
  name: "with",
  alias: [""],

async execute (client, message, args){

 const user = message.author;

 const cantidad = args[0]
 if(!cantidad) return message.lineReply('Debes Escribir una cantidad!')

 if(cantidad === 'all'){
     const dinerobancototal = await dinerobanco.obtener(`${user.id}`)

     dinero.sumar(`${user.id}`, dinerobancototal)
     dinerobanco.restar(`${user.id}`, dinerobancototal)

     message.lineReply(`Sacaste **${dinerobancototal}** Monedas del Banco!`)
 }

 const dinerobancot = await dinerobanco.obtener(`${user.id}`)

 if(dinerobancot < cantidad){
     return message.lineReply("No Tienes tanto dinero!")
 }

 dinero.sumar(`${user.id}`, cantidad)
 dinerobanco.restar(`${user.id}`, cantidad)

 message.lineReply(`**Has Sacado \`${cantidad}\` de dinero en el banco!**`)
 
 }

}