const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const lineReply = require('discord-reply')

module.exports = {
  name: "embed",
  alias: [""],

execute (client, message, args){

   const user = message.mentions.users.first() || message.guild.members.resolve(args[0]) || message.author

    var perms = message.member.hasPermission("MANAGE_MESSAGES")
    if(!perms) return message.lineReply("No tienes Permisos!")


    let texto = args.join(' ');
    if(!texto) return message.lineReply(new Discord.MessageEmbed()
  .setAuthor(`${user.username}#${message.author.discriminator}`, message.author.avatarURL())
  .setColor("RANDOM")
  .setTimestamp()
  .addField('**Error** <a:check22:851328742575964180>', `**Ecribe Lo que contiente el Embed de Discord.js! c:**`)
  .addField('**Tip**', '**No Sabes Como es?, Asi Podes Hacerlo: `Author -- Title -- Description -- Footer -- COLORNAME O HEX -- URLTITLE -- URLIMAGEN`** ')
)
    let opciones = texto.split(' -- ')

    const embed = new Discord.MessageEmbed()

    .setAuthor(opciones[0])
    .setTitle(opciones[1])
    .setDescription(opciones[2])
    .setFooter(opciones[3])
    .setColor(opciones[4])
    .setURL(opciones[5])
    .setImage(opciones[6])

    message.lineReply(embed)
 
 }

}