const Discord = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => {


    let types = {
        text: "Canal de texto",
        voice: "Canal de voz",
        null: "Sin tipo",
        news: "Canal de noticias",
        store: "Canal de tienda",
        category: "Categoría",
      }  

 const embed = new Discord.MessageEmbed()

 .setTitle("Canal Actualizado!")
 .setDescription(`**Antiguo Nombre: \`${oldChannel.name}\`\nNuevo Nombre: \`${newChannel.name}\`\nCategoria: ${newChannel.parent}\nID: \`${newChannel.id}\`\nTipo: \`${types[newChannel.type]}\`**`)
 .setColor("RANDOM")
  .setTimestamp()

  client.channels.cache.get('CANAL ID').send(embed)

}