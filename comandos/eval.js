const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { inspect } = require("util")

module.exports = {
  name: "eval",
  alias: [],

execute (client, message, args){

 if(message.author.id !== '804826341471420417') return message.lineReply("No Puedes Usar este comando!")

 const command = args.join(" ")
 if(!command) return message.lineReply(" Debes Escribir un comando!")

 try {
     const evaled = eval(command)
     let palabras = ["token", "destroy"]
     if(palabras.some(word => message.content.toLowerCase().includes(word))){
         return message.lineReply("Esas Palabras no estan permitidas!")
     }
     const embed = new Discord.MessageEmbed()
     .setColor("GREEN")
     .setTitle("Evaluado Correctamente")
     .addField(`**Tipo**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``)
     .addField("**Evaluado en:**", `\`\`\`yam1\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
     .addField('**Estrada**', `\`\`\`js\n${command}\`\`\``)
     .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0 })}\`\`\``)

     message.lineReply(embed)
    } catch (error) {
        const embedfallo = new Discord.MessageEmbed()

        .setColor("RED")
        .addField(`Entranda`, `\`\`\`js\n${command}\`\`\``)
        .addField(`Error`, `\`\`\`js\n${error}\`\`\``)

        message.lineReply(embedfallo)
    }
 }
 
}

