const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  alias: ["ayuda"],

execute (client, message, args){

 const embedprincipal = new Discord.MessageEmbed()

 .setTitle("Bienvenido al apartado de Ayuda iwi")
 .setDescription('Reaciona en 💸 para ir al apartado de economia\nReacciona en ⚔ para ir al apartado de Moderacion\n\nReacciona en 🌟 para volver a la pagina principal!')
 .setFooter('UWU')
 .setColor("RANDOM")

 const embedmoderacion = new Discord.MessageEmbed()

 .setTitle("Apartado de Moderacion!")
 .setDescription("**!ban**\nBanea a un Usuario\n\n**!kick**\nExplusa a un usuario\n**!canalsgr**\nEstablece un canal de Sugerencias\n**!clear**\nBorra Mensajes")
 .setColor("GREEN")

 const embedeconomia = new Discord.MessageEmbed()

 .setTitle("Apartado de Economia!")
 .setDescription("**!work**\nConsigue Dinero!\n**!bal**\nVe Tu Dinero en total\n**!crime**\nHas un crime :eyes:")
 .setColor("RED")

 message.lineReply(embedprincipal).then(msg => {
  msg.react('💸')
  msg.react('⚔')
  msg.react('🌟')

  msg.awaitReactions((reaction, user) => {
    if(message.author.id !== user.id) return;
    if(reaction.emoji.name === '🌟'){
        msg.edit(embedprincipal)
    }

     if(reaction.emoji.name === '⚔'){
        msg.edit(embedmoderacion)
    }

     if(reaction.emoji.name === '💸'){
        msg.edit(embedeconomia)
    }
  })
 })


 
 }

}