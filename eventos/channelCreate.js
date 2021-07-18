const Discord = require('discord.js');

module.exports = async (client, channelCreate) => {

 var tipo = channelCreate.type

 if(tipo === 'text'){
     tipo: 'Texto'
 }

 if(tipo === 'voice'){
    tipo: 'Voz'
}

if(tipo === 'news'){
    tipo: 'Noticias e Actualizaciones'
}


let tipos = {
    text: "Texto",
    voice: "Voz",
    null: "Sin tipo",
    news: "Canal de noticias",
    store: "Canal de tienda",
    category: "Categoría",
  }



 const embed = new Discord.MessageEmbed()

 .setTitle("Canal Creado")
 .setDescription(`**Nombre: ${channelCreate}\nCategoria: ${channelCreate.parent}\nID: \`${channelCreate.id}\`\nTipo: \`${tipos[channelCreate.type]}\`** `)
 .setColor('GREEN')
 .setTimestamp()

 client.channels.cache.get('CANAL ID').send(embed)
  
}