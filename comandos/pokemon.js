const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch')
const lineReply = require('discord-reply')

module.exports = {
  name: "pokemon",
  alias: ["p"],

async execute (client, message, args){

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${args.join('-').toLowerCase()}/`)
        const json = await res.json()
        const id = json.id
        const pokembed = new MessageEmbed()
        .setTitle(`Informacion del Pokemon: ${json.name}`)
        .setThumbnail(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
        .addField('Tipo:', json.types.map(a => a.type.name).join('/'), true)
        .addField('Altura:', json.height ,true)
        .addField('Peso:', json.weight,true)
        .setColor('RANDOM')
        message.lineReply(pokembed)
    } catch (error) {
        message.lineReply('No se encontro el Pokemón')
 
 }

}

}
