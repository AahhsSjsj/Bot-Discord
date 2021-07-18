const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require('ms')
const db = require('megadb')
const muterol = new db.crearDB('muterol')

module.exports = {
  name: "mute",
  alias: [""],

async execute (client, message, args){

 var perms = message.member.hasPermission("BAN_MEMBERS")
 if(!perms) return message.lineReply("No Tienes Permisos!")

 let time = args[1]
 if(!time) return message.lineReply("Debes Decir Un Tiempo!")
 let timer = ms(time)

 let mencionado = message.mentions.members.first()
 if(!mencionado) return message.lineReply("Debes Mencionar a alguien!")

 var razon = args[2]
 if(!razon){
     razon = 'No Especificado!'
 }

 if(!muterol.tiene(message.guild.id)) return message.lineReply("Este Servidor No Tiene Ningún Rol Para Mutear")

 let rol = await muterol.obtener(message.guild.id)

 if(mencionado.roles.cache.has(rol)) return message.lineReply("Este Usuario Ya Esta Muteado")

 mencionado.roles.add(rol)

 message.lineReply(new Discord.MessageEmbed()
 .setAuthor('Mute!')
 .setTitle('A Alguien lo han muteado!')
 .addField(`**Moderador:**`, `**${message.author.tag}**`)
 .addField(`**Usuario Muteado:**`, `**${mencionado}**`)
 .addField(`**Tiempo Del Mute:**`, `**${time}**`)
 .addField(`**Razon Del Mute:**`, `**${razon}**`)
 .setFooter(`Comando Mute!`)
 .setTimestamp()
 .setColor('RANDOM')
)


 await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await mencionado.send("Se Acabo El Mute!").catch(error => {
        message.lineReply(`Hubo un error inesperado! **${error}**`)
    })
 }, timer)
 
 }

}