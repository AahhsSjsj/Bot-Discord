const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
  name: "dep",
  alias: ["depositar"],

async execute (client, message, args){

  const user = message.author; 

 const cantidad = args[0]
 if(!cantidad) return message.lineReply("**Debes Decir una cantidad! o \`!dep all\` Para Guardar Todo el dinero!**")

 if(cantidad === 'all'){
     const dinerototal = await dinero.obtener(`${user.id}`)

     dinero.restar(`${user.id}`, dinerototal)
     dinerobanco.sumar(`${user.id}`, dinerototal)

     message.lineReply(`Has Guardado **${dinerototal}** Dinero en el Banco!`)
 }

 const dinerot = await dinero.obtener(`${user.id}`)

 if(cantidad < dinerot) return message.lineReply("No Tienes Tanto Dinero!")

 dinero.restar(`${user.id}`, cantidad)
 dinerobanco.sumar(`${user.id}`, cantidad)
 
 }

}