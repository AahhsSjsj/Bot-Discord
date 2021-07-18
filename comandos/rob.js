const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
  name: "rob",
  alias: ["robar"],

async execute (client, message, args){

 const user = message.author
 const persona = message.mentions.users.first()

 if(!persona) return message.lineReply('Debes Mencionar a alguien!')

 let dineropersona = await dinero.obtener(`${persona.id}`)
 let dinerouser = await dinero.obtener(`${user.id}`)

 let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1
 let dineroaleatoriomio = Math.floor(Math.random() * dinerouser) + 1

 if(persona.id === message.author.id) return message.lineReply("No Puedes Robarte a ti mismo!!")
 if(!isNaN(args[0])) return message.lineReply("Eso no es un Usuario Valido!")

 if(dineropersona < 300) return message.lineReply("Esa Persona tiene poco dinero para Robarle")
 if(!dinero.tiene(`${persona.id}`)) return message.lineReply('Esta Persona no tiene Dinero!')
 
 let resultadomalo = ['mal']
 let resultadobueno = ['bien']
 let resultado = [resultadomalo, resultadobueno]
 let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

 //let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

 if(resultadofinal === resultadomalo){
     dinero.restar(persona.id, dineroaleatorio)

     dinero.sumar(user.id, dineroaleatorio)

     message.lineReply(`Has Robado a **${persona.tag}** y has Conseguido **${dineroaleatorio}**`)

    }

    if(resultadofinal === resultadobueno){

        dinero.restar(user.id, dineroaleatorio)

        message.lineReply(`Has intentado robar a **${persona.tag}** y has perdido **${dineroaleatorio}**`)
    }
 
 }

}