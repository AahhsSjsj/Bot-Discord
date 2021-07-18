const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const nodefetch = require('node-fetch')
const lineReply = require('discord-reply')
const Instagram = require('user-instagram')
const db = require('megadb')
const igcuentas = new db.crearDB({carpeta: 'Cuentas', sub: 'Cuentas-ig', nombre: 'igcuentas'})

module.exports = {
        name: "ig",
        alias: ['ig'],
  async execute (client, message, args){

       const tipo = args[0]
       let tipos = ['cuentas', 'on', 'off', 'info']
       if(!tipos.some(tp => tipo == tp))return message.channel.send('Debes Poner Un Tipo, tipos:\n`a!ig <cuentas - on - off> [valor]`')

       if(tipo === 'on'){

           igcuentas.set(`${message.guild.id}.words.evelin.acacio`, 'true')
           igcuentas.set(`${message.guild.id}.words.ts_community_karims`, 'true')
           igcuentas.set(`${message.guild.id}.words.gonderzz`, 'true')

           message.lineReply('He Añadido 3 Cuentas A La Lista Para Verlas Ponga a!ig cuentas list !')   
       }
       if(tipo === 'off'){
          if(!igcuentas.has(message.guild.id))return message.lineReply('No Esta Activa eL Agregramiento De CUentas Ponga a!ig cuentas on Para Activalo !')
          igcuentas.delete(message.guild.id)
        message.lineReply('El Agregramiento De Cuentas Ig Ha Sido Desactivado!')
       }
       if(tipo === 'cuentas'){
        const subtipo = args[1]
        let tiposs = ['list', 'add', 'remove', 'if']
        if(!tiposs.some(sb => sb == subtipo))return message.lineReply('Ese Valor no es valido... intenta utilizando `!ig cuentas <list | remove | add>`')
        if(subtipo === 'list'){
            const palabras = await igcuentas.map(`${message.guild.id}.words`, (w, t) => `${t}`).then(palabra => {
                const embed = new Discord.MessageEmbed()
                .setTitle('Lista de Palabras del Server: '+message.guild.name+'')
                .setDescription(`• ${palabra.join('\n• ')}`)
                .setColor('RANDOM')
                .setThumbnail(message.guild.iconURL())
                message.lineReply(embed)
            })
        }
        if(subtipo === 'add'){
          if(!igcuentas.has(message.guild.id))return message.lineReply('No Esta Activa eL Agregramiento De CUentas Ponga a!ig on Para Activalo !')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.lineReply('**No puedes añador una palabra vacia...Utiliza `a!ig cuentas add (palabra) (url de tu cuenta)`**')
            if(igcuentas.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('Esta palabra ya esta añadida...')
            igcuentas.set(`${message.guild.id}.words.${palabra}`, 'true')
            message.lineReply('**Se ha añadido la palabra `'+palabra+'`` \nPara remover palabras utiliza `a!ig cuentas remove (palabra)`**')
        }
        if(subtipo === 'remove'){
          if(!igcuentas.has(message.guild.id))return message.lineReply('No Esta Activa eL Agregramiento De CUentas Ponga a!ig on Para Activalo !')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.lineReply('No puedes eliminar una palabra vacia... Utiliza: `a!ig cuentas remove (palabra)`')
            if(!igcuentas.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('esta palabra no esta añadida A La Lista De Cuentas!')
            igcuentas.delete(`${message.guild.id}.words.${palabra}`)
            message.lineReply('La Palabra ha sido quitada del LAs Cuentas De Igs!')
        }
    }
}

}

