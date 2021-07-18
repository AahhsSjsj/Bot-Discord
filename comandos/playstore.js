const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const nodefetch = require('node-fetch')

module.exports = {
  name: "playstore",
  alias: ["playstore", 'pl'],
async execute (client, message, args ){

var colors = require('colors')

let generos = {
"Action" : "**`Genero De Accion`**",
"Arcadian" : "**`Genero De Arcade`**",
"Adventure" : "**`Genero De Aventura`**",
"Racing" : "**`Genero De Carreras`**",
"Card" : "**`Genero De Cartas`**",
"Casino" : "**`Genero De Casino`**",
"Casual" : "**`Genero Casual`**",
"Sports" : "**`Genero De Deportes`**",
"Educational" : "**`Genero De Educativos`**",
"Strategy" : "**`Genero De Estrategia`**",
"Board" : "**`Genero De Juegos de mesa`**",
"Role playing" : "**`Genero De Juegos de rol`**",
"Music" : "**`Genero De Música`**",
"Word" : "**`Genero De Palabras`**",
"TRIVIA" : "**`Genero De Preguntas y respuestas`**",
"Puzzle" : "**`Genero De Puzzles`**",
"Simulation" : "**`Genero De Simulación`**",
"Social" : "**`Genero Social`**",
"Aplicaciones de video" : "**`Genero Aplicaciones de video`**",
"Art and Design" : "**`Genero Arte y Diseño`**",
"Cars and Vehicles" : "**`Genero De Carros Y Vehiculos`**",
"Beauty"  : "**`Genero De Belleza`**",
"Libraries and demo"  : "**`Genero De Bibliotecas y demostración`**",
"Eat and drink" : "**`Genero De Comer y beber`**",
"Purchases" : "**`Genero De Compras`**",
"Communication" : "**`Genero De Comunicacion`**",
"Meet people" : "**`Genero De Conocer personas`**",
"Dating" : "**`Genero De Conocer personas`**",
"Comic books" : "**`Genero De Historietas`**",
"Dream" : "**`Genero De Ensueño`**",
"sports" : "**`Genero De Deportes`**",
"Education" : "**`Genero De Educación`**",
"Entertainment" : "**`Genero De Entretenimiento`**",
"Lifestyle" : "**`Genero De Estilo De Vida`**",
"Events" : "**`Genero De Enventos`**",
"Finance" : "**`Genero De Finanzas`**",
"Photography" : "**`Genero De Fotografías`**",
"Tools" : "**`Genero De Herramientas`**",
"Real estate and home" : "**`Genero De Inmuebles y hogar`**",
"Books and references" : "**``Genero De Libro  y referencias**",
"Maps and navigation" : "**`Genero De Mapas y navegación`**",
"Medicine" : "**`Genero De Medicina`**",
"Music and audio" : "**`Genero De Música y audio`**",
"Business" : "**`Genero De Negocios`**",
"News & Magazines" : "**`Genero De Noticias y revistas`**",
"Comics" : "**`Genero De Noticias, comics, revistas`**",
"Personalization" : "**`Genero De Personalización`**",
"Productivity" : "**`Genero De Productividad`**",
"Augmented reality" : "**`Genero De Realidad aumentada`**",
"Health & Wellness" : "**`Genero De Salud y bienestar`**",
"Be parents" : "**`Genero De Ser padres`**",
"Weather" : "**`Genero De Tiempo`**",
"Travels" : "**`Genero De Viajes`**",
"Use OS" : "**`Genero De Use OS`**"
}

 var play = require('google-play-scraper');

 var busqueda = args.join(" ")
 console.log(`El Usuario ${message.author.tag} Busco El Juego:`.yellow, busqueda.green)
 if(message.author.bot){
     return;
 }
 if(!busqueda){
    return message.channel.send('que quieres que busque ?')
}
play.search({
    term: busqueda,
    num: 1
    }).then(as =>{
play.app({appId: as[0].appId}).then(res => {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Informacion Del Juego: ${busqueda}`, message.author.avatarURL())
    .setColor('RANDOM')
    .setThumbnail(res.icon)
    .addField('🤠 Nombre:', `**\`${res.title}\`**`)
    .addField('<:api:865476428401213460> Funcion:', `**\`${res.summary}\`**`)
    .addField('<:Version:865411604934033428> Descargas:', `**\`${res.installs}\`**`)
    .addField('<a:TROFEOS19:865481897446473778> Rantings:', `**\`${res.ratings}\`**`)
    .addField('<a:price:865479309711376384> Precio:', `**\`${res.priceText}\`**`)
    .addField('<:ID:858938636597460994> App ID:', `**\`${res.appId}\`**`)
    .addField('Genero:', `${generos[res.genre]}`)
    .addField('<:Link:865411163553660958> App URL', `[**Click Aqui! owo**](${res.url})`)
    .addField('<:Creado:858937636659920896> Info Creadores',`**☪️ Nombre: \`${res.developer}\`\n<:Gmaik:865461532854190080> Gmail: \`${res.developerEmail}\`\n<a:Web:865412062678089749> SitioWeb: [Click Aqui](${res.developerWebsite})\n<:Direncios:865423324729704468> direcion: \`${res.developerAddress}\`\n<:ID:858938636597460994> ID: \`${res.developerId}\`**`)
    .setFooter(' '+client.user.username+' | Google Play Store', client.user.avatarURL())
    .setTimestamp()
   
    message.channel.startTyping();
    
    setTimeout(() => {
        message.lineReply(embed);
        message.channel.stopTyping()
    }, 3000)
}).catch(error => {
    message.lineReply('perdon no encontre '+busqueda)
})
})
 
 }

}
