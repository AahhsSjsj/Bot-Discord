const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB("dinero")
const blacklist = new db.crearDB('blacklist')

let coolwond = new Set();

module.exports = {
  name: "work",
  alias: ["w"],

execute (client, message, args){

 const user = message.author

  if(blacklist.tiene(user.id)) return message.lineReply('No Puedes Usar Este comando!')

  if(coolwond.has(message.author.id)){
    message.lineReply(`${message.author}, espera 10s antes de volver usar este comando!`).then(m => m.delete({timeout: 2000}));

    return;
  }

  coolwond.add(message.author.id);

  setTimeout(() => {
    coolwond.delete(message.author.id);
  }, 10000);


 if(!dinero.tiene(`${user.id}`))
   dinero.establecer(`${user.id}`, 0)

 let random = Math.floor(Math.random() * 175) + 100

 let trabajo = ["policia", "profesor", "pedo XD"]
 let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

 dinero.sumar(`${user.id}`, random)

 const embed = new Discord.MessageEmbed()

 .setTitle("Trabajo")
 .setDescription(`El Usuario ${user} ha Trabajado de ${randomtrabajo} y gano **${random}$**`)
 .setColor("RANDOM")

 message.lineReply(embed)
 
 }

}