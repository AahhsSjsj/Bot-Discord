const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const lineReply = require('discord-reply')
const db = require('megadb')
const automod = new db.crearDB({carpeta: 'Databases', sub: 'moderacion', nombre: 'automod'})

module.exports = {
    name: "automod",
    alias: ['badwords'],
async execute (client, message, args){

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.lineReply("❌ Errro Te Hace Falta falta los permisos de Administrator");
    const tipo = args[0]
    let tipos = ["on", "off", "word"]
    if(!tipos.some(tp => tipo == tp))return message.lineReply('Debes Elegir un tipo Valido\n`!automod <on | off | word> [valor]`')

    if(tipo === 'on'){
        if(automod.has(message.guild.id))return message.lineReply('Este Servidor Ya Tiene el autoMod Activo...\nSi Quieres Quitarlo Utiliza `!automod off`\nPara Ver La Lista de palabras Bloquedas Usa `!automod word list`')

        automod.set(`${message.guild.id}.words.idiota`, 'true')
        automod.set(`${message.guild.id}.words.estupido`, 'true')
        automod.set(`${message.guild.id}.words.puto`, 'true')
        automod.set(`${message.guild.id}.words.puta`, 'true')
        automod.set(`${message.guild.id}.words.put@`, 'true')
        automod.set(`${message.guild.id}.words.mogolico`, 'true')
        automod.set(`${message.guild.id}.words.macaco`, 'true')
        automod.set(`${message.guild.id}.words.fuck`, 'true')
        automod.set(`${message.guild.id}.words.shit`, 'true')
        automod.set(`${message.guild.id}.words.perra`, 'true')
        automod.set(`${message.guild.id}.words.pene`, 'true')
        automod.set(`${message.guild.id}.words.penis`, 'true')
        automod.set(`${message.guild.id}.words.put4`, 'true')
        automod.set(`${message.guild.id}.words.idiot`, 'true')

        message.lineReply('He Añadido al servidor el sistema de autoMod... he añadido palabras insultantes por defecto, si quieres cambiarlas usa `!automod word <remove | add>`')
    }
    if(tipo === 'off'){
        if(!automod.has(message.guild.id))return message.lineReply('El AutoMod no esta Habilito en este Servidor\nSi Quieres Habilitarlo utiliza `!automod on`')
        automod.delete(message.guild.id)
        message.lineReply('El AutoMod ha sido deshabilitado en este Servidor!')
    }
    if(tipo === 'word'){
        const subtipo = args[1]
        let tiposs = ['list', 'add', 'remove']
        if(!tiposs.some(sb => sb == subtipo))return message.lineReply('Ese Valor no es valido... intenta utilizando `!automod word <list | remove | add>`')
        if(subtipo === 'list'){
            const palabras = await automod.map(`${message.guild.id}.words`, (w, t) => `${t}`).then(palabra => {
                const embed = new Discord.MessageEmbed()
                .setTitle('Lista de Palabras del Server: '+message.guild.name+'')
                .setDescription(`• ${palabra.join('\n• ')}`)
                .setColor('RANDOM')
                .setThumbnail(message.guild.iconURL())
                message.lineReply(embed)
            })
        }
        if(subtipo === 'add'){
            if(!automod.has(message.guild.id))return message.lineReply('El Auto mod no esta habilitado en este servidor\nSi Quieres habilitarlo utiliza `!automod on`')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.lineReply('No puedes añador una palabra vacia...Utiliza `!automod word add (palabra)`')
            if(automod.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('Esta palabra ya esta añadida...')
            automod.set(`${message.guild.id}.words.${palabra}`, 'true')
            message.lineReply('Se ha añadido la palabra **'+palabra+'**\nPara remover palabras utiliza `!automod word remove (palabra)`')
        }
        if(subtipo === 'remove'){
            if(!automod.has(message.guild.id))return message.lineReply('El Auto mod no esta habilitado en este servidor\nSi Quieres habilitarlo utiliza `!automod on`')
            const palabra = args.slice(2).join(' ')
            if(!palabra)return message.lineReply('No puedes eliminar una palabra vacia... Utiliza: `!automod word remove (palabra)`')
            if(!automod.has(`${message.guild.id}.words.${palabra}`))return message.lineReply('esta palabra no esta añadida al automod')
            automod.delete(`${message.guild.id}.words.${palabra}`)
            message.lineReply('La Palabra ha sido quitada del automod!')
        }
    }
} }