const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require('ms')

module.exports = {
  name: "sorteo",
  alias: ["sortear"],

execute (client, message, args){

 
 var perms = message.member.hasPermission("MANAGE_CHANNELS")
 if(!perms) return message.lineReply('No Tienes Permisos')

 let channel = message.mentions.channels.first()
 if(!channel) return message.lineReply("Debes Mencionar un canal")

 let giveawayDuration = args[1]
 if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.lineReply("Debes decir una durancion Valida!")

 let giveawayWinners = args[2]
 if(isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.lineReply("Debes Decir una duracion valida")

 let giveawayPrice = args.slice(3).join(" ")
 if(!giveawayPrice) return message.lineReply("Debes Decir Que Vas  A Sortear")

 client.giveawaysManager.start(channel, {
     time: ms(giveawayDuration),
     prize: giveawayPrice,
     winnerCount: parseInt(giveawayWinners),
     hostedBy: client.config.hostedBy ? message.author : null,

     messages: {
         giveaway: (client.config.everyoneMention ? "Hola\n\n" : "") + "**NUEVO SORTEO**",
         giveawayEnded: (client.config.everyoneMention ? "Feosxd\n\n" : "") + "**SE TERMINO EL SORTEO**",
         timeRemaining: 'Tiempo Restante: **{duration}**',
         inviteToParticipate: 'Reacciona en <a:giveawaysxd:858508673353515058> Para Participar',
         winMessage: "**Enhorabuena {winners}, has Ganado: {prize}**",
         embedFooter: "Acaba",
         noWinner: "Nadie Participó en el sorteo",
         winners: "ganadores",
         hostedBy: "Creado Por **{user}**",
         endedAt: "Acaba en",
         units: {
             seconds: 'segundos',
             minutes: 'minutos',
             hours: 'horas',
             days: 'dias',
             plural5: false
         }
     }
 })

 message.lineReply(`Sorteo empezado en ${channel}`)
 }

}