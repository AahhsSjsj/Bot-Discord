const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  alias: ["patear"],

execute (client, message, args){

 var perms = message.member.hasPermission("KICK_MEMBERS")
 if(!perms) return message.lineReply("No Tienes Permisos Para Usar este comando!") 

 const user = message.mentions.members.first()
 if(!user) return message.lineReply("Debes Mencionar a un Miembro!")

 if(user === message.author) return message.lineReply("No Te puedes explusar a ti mismo!")

 var razon = args.slice(1).join(' ')
 if(!razon){
    razon = 'No Especificado'
 }

 message.guild.member(user).kick(razon);

 message.lineReply(new Discord.MessageEmbed()
        .setAuthor('Kick Member')
        .setDescription(`**El Usuario: ${user} fue Expulsado**`)
        .addField(`**Razon:**`, `${razon}`)
        .addField(`**Por El Moderador:**`, `${message.author}`)
        .setColor("RANDOM")

 )
 
 }

}