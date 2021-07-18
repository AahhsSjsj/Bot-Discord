const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const ytsr = require('ytsr')

module.exports = {
  name: "youtube",
  alias: ["yt"],

async execute (client, message, args){

  const query = args.join(' ')
  if(!query) return message.lineReply('Proporcione una consulta de búsqueda!')

  const res = await ytsr(query).catch(c => {
      return message.lineReply('No se encontraron resultados')
  });

  const video = res.items.filter(i => i.type === 'video')[0];
  if(!video) return message.lineReply('No se encontraron resultados')

  const embed = new Discord.MessageEmbed()
    .setTitle(video.title)
    .setImage(video.bestThumbnail.url)
    .setColor('RED')
    .setDescription(`**[${video.url}](${video.url})**`)
    .setAuthor(video.author.name)
    .addField('Vistas', video.views.toLocaleString(), true)
    .addField('Duracion', video.duration, true)

    return message.lineReply(embed);
 
 }

}