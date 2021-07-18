const Discord = require('discord.js');

module.exports = (client) => {

  async function createApiMessage(interaction, content){
    const apiMessage = await APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles()

    return { ...apiMessage.data, files : apiMessage.files };

} 

const array = [
	  name: `Texto`,
	  type: `PLAYING`
  },
  {
      name: `TEXTO`,
      type: `LISTENING`
  }
] 


      setInterval(() => {
        function prensence() {
          client.user.setPresence({
            status: 'dnd',
            activity: array[Math.floor(Math.random() * array.length)], 
          });
        }

        prensence()
      }, 10000);

    }