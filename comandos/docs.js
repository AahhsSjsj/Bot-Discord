const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const fetch = require('node-fetch')

module.exports = {
  name: "docs",
  alias: [""],

async execute (client, message, args){

    let [query, branch] = args;

    if (!query) return message.lineReply("Incluya una consulta de búsqueda.");
    if (!branch) branch = "master";

    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(json => {
            if (!json) return message.lineReply("¡Extraviado!");

            message.lineReply({ embed: json });
        })
        .catch(() => {
            message.channel.send("¡No se pudieron recuperar los documentos!");
        })
 
 }

}