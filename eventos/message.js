const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const db = require('megadb')
const lineReply = require('discord-reply')
const mongoose = require('mongoose')

module.exports = async (client, message) => {


   const db = require('megadb')
   const prefix_db = new db.crearDB('prefix')
    let prefix;
    
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = '!'
    }
      
      if(!message.content.startsWith(prefix)) return;
      if(message.author.bot) return;
      
      let usuario = message.mentions.members.first() || message.member; 
      const args = message.content.slice(prefix.length).trim().split(/ +/g); 
      const command = args.shift().toLowerCase(); 
      
      let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
      if(cmd){
        cmd.execute(client, message, args)
      }

      if(!cmd){
        const embednoexiste = new Discord.MessageEmbed()
        .setTitle("EL COMANDO NO EXISTE")
        .setDescription(`**<a:check22:851328742575964180> | El Comando \`"${command}"\` No Existe o las has debido De Escribir mal, Si Quieres Ver Mis Comandos haz \`${prefix}help\`**`)
        .setFooter(`Estas Usando a ${client.user.tag}`)
        .setColor('RANDOM')
        .setTimestamp()
        message.lineReply(embednoexiste)
      }
}