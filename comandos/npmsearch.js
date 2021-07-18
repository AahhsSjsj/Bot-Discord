const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const fetch = require('node-fetch')
const lineReply = require('discord-reply')


module.exports = {
  name: "npm",
  alias: [],

async execute (client, message, args){

    const member = message.mentions.members.first() || message.member;

    const search = args.join(' ');
    if(!search) return message.lineReply('Debes agregar el paquete a buscar.');
    const request = await fetch(`https://www.npmjs.com/search/suggestions?q=${search}&size=1`);
    const json = await request.json();
    if(!json.length) return message.lineReply('El paquete no fue encontrado.');
    let links = Object.keys(json[0].links).filter((x) => x !== 'npm');
    
    links = links.length 
    ? links.map((x) => { 
    const link = x[0].toUpperCase()+x.slice(1).toLowerCase(); 
    return `**${link}**\n${json[0].links[link.toLowerCase()]}`; 
    }).join('\n')
    : 'No tiene ningún link.'; 
    
    
    const maintainers = json[0].maintainers.length 
    ? `${json[0].maintainers.map((x) => x.username).join(', ')}` 
    : 'No hay ningún colaborador.'; 
    
    const NPMEmbed = new Discord.MessageEmbed() 
    .setAuthor('Búsqueda en NPM')
    .setThumbnail('https://media.discordapp.net/attachments/832122714973143073/855232323104669716/npm-2.png?width=422&height=474')
    .setDescription(`Resultados De: **${Discord.Util.escapeMarkdown(search)}**`)
    .addField('Nombre del paquete:', `${json[0].name}`, true)
    .addField('Visitar:', `**[Click aquí](${json[0].links.npm})**`, true)
    .addField('Versión:', `${json[0].version}`, true)
    .addField('Descripción:', `${json[0].description.length ? json[0].description : 'No tiene Description!'}`) 
    .addField('Links:', `${links}`) 
    .addField('Palabras clave:', `${json[0].keywords.length ? json[0].keywords.join(', ') : 'No tiene Palabras Clave!'}`) 
    .addField('Publicado por:', json[0].publisher.username, true)
    .addField('Colaboradores: ['+json[0].maintainers.length+']', maintainers) 
    .setFooter('Pedido por: '+message.author.tag+' • Última actualización: ' +  new Date(json[0].date).toLocaleDateString()) 
    .setColor('RANDOM');
    
    
    message.lineReply(NPMEmbed); 

 
 }

}