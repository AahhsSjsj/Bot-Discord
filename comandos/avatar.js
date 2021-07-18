const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { format } = require("util");

module.exports = {
  name: "avatar",
  alias: ['pfp'],

async execute (client, message, args, msg){

  let usuario = message.mentions.members.first() || message.member;

 let embedavatar = new Discord.MessageEmbed()

 .setTitle(`Avatar de **${usuario.user.username}**`)
 .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
 .setFooter(`Pedido Por ${message.member.displayName}`, `${message.author.displayAvatarURL()}`)
 .setColor('RANDOM') 

 message.lineReply(embedavatar)
 
    }

}