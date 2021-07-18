const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  alias: ["info"],

execute (client, message, args){

 let estados = {
     "online": "🟢 En linea",
     "idle": "🟡Ausente",
     "dnd": "⛔ No Molestar",
     "offline": "⚫ Desconectado/invisible"
 }

 const member = message.mentions.members.first() || message.member;

 function formatDate (template, date){
 var tiempo = 'YYYY:MM:DD:HH:MM:SS'.split(':')
 date = new Date(date || Date.now() - new Data().getTimezoneOffset() * 6e4)
 return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {

 }, template)
 }

 const embedinfo = new Discord.MessageEmbed()

 .setColor("RANDOM")
 .setDescription(`**Informacion De ${member}:**`)
 .addField(`**Nombre:**`, `**${member.user.tag}**`)
 .addField(`**ID:**`, `**${member.user.id}**`)
 .addField("**Apodo del usuario:**", `**${member.nickname !== null ? `${member.nickname}`: 'ninguno'}**`)
 .addField("Union al servidor:", formatDate('DD/MM/YYYY, a las HH:MM:SS', member.joinedAt))
 .addField("**Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
 .addField("**Boost:**", member.premiumSince ? 'Usuario Booster' : 'Usuario no Booster')
 .addField('Estado', estados[member.user.presence.status])
 .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: 'true'} ))

 message.lineReply(embedinfo)
 
 }

}