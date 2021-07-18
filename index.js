const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const db = require('megadb')
const lineReply = require('discord-reply')
const mongoose = require('mongoose')
const distube = require('distube')
const fetch = require('node-fetch')
var colors = require('colors')




mongoose.connect('Mongo Server', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('Conectado a MongoDB!'.red))

require('dotenv').config();

const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
const keepAlive = require('./server.js');

const fs = require('fs')


const config = require('./config.json')
client.config = config

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaway.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWin: false,
    exemptPermissions: [],
    embedColor: 'RANDOM',
    embedColorEnd: 'RANDOM',
    reaction: "ID EMOJI O 🎉"
  }
})

///////////////Handler////////////////////

var colors = require('colors')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
    console.log(`✅ Comando Cargado:`.bgYellow, `${command.name}`.rainbow)
}


for(const file of fs.readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
    console.log(`✅ Evento Cargado:`.bgRed, `${fileName}`.rainbow)
  }
}

const Distube = require('distube')
client.distube = new Distube(client, {
  emitNewSongOnly: true,
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playList) => {
  message.channel.send(`PlayList Añadida: **${playList.name}** - **${playList.songs.length}** Canciones`)
})

client.distube.on("addSong", (message, queue, song) => {
  const embed = new Discord.MessageEmbed()

  .setAuthor('Cancion Agregrada!')
  .addFields(
    { name: "Cancion:", value: `**\`${song.name}\`**`, inline: true},
    { name: "Duracion De La Musica:", value: `**\`${song.formattedDuration}\`**`, inline: true}
  )
  .setColor('RANDOM')

  message.lineReply(embed)
})

client.distube.on("playSong", (message, queue, playsong) => {
  const embed2 = new Discord.MessageEmbed()

  .setAuthor('Reproduciendo Una Cancion!')
  .addFields(
    { name: "Cancion Reproduciendo Ahora:", value: `**\`${playsong.name}\`**`, inline: true},
    { name: "Duracion:", value: `**\`${playsong.formattedDuration}\`**`, inline: true}
    )
    .setColor('RANDOM')

    message.lineReply(embed2)
})

client.distube.on("playList", (message, queue, playList) => {
  const embed3 = new Discord.MessageEmbed()

  .setAuthor('Reproduciendo Una PlayList!')
  .addFields(
    { name: "PlayList Reproduciendo Ahora:", value: `**\`${playList.name}\`**`, inline: true}    )
    .setColor('RANDOM')

    message.lineReply(embed3)

})

client.distube.on("error", (message, queue, error) => {
  console.log(error)
})



client.snipes = new Map()


const Monitor = require('ping-monitor');
const message = require('./eventos/message.js');
const { eventNames } = require('process');

keepAlive();
const monitor = new Monitor({
   website: "https://lovebott.herokuapp.com",
   title: 'Hola!',
   interval: 5     
})

client.on('message', async message => {

  if(message.author.bot)return;

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {

    const embed = new Discord.MessageEmbed()
  
    .setTitle("Buenas")
    .setDescription(`**Hola Soy ${client.user.username}, Si Quieres Ver Mis Comandos Pon \`${require('./config.json').prefix}help\` Gracias**`)
    .setColor("RANDOM")
    message.lineReply(embed)

    console.log('El Usuario:'.yellow, `${message.author.tag}`.green, "Uso Un Comando!".yellow)
  }

  const automod = new db.crearDB({carpeta: 'Databases', sub: 'moderacion', nombre: 'automod'})
    if(automod.has(message.guild.id)){
      const palabras = await automod.map(`${message.guild.id}.words`, (w, t) => `${t}`).then(pa => {
      
        pa.some(palab => {
          if(message.content.includes(palab)){
            message.delete()
            message.channel.send(`${message.author} porfavor intenta evitar utilizar palabras hirients o vulgares`)
          }
        })
      })
    }
})

client.on('guildMemberAdd', async (member) => {


const embed = new Discord.MessageEmbed()

.setTitle(' Un Usuario se ha unido!')
 .setDescription(`El Usuario **${member.user.username}** se ha unido al servidor!\n\nNo Olvides leerte el canal de <#858037153908785194> Para Evitar problemas\nEspero que te lo pases muy Bien`)
 .setFooter("Gracias por unirte ")
 .setColor("RANDOM")

 client.channels.cache.get('CANAL ID').send(embed)

})

client.on("guildMemberRemove", async (member) => {

  const embed = new Discord.MessageEmbed()

  .setTitle(' Un Usuario se ha ido!')
  .setDescription(`El Usuario **${member.user.username}** se ha ido del servidor espero que vuelva!`)
  .setFooter("Esperamos que vuelva!")
  .setColor("RANDOM")




 client.channels.cache.get('CANAL ID').send(embed)

})

client.on('messageDelete', message => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
})

client.on('ready', async (member) => {

  const embed = new Discord.MessageEmbed()
  .setAuthor('Estoy Listo! ')
  .setDescription(`**EL Bot: ${client.user.tag} Esta Listo Ya Pueden Usar Sus Comandos, ${require("./config.json").prefix}help Para Ver Comandos!**`)
  .setFooter('Bot En '+client.guilds.cache.size+' Servers y En Canales Totales Es: '+client.channels.cache.size.toLocaleString()+' En Total!', client.user.avatarURL())
  .setColor('RANDOM')

  client.channels.cache.get('Canal ID').send('<@TU ID>',embed)
})












require('./logger')(client);


client.login(`${require('./config.json').token}`)
