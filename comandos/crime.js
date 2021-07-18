const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB("dinero")

module.exports = {
  name: "crime",
  alias: ["robar"],

execute (client, message, args){

 const user = message.author

 if(!dinero.tiene(`${user.id}`)){
     dinero.establecer(`${user.id}`, 0)
 }

 const crimenes = ["Has Robado un banco", 'ha tirao un policia']

 const crimenesmalos = ['ha robado un banco', 'ha tirao un policia']

 let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]

 let resultadosmalo = crimenesmalos[Math.floor(Math.random() * crimenes.length)]

 let resultados = [resultadosbuenos, resultadosmalo, resultadosmalo]

 let resultadofinal = resultados[Math.floor(Math.random() * resultados.length)]

 let dinerobueno = Math.floor(Math.random() * 175) + 100

 let dineromalo = Math.floor(Math.random() * -175) + -100

 if(resultadofinal === resultadosbuenos){

    dinero.sumar(`${user.id}`, dinerobueno)

    const embed = new Discord.MessageEmbed()

    .setTitle("Crime")
    .setDescription(`${user} ${resultadosbuenos} y ha ganado **${dinerobueno}**`)
    .setColor("GREEN")

    message.lineReply(embed)

    return;
 }

 if(resultadofinal === resultadosmalo){

    dinero.sumar(`${user.id}`, dineromalo)

    const embedmalo = new Discord.MessageEmbed()

    .setTitle("Crime")
    .setDescription(`${user} ${resultadosbuenos} y ha perdido **${dinerobueno}**`)
    .setColor('RED')

    message.lineReply(embedmalo)
 }

 
 }

}