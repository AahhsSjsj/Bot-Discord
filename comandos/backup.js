const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const backup = require('discord-backup')
backup.setStorageFolder(__dirname+"/backups/")

module.exports = {
  name: "backup",
  alias: [""],

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.lineReply("No Tienes Permisos")

    const accion = args[0]
    if(!accion) return message.lineReply("Debes Decir que vas a hacer.")

    if(accion === 'create'){

        backup.create(message.guild, {
            jsonBeautify: true
        }).then(backupData => {
            const embed = new Discord.MessageEmbed()

            .setTitle("Backup Creado!")
            .setDescription(`Para Usar el backup escribe !backup load ${backupData.id}`)
            .setColor("RED")
            .setFooter("No Compartas el ID con nadie")

            message.author.send(embed)

            const embed2 = new Discord.MessageEmbed()

            .setTitle("Backup Creado Correctamente")
            .setDescription("El ID ha sido enviado por MD")
            .setColor('GREEN')

            message.lineReply(embed2)
        })
    }

    if(accion === 'load'){

        let backupID = args[1]
        if(!backupID) return message.lineReply("Debes Decirme el ID de Backup")

        const embedfinal = new Discord.MessageEmbed()

        .setTitle("Cargar Backup")
        .setDescription(`:warning: Cuando El Backup Se Este Cargando, Los Canales , roles y emojis seran Cambiados, Si Estas Seguro de hacer esto, reacciona en <:NodeJSxd:858934340423647262>`)
        .setColor('RED')

        backup.fetch(backupID).then(async () => {
            message.lineReply(embedfinal).then(msg => {
                msg.react('EMOJI ID o 🎈')

                msg.awaitReactions((reaction, user) => {
                    if(message.author.id !== user.id) return;

                    if(reaction.emoji.id === 'EMOJI ID o 🎈'){
                        backup.load(backupID, message.guild).then(() => {
                            clearGuildBeforeRestore: true,
                            backup.remove(backupID)
                        }).catch((err) => {
                            return message.lineReply("Hubo un error!")
                        })
                    }
                })
            })
        })
    }
    if(accion === 'info'){
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            return message.lineReply(':x: No Tienes Permisos!')
        }

        const backupID = args[1]

        if(!backupID)
        return message.lineReply(':x: Tienes Decirme Una ID Del Backup Ejemplo: !backup info 12345678910111213141516 | El Backup ID Son De 16 Numeros, Si No Tienes un Backup ID Ponga !backup create Para Crear Uno ! uwu')

        backup.fetch(backupID).then((backup) => {

            const date = new Date(backup.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

            const embed = new Discord.MessageEmbed()
                .setAuthor('❗  Informacion De Un Backup', backup.data.iconURL)
                .addFields(
                    { name: "**Nombre Del Server:**", value: `**\`${backup.data.name}\`**`, inline: true},
                    { name: "**Tamaño**", value: `**\`${backup.size + 'kb'}\`**`, inline: true},
                    { name: "**Backup Creado El:**", value: `**\`${formattedDate}\`**`, inline: true},
                    { name: "**ID Del Backup:**", value: `**\`${+backup.id}\`**`}
                )
                .setFooter(`Requerido Por: ${message.author.tag}`, message.author.avatarURL())
                .setColor('RANDOM')

                message.lineReply(embed)

        }).catch((err) => {
            return message.channel.send('**:x: Error | No se encontró un Backup con La ID: `'+backupID+'` Ponga Uno Correcto!**')
        })
    }

 
 }

}