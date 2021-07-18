const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { format } = require("util");
const os = require('os') 
const lineReply = require('discord-reply')
const ms = require('ms') 
const moment = require('moment') 
const cpuStat = require('cpu-stat') 

module.exports = {
  name: "botinfo",
  alias: [],

async execute (client, message, args){

    let estados = {
        "online": "<a:onlinexd:858931285497610280> `En linea`",
        "idle": "<a:indlexdxd:858933097487138816> `Ausente`",
        "dnd": "<a:DndXd:858932313492553768> `No Molestar`",
        "offline": "<a:OnffinexD:858933041917591552> `Desconectado/invisible`"
    }
    const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 60000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    cpuStat.usagePercent(function(error, percent) {
        if(error) return message.reply(error)
        const memoryusage = formatBytes(process.memoryUsage().heapUsed)
        const node = process.version
        const CPU = percent.toFixed(2)
        const CPUModel = os.cpus()[0].model
        const cores = os.cpus().length

        const embed = new Discord.MessageEmbed()
        .setAuthor(`Estadísticas De ${client.user.username}`, client.user.displayAvatarURL(), `https://discord.com/users/${client.user.id}`)
        .setTimestamp()
        .setColor("RANDOM")
        .addField('<:NameBot:858939231916785665> Nombre', `**\`${client.user.username}\`**`, true)
        .addField('<:ID:858938636597460994> ID', `**\`${client.user.id}\`**`, true)
        .addField('<:Onywy:858938135214948352> Estado', `**${estados[client.presence.status]}**`)
        .addField('<:Creado:858937636659920896> Creado  El', `**\`${moment.utc(client.user.createdAt).format('LLLL')}\`**`)
        .addField('<:Bot:858937401337708574> Añadido Al Server', `**\`${moment.utc(client.joinedAt).format('LLLL')}\`**`)
        .addField('<:Servers:858937056905396264> Servers', `**\`${client.guilds.cache.size}\`**`, true)
        .addField('<:Channels:858936619066851338> Canales Total', `**\`${client.channels.cache.size.toLocaleString()}\`**`)
        .addField('<a:onlinexd:858931285497610280> Tiempo Activo', `**\`${days}\` Dias \`${hours}\` Horas \`${minutes}\` minutos \`${minutes}\` segundos**`)
        .addField('<:NodeJSxd:858934340423647262> Version De Node', `**\`${node}\`**`, true)
        .addField('Uso de ram <:RAM:858935453859446784>', `**\`${memoryusage}\`**`, true)
        .addField('Uso De CPU <:CPUXd:858934846621089792>', `**\`${CPU}\`**`, true)
        .addField('<:CPUXd:858934846621089792> Mode de CPU', `**\`${CPUModel}\`**`)
        .addField('Nucleos', `**\`${cores}\`**`, true)
        .setFooter(`Requerido Por: ${message.member.displayName}#${message.author.discriminator}`, message.author.displayAvatarURL())

        message.lineReply(embed)
            
        })
    
 
 }

}