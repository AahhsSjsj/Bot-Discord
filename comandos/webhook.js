const Discord = require("discord.js");
const client = new Discord.Client();
const { WebhookClient, MessageEmbed } = require("discord.js");

module.exports = {
  name: "packmio",
  alias: [""],

async execute (client, message, args){

//https://canary.discord.com/api/webhooks/864740887652728833/gnmYE4rghsF3CBooaFTRMRNugl4FhNCJJX6qw2lI5rX6O4AlwptVqT6pPIKbxt_9DtvD

 const wc = new WebhookClient('864740887652728833', 'gnmYE4rghsF3CBooaFTRMRNugl4FhNCJJX6qw2lI5rX6O4AlwptVqT6pPIKbxt_9DtvD')
    const embed = new MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/864727947390091265/864740397254967326/IMG_14042021.png').setColor('RANDOM').setFooter('Todo Tuyo Stefano uwu', client.user.avatarURL())
 wc.send({
     username : message.author.displayName,
     avatarURL : message.author.displayAvatarURL({ dynamic : true }),
     embeds : [embed]
 })
 
 }

}