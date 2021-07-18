const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const cosa = new db.crearDB('canalsugerencias')
const sugerencia = new db.crearDB('sugerencia')

module.exports = {
  name: "sugerencia",
  alias: ["sg"],

async execute (client, message, args){

 const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
 const canalsugerencia = client.channels.cache.get(canal)

 if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
  message.lineReply("Este Servidor No Tiene ningún canal establecido!")

  return;
 }

 const usuario = message.author

 const sugerencia = args.join(" ")
 if(!sugerencia) return message.lineReply(new Discord.MessageEmbed()
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp()
  .addField('**Error** <a:check22:851328742575964180>', `**Pon Un Texto Para una sugerencia!**`)
  .addField('**Tip**', '**No Sabes Como es?, Asi Podes Hacerlo: `!sugerencia <Texto>`** ')
 )

 const embed = new Discord.MessageEmbed()

 .setTitle("Nueva Sugerencia!")
 .setAuthor(usuario.tag, message.author.displayAvatarURL())
 .setDescription(`${sugerencia}`)
 .setColor("RANDOM")
 .setFooter("Si Quieres Manda una sugerencia pon !sugerencia <Texto Sugerencia>")

 const embedbueno = new Discord.MessageEmbed()

 .setTitle("Toda ha Salido Bien!")
 .setDescription("La Sugerencia fue envidado al canal establecido")
 .setFooter("Si Quieres Manda una sugerencia pon !sugerencia <Texto Sugerencia>")
 .setColor("RANDOM")

 message.lineReply(embedbueno)

 canalsugerencia.send(embed).then(async msg => {
  await msg.react('851329026307915796');
  await msg.react('851328742575964180')
 })
 }

}