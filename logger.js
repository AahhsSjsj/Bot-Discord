const Discord = require("discord.js");
const fs = require("fs");
var colors = require('colors')
module.exports = (c) => {
    console.log("Módulo registrador cargado".green);

    let types = {
        text: "Canal de texto",
        voice: "Canal de voz",
        null: "Sin tipo",
        news: "Canal de noticias",
        store: "Canal de tienda",
        category: "Categoría",
      }

    try{
      c.on("channelCreate", function(channel){
        send_log(c,
          channel.guild,
          "GREEN",
          "CANAL CREADO!",
          `**Nombre del Canal: <#${channel.id}>\nID: \`${channel.id}\`\ntipo: \`${types[channel.type]}\`\nCategoria: ${channel.parent}**`
        )
      })
      c.on("channelDelete", function(channel){
        send_log(c,
          channel.guild,
          "RED",
          "CANAL ELIMINADO!",
          `**Nombre del Canal: \`${channel.name}\`\nID: \`${channel.id}\`\ntipo: \`${types[channel.type]}\`\nCategoria: ${channel.parent}**`
        )
      })
      c.on("channelPinsUpdate", function(channel, time){
        send_log(c,
          channel.guild,
          "YELLOW",
          "ACTUALIZACIÓN DE PINS DE CANALES",
          `**Nombre del Canal: <#${channel.id}> - \`${channel.name}\`\nID: \`${channel.id}\`\nFijado en \`${time}\`\nCategoria: ${channel.parent}**`
          , "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/pushpin_1f4cc.png"
        )
      })
      c.on("channelUpdate", function(oldChannel, newChannel){
        let newCat = newChannel.parent ? newChannel.parent.name : "SIN PADRE";
        let guildChannel = newChannel.guild;
        if(!guildChannel || !guildChannel.available) return;

        let types = {
          text: "Canal de texto",
          voice: "Canal de voz",
          null: "Sin tipo",
          news: "Canal de noticias",
          store: "Canal de tienda",
          category: "Categoría",
        }

        if(oldChannel.name != newChannel.name){
          send_log(c,
            oldChannel.guild,
            "YELLOW",
            "Canal ACTUALIZADO - NOMBRE",
            `**\`\`\`ANTIGUOS CAMBIOS:\`\`\`\nNombre del Canal: \`${oldChannel.name}\`\nCanal ID: \`${oldChannel.id}\`\nTipo De Canal: \`${types[oldChannel.type]}\`** \n\n`+
            `**\`\`\`NUEVOS CAMBIOS:\`\`\`\nNombre del Canal: \`${newChannel.name}\`\nCanal ID: \`${newChannel.id}\`\nTipo De Canal: \`${types[oldChannel.type]}\`**`
          )
        }
        else if(oldChannel.type != newChannel.type){
          send_log(c,
            oldChannel.guild,
            "YELLOW",
            "Canal Actualizado - Tipo De Canal",
            `Nombre del Canal: \`${oldChannel.name}\`\nCanal ID: \`${oldChannel.id}\`\nTipo  De Canal: \`${types[oldChannel.type]}\`\n\n`+
            `Nombre Del Canal: \`${newChannel.name}\`\nCanal ID: \`${newChannel.id}\`\nTipo de Canal: \`${types[newChannel.type]}\``
          )
        }
        else if(oldChannel.topic != newChannel.topic){
          send_log(c,
            oldChannel.guild,
            "YELLOW",
            `Nombre del Canal: \`${oldChannel.name}\`\nCanal ID: \`${oldChannel.id}\`\nTipo  De Canal: \`${types[oldChannel.type]}\`\n\n`+
            `Nombre Del Canal: \`${newChannel.name}\`\nCanal ID: \`${newChannel.id}\`\nTipo de Canal: \`${types[newChannel.type]}\``
          )
        }


      })
      c.on("emojiCreate", function (emoji) {
          send_log(c,
            emoji.guild,
            "GREEN",
            "EMOJI CREADO",
            `EMOJI: ${emoji}\nNombre De Emoji: ${emoji.name}\nEmoji ID: ${emoji.id}\nEmoji ID: ${emoji.url}`,
          )
      });

      c.on("emojiDelete", function (emoji) {
          send_log(c,
            emoji.guild,
            "RED",
            "EMOJI ELIMINADO",
            `EMOJI: ${emoji}\nNombre De Emoji: ${emoji.name}\nEmoji ID: ${emoji.id}\nEmoji ID: ${emoji.url}`,
          )
      });

      c.on("emojiUpdate", function (oldEmoji, newEmoji) {
          if (oldEmoji.name !== newEmoji.name) {
            send_log(c,
              oldEmoji.guild,
              "ORANGE",
              "Nombre De Emoji Cambiado!",
              `__Emoji: ${newEmoji}__ \n\n**Antes:** \`${oldEmoji.name}\`\n**Despues:** \`${newEmoji.name}\`\n**Emoji ID:** \`${newEmoji.id}\``
            )
          }
      });

      c.on("guildBanAdd", function (guild, user) {
          send_log(c,
            guild,
            "RED",
            "USUARIO PROHIBIDO",
            `Usuario: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
             member.user.displayAvatarURL({dynamic: true})
          )
      });

      c.on("guildBanRemove", function (guild, user) {
          send_log(c,
            guild,
            "YELLOW",
            "USUARIO NO PROHIBIDO",
            `User: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
             member.user.displayAvatarURL({dynamic: true})
            )
      });

      c.on("guildMemberAdd", function (member) {
          send_log(member.guild,
             c,
             "GREEN",
             "Un Usuario se ha unido!",
             `Miembro: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
              member.user.displayAvatarURL({dynamic: true})
             )
      });

      c.on("guildMemberRemove", function (member) {
          send_log(c,
            member.guild,
            "RED",
            "Un Usuario se ha ido!",
            `Miembro: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
            member.user.displayAvatarURL({dynamic: true}))
      });

      c.on("guildMembersChunk", function (members, guild) {
          send_log(guild,
            c,
            "RED",
            "CHUNK DE MIEMBRO / RAID - " + members.length + " Miembros:",
            members.map((user, index) => `${index}) - ${user} - ${user.tag} - \`${user.id}\``),
            )
      });

      c.on("guildMemberUpdate", function (oldMember, newMember) {
          let options = {}

          if (options[newMember.guild.id]) {
              options = options[newMember.guild.id]
          }

          // Add default empty list
          if (typeof options.excludedroles === "undefined") options.excludedroles = new Array([])
          if (typeof options.trackroles === "undefined") options.trackroles = true
          const oldMemberRoles = oldMember.roles.cache.keyArray()
          const newMemberRoles = newMember.roles.cache.keyArray()
          const oldRoles = oldMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !newMemberRoles.includes(x))
          const newRoles = newMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !oldMemberRoles.includes(x))
          const rolechanged = (newRoles.length || oldRoles.length)

          if (rolechanged) {
              let roleadded = ""
              if (newRoles.length > 0) {
                  for (let i = 0; i < newRoles.length; i++) {
                      if (i > 0) roleadded += ", "
                      roleadded += `<@&${newRoles[i]}>`
                  }
              }
              let roleremoved = ""
              if (oldRoles.length > 0) {
                  for (let i = 0; i < oldRoles.length; i++) {
                      if (i > 0) roleremoved += ", "
                      roleremoved += `<@&${oldRoles[i]}>`
                  }
              }
              let text = `${roleremoved ? `❌ ROL ELIMINADO: \n${roleremoved}` : ""}${roleadded ? `✅ Rol Añadido:\n${roleadded}` : ""}`
              send_log(c,
                oldMember.guild,
                `${roleadded ? "GREEN" : "RED"}`,
                "Cambios en los ROLES de los miembros",
                `Miembro: ${newMember.user}\nUsuario: \`${oldMember.user.tag}\`\n\n${text}`,
                )
          }

      });

      c.on("messageDelete", function (message) {
              if (message.author.bot) return;

              if (message.channel.type !== "text") return;

              send_log(c,
                message.guild,
                "ORANGE",
                "Mensaje Eliminado!", `
**Author : ** <@${message.author.id}> - *${message.author.tag}*
**Fecha : ** ${message.createdAt}
**Canal : ** <#${message.channel.id}> - *${message.channel.name}*
**Mensaje Eliminado! : **
\`\`\`
${message.content.replace(/`/g, "'")}
\`\`\`
**URL adjunta : **
${message.attachments.map(x => x.proxyURL)}
`,
)
      });

      c.on("messageDeleteBulk", function (messages) {
          send_log(c,
            messages.guild,
            "RED",
            messages.length + "  Mensaje eliminado BULK",
            `${messages.length} Mensajes eliminados en: ${messages.channel}`,
          )
      });

      c.on("messageUpdate", function (oldMessage, newMessage) {
        if (oldMessage.author.bot) return;

        if (oldMessage.channel.type !== "text") return
        if (newMessage.channel.type !== "text") return

        if (oldMessage.content === newMessage.content) return
        send_log(c, oldMessage.guild,
          "YELLOW",
          "Mensaje ACTUALIZADO",`
**Author : ** <@${newMessage.member.user.id}> - *${newMessage.member.user.tag}*
**Fecha : ** ${newMessage.createdAt}
**Canal : ** <#${newMessage.channel.id}> - *${newMessage.channel.name}*
**Mensaje original : **
\`\`\`
${oldMessage.content.replace(/`/g, "'")}
\`\`\`
**Mensaje actualizado : **
\`\`\`
${newMessage.content.replace(/`/g, "'")}
\`\`\``)
      });

      c.on("roleCreate", function (role) {
          send_log(c,
            role.guild,
            "GREEN",
            "ROL CREADO!"
            `ROL: ${role}\nNombre Del Rol: ${role.name}\nRol ID: ${role.id}\nCOLOR HEX: ${role.hexColor}\nPOSICIÓN: ${role.position}`,
            )
      });

      c.on("roleDelete", function (role) {
          send_log(c,
            role.guild,
            "RED",
            "ROL ELIMINADO!"
            `ROL: ${role}\nNombre Del Rol: ${role.name}\nRol ID: ${role.id}\nCOLOR HEX: ${role.hexColor}\nPOSICIÓN: ${role.position}`,
            )
      });

      c.on("roleUpdate", function (oldRole, newRole) {
        let perms = {
"1": "CREATE_INSTANT_INVITE",
"2": "KICK_MEMBERS",
"4": "BAN_MEMBERS",
"8": "ADMINISTRATOR",
"16": "MANAGE_CHANNELS",
"32": "MANAGE_GUILD",
"64": "ADD_REACTIONS",
"128": "VIEW_AUDIT_LOG",
"256": "PRIORITY_SPEAKER",
"1024": "VIEW_CHANNEL",
"1024": "READ_MESSAGES",
"2048": "SEND_MESSAGES",
"4096": "SEND_TTS_MESSAGES",
"8192": "MANAGE_MESSAGES",
"16384": "EMBED_LINKS",
"32768": "ATTACH_FILES",
"65536": "READ_MESSAGE_HISTORY",
"131072": "MENTION_EVERYONE",
"262144": "EXTERNAL_EMOJIS",
"262144": "USE_EXTERNAL_EMOJIS",
"1048576": "CONNECT",
"2097152": "SPEAK",
"4194304": "MUTE_MEMBERS",
"8388608": "DEAFEN_MEMBERS",
"16777216": "MOVE_MEMBERS",
"33554432": "USE_VAD",
"67108864": "CHANGE_NICKNAME",
"134217728": "MANAGE_NICKNAMES",
"268435456": "MANAGE_ROLES",
"268435456": "MANAGE_ROLES_OR_PERMISSIONS",
"536870912": "MANAGE_WEBHOOKS",
"1073741824 ": "MANAGE_EMOJIS",
"CREATE_INSTANT_INVITE": "CREATE_INSTANT_INVITE",
"KICK_MEMBERS": "KICK_MEMBERS",
"BAN_MEMBERS": "BAN_MEMBERS",
"ADMINISTRATOR": "ADMINISTRATOR",
"MANAGE_CHANNELS": "MANAGE_CHANNELS",
"MANAGE_GUILD": "MANAGE_GUILD",
"ADD_REACTIONS": "ADD_REACTIONS",
"VIEW_AUDIT_LOG": "VIEW_AUDIT_LOG",
"PRIORITY_SPEAKER": "PRIORITY_SPEAKER",
"VIEW_CHANNEL": "VIEW_CHANNEL",
"READ_MESSAGES": "READ_MESSAGES",
"SEND_MESSAGES": "SEND_MESSAGES",
"SEND_TTS_MESSAGES": "SEND_TTS_MESSAGES",
"MANAGE_MESSAGES": "MANAGE_MESSAGES",
"EMBED_LINKS": "EMBED_LINKS",
"ATTACH_FILES": "ATTACH_FILES",
"READ_MESSAGE_HISTORY": "READ_MESSAGE_HISTORY",
"MENTION_EVERYONE": "MENTION_EVERYONE",
"EXTERNAL_EMOJIS": "EXTERNAL_EMOJIS",
"USE_EXTERNAL_EMOJIS": "USE_EXTERNAL_EMOJIS",
"CONNECT": "CONNECT",
"SPEAK": "SPEAK",
"MUTE_MEMBERS": "MUTE_MEMBERS",
"DEAFEN_MEMBERS": "DEAFEN_MEMBERS",
"MOVE_MEMBERS": "MOVE_MEMBERS",
"USE_VAD": "USE_VAD",
"CHANGE_NICKNAME": "CHANGE_NICKNAME",
"MANAGE_NICKNAMES": "MANAGE_NICKNAMES",
"MANAGE_ROLES": "MANAGE_ROLES",
"MANAGE_ROLES_OR_PERMISSIONS": "MANAGE_ROLES_OR_PERMISSIONS",
"MANAGE_WEBHOOKS": "MANAGE_WEBHOOKS",
"MANAGE_EMOJIS": "MANAGE_EMOJIS"
 }
          if (oldRole.name !== newRole.name) {
              send_log(c,
                oldRole.guild,
                 "ORANGE",
                 "NOMBRE CAMBIADO DE ROL ",
`__ROL: ${oldRole}__ \n\n**Antes:** \`${oldRole.name}\`
**Despues:** \`${newRole.name}\`
**Rol ID:** \`${newRole.id}\`
`)
          }

          else if (oldRole.color !== newRole.color) {
            send_log(c,
              oldRole.guild,
              "ORANGE",
              "COLOR DE ROL CAMBIADO",
              `__ROLE: ${newRole}__ \n\n**Antes:** \`${oldRole.color.toString(16)}\`
            **Despues:** \`${newRole.color.toString(16)}\`
            **ROL ID:** \`${newRole.id}\``)

          }
          else {
            send_log(c,
              oldRole.guild,
              "RED",
              "PERMISOS DE Rol CAMBIADOS",
  `__ROLE: ${newRole}__ \n
**LOS PERMISOS CAMBIARON POR FAVOR COMPRUEBE!!!**
PERMISOS ANTIGUOS: ${/*perms[String(oldRole.permissions.bitfield)]*/oldRole.permissions.bitfield}
NUEVOS PERMISOS: ${/*perms[String(newRole.permissions.bitfield)]*/newRole.permissions.bitfield}
**Rol ID:** \`${newRole.id}\``)
          }
      });

      c.on("userUpdate", function (oldUser, newUser) {
          if(oldUser.username !== newUser.username){
              send_log(newUser.guild,
                c,
                "BLACK",
                "Se cambió el nombre de usuario del miembro",
                `Miembro: ${newUser}\nNombre de usuario anterior: \`${oldUser.username}\`\nNuevo nombre de usuario: \`${newUser.username}\` `,
                )
          }
      });

    }catch (e) {
        console.log(String(e.stack).yellow)
    }
}

