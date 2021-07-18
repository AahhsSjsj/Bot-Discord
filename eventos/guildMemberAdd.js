const Discord = require('discord.js');
const db = require('megadb')
const mensajeb = new db.crearDB("mensajeb")
const canallb = new db.crearDB('canalb')

module.exports = async (client, member) => {

 if(!canallb.tiene(member.guild.id)) return;
 if(!mensajeb.tiene(member.guild.id)) return;

 const canal = await canallb.obtener(member.guild.id)

 const mensaje = await mensajeb.obtener(member.guild.id)

 const mensajebueno = mensaje.replace(/{user}/, member.user.username).replace(/{user.tag}/, member.tag).replace(/{servidor}/, member.guild.name).replace(/{memberCount}/, member.guild.memberCount)

    const embed = new Discord.MessageEmbed()
 .setTitle("Nuevo Miembro")
 .setDescription(mensajebueno)
 .setColor("GREEN")
 .setTimestamp()
 .setThumbnail(member.user.displayAvatarURL())

 client.channels.cache.get(canal).send(embed)

  
}