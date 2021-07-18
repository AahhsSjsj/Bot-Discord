const Discord = require('discord.js');

module.exports = async (client, channelDelete) => {

 var tipo = channelDelete.type

 if(tipo === 'text'){
     tipo: 'Texto'
 }

 if(tipo === 'voice'){
    tipo: 'Voz'
}

if(tipo === 'news'){
    tipo: 'Noticias e Actualizaciones'
}

let types = {
    text: "Canal de texto",
    voice: "Canal de voz",
    null: "Sin tipo",
    news: "Canal de noticias",
    store: "Canal de tienda",
    category: "Categoría",
  }



 const embed = new Discord.MessageEmbed()

 .setTitle("Canal Eliminado")
 .setDescription(`**Nombre: #${channelDelete.name}\nCategoria: ${channelDelete.parent}\nID: \`${channelDelete.id}\`\nTipo: \`${types[channelDelete.type]}\`** `)
 .setColor('RED')
 .setTimestamp()

 client.channels.cache.get('CANAL ID').send(embed)
  
}