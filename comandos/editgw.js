const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "editgw",
  alias: ["egw"],

execute (client, message, args){

 var perms = message.member.hasPermission("MANAGE_CHANNELS")
 if(!perms) return message.lineReply('No Tienes Permisos')

 let messageID = args[0]
 if(!messageID) return message.lineReply("Debes Decirme la ID del Sorteo")

 let nuevosganadores = args[1]
 if(!nuevosganadores) return message.lineReply("Debes Escribir un nuevo Numero de Ganadores!")

 let nuevopremio = args.slice(2).join(" ")
 if(!nuevopremio) return message.lineReply("Debes Decirme el nuevo premio")

 client.giveawaysManager.edit(messageID, {
     newWinnerCount: nuevosganadores,
     newPrice: nuevopremio
 }).then(() => {
     const numerofseconds = client.giveawaysManager.options.updateCountEvery / 1000;

     message.lineReply(`Hecho! El Sorteo Se Editara en ${numerofseconds} segundos`)
 }).catch((err) => {
     message.lineReply(`No Se ha encontrado el sorteo con la ID: **${messageID}**`)
 })
 
 }

}