const Discord = require('discord.js')
const client = new Discord.Client()
const { Client, MessageEmbed } = require('discord.js')
const ms = require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const ytsr = require('ytsr')

module.exports = {
	name: "youtube-seach",
	alias: [''],

async execute (client, message, args){

	const query = args.join(' ')
	if(!query) return message.lineReply('Debes Escribir una busqueda!')

	const res  = await ytsr(query).catch(c => {
		return message.lineReply('no se encontro resultados con esa busqueda!')
	});

	const video = res.items.filter(i => i.type === 'video')[0];
	if(!video) return message.lineReply('no se encontro resultados')

	const embed = new Discord.MessageEmbed()
		.setTitle(video.title)
		.setImage(video.bestThumbnail.url)
		.setColor('RED')
		.setDescription(`**[CLick Aqui Para El Video](${video.url})**`)
		.setAuthor(video.author.name)
		.addField('VIstas', video.views.toLocaleString(), true)
		.addField('Duracion', video.duration, true)

		message.lineReply(embed);
}
}