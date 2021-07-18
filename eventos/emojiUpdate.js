const Discord = require('discord.js');

module.exports = async (client, oldEmoji, newEmoji) => {

    const embed = new Discord.MessageEmbed()

    .setTitle('Emoji Actualizado!')
    .setDescription(`__Emoji: ${newEmoji}__ \n\n**Antes:** \`${oldEmoji.name}\`\n**Despues:** \`${newEmoji.name}\`\n**Emoji ID:** \`${newEmoji.id}\``)
    .setColor('RANDOM')
    .setTimestamp()

    client.channels.cache.get('CANAL ID').send(embed)
 
  
}