async function send_log(c, guild, color, title, description, thumb){
    try {
      //CREAR EL EMBED
      const LogEmbed = new Discord.MessageEmbed()
      .setColor(color ? color : "BLACK")
      .setDescription(description ? description.substr(0, 2048) : "\u200b")
      .setTitle(title ? title.substr(0, 256) : "\u200b")
      .setTimestamp()
      .setThumbnail(thumb ? thumb : guild.iconURL({format: "png"}))
      .setFooter(guild.name + " | owo", guild.iconURL({format: "png"}))
      //OBTENER EL CANAL
      const logger = await c.channels.fetch(c.config.loggerChannelID);
      if(!logger) throw new SyntaxError("CANAL NO ENCONTRADO")
        //INTENTE OBTENER EL WEBHOOK, PERO SI NO HAY UN WEBHOOK, ENTONCES REGRESE CREARLO
        try{
          if(!c.config.webhook.id) return createandsavewebhook();
          const hook = new Discord.WebhookClient(c.config.webhook.id, c.config.webhook.token);
          if(!hook) return createandsavewebhook();
          hook.send({
            username: 'Love Bot',
            avatarURL: 'https://images-ext-2.discordapp.net/external/Dz4uOV7FKJr-ajN9CPTj8I6hV4nbiO5lB6Icc0WVsPo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/857437213000335371/05aa163bd570cc92236f904706efd1f5.webp',
            embeds: [LogEmbed],
          })
        }catch{
          return createandsavewebhook();
      }

    function createandsavewebhook(){
    /*
       * Crea un nuevo webhook
       * El ID y el token de Webhooks se pueden encontrar en la URL, cuando solicita esa URL o en el cuerpo de la respuesta.
       * https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
       *                                  ^^^^^^^^^^  ^^^^^^^^^^^^
       *                                  Webhook ID  Webhook Token
       */
      logger.createWebhook(guild.name, {
        avatar: 'https://images-ext-2.discordapp.net/external/Dz4uOV7FKJr-ajN9CPTj8I6hV4nbiO5lB6Icc0WVsPo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/857437213000335371/05aa163bd570cc92236f904706efd1f5.webp'
      }).then(webhook=>{
        webhook.send({
          username: 'Love Bot',
          avatarURL: 'https://images-ext-2.discordapp.net/external/Dz4uOV7FKJr-ajN9CPTj8I6hV4nbiO5lB6Icc0WVsPo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/857437213000335371/05aa163bd570cc92236f904706efd1f5.webp',
          embeds: [LogEmbed],
        })
        .catch(e=>console.log(String(e.stack).yellow))
        try{
            let oldconfig = c.config;
            oldconfig.webhook.id = webhook.id; //webhook id
            oldconfig.webhook.token = webhook.token; //webhook token
            fs.writeFile("./config.json", JSON.stringify(oldconfig, null, 3), (e) => {
                if (e) {
                  console.log(String(e.stack).red);
                }
                console.log("WEBHOOK CREADO Y GUARDADO EN EL ARCHIVO CONFIG.JSON".bold.green)
              });
        }catch(e){
            console.log(String(e.stack).red);
        }
      })
    }

  } catch (e) {
      console.log(String(e.stack).yellow)
  }
}