<p align="center">DBD.JS - AOI.JS Y DISCORD.JS :heart: </p>


#  🧤 Que Tipos de Comandos Tiene Este Proyecto?:

```javascript
1️⃣ - Diversion - Fun
2️⃣ - Musica - Music
3️⃣ - Configuracion - Settings - Utilitys 
4️⃣ - Help Economia - Economy
5️⃣ - Comandos Sorteos -  Commands Giveaways
6️⃣ - Comandos NSFW - COMMANDS NSFW 
7️⃣ - Comandos De Niveles - Level Commands
```

# Bot 24/07 ? 

```text
Si uwu ❤
```

# Instalación

**Se requiere Node.JS 12.0.0 o más reciente y el PACKAGE DE AOI.JS**

**Primero Es El Package que es este uwu:**

# PACKAGE AOI.JS , DBD.JS Y DISCORD.JS

```javascript
{
  "name": "-asdf",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": "12.x"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "aoi.js": "^4.0.2", //npm install aoi.js
    "cpu-stat": "^2.0.1", //npm install cpu-stat
    "danbot-hosting": "^0.1.6", //npm install danbot-hosting
    "dbd.js": "^3.0.6", //npm install dbd.js
    "discord-canvas": "^1.4.1", //npm install discord-canvas 
    "discord-math": "^1.0.5", //npm install discord-math
    "discord-reply": "^0.1.2", //npm install discord-reply
    "discord-together": "^1.1.1", //npm install discord-together
    "discord.js": "^12.5.3", //npm install discord.js --save
    "express": "^4.17.1", //npm install express
    "ffmpeg-static": "^4.4.0", //npm install ffmpeg-static
    "moment": "^2.29.1", //npm install moment
    "ms": "^2.1.3", //npm install ms
    "os": "^0.1.1", //npm install os
    "quick.db": "^7.1.3", //npm install quick.db
    "snakecord": "^1.0.7", //npm install snakecord
    "sqlite3": "^5.0.2", //npm install slqite3
    "wio.db": "^4.0.20" //npm install wio.db
  },
  "devDependencies": {},
  "keywords": [],
  "description": ""
}
```

```text
Despues de Esto Pones npm init -y

y lo ultimo:
```

```javascript
npm install
```

**Para Instalar Los Npms!**

# Despues Debes Irte Donde el archivo config.json y Pones esto!

  ```javascript
  {
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "!"
  }
  ```

#### Ejemplos

# AOI.JS:

**npm install aoi.js Package Aqui: [**Click Aqui**](https://github.com/Jennifer7w7/DBD.js-AOI.js-Discord.js#package-aoijs--dbdjs-y-discordjs)- Instalamos aoi.js y lo definimos abajo esta para hacer el bot 😅**

```javascript
const aoijs = require("aoi.js") 

const bot = new aoijs.Bot({
token: "TOKEN", //Discord Bot Token
prefix: "PREFIX" //Discord Bot Prefix
})
bot.onMessage() // Permite ejecutar comandos

bot.command({
name: "ping", // Nombre Tigger (nombre del comando)
code: `Pong! $pingms` //Codigo
})

bot.readyCommand({
    channel: "", // Puedes usar esto o no
    code: `$log[Listo en $userTag[$clientID]]` // Ejemplo listo en el cliente
})
```

# DBD.JS:

```javascript

const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "Tu Token!", 
prefix: "!"
})
 
bot.onMessage()
 
bot.command({
name: "ping", 
code: `Pong! \`$ping\` ms` 
})

```
# DISCORD.JS

```javascript
const Discord = require('discord.js'); //npm install discord.js
const client = new Discord.Client();
const {token, prefix } = require('./config.json') // Definimos el archivo config.json , los {token, prefix} Define El Token y el prefix Dentro Del Archivo config.json!
const { Client, MessageEmbed, RichEmbed } = require('discord.js'); //npm install discord.js
const lineReply = require('discord-reply'); // npm intall discord-reply
const { format } = require("util");
const SnakeGame = require('snakecord'); // npm install snakecord - Instalamos snakecord y lo Definimos
const os = require('os') // npm install os - Instalamos os y lo Definimos
const ms = require('ms') // npm install ms - Instalamos ms y lo Definimos
const moment = require('moment') // npm install moment - Instalamos moment y lo Definimos
const cpuStat = require('cpu-stat') // npm install cpu-stat - Instalamos cpu-stat y lo Definimos


function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "TEXTO", // Mensaje Para Poner en el Estado!
         type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING Nota: Para El STREAMING Debes Poner Asi:
         //type: "STREAMING",
         //url: "twitch canal!" uwu!
      }
   });
}


client.on("ready", () => {
    console.log("Estoy listo!");
    prensece();
 });
 
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !==0) return;

    const agrs = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = agrs.shift().toLowerCase();

    if(command === 'ping') {

        message.lienReply("Pong")

    }
   }
 
 });
 
 client.login(token);

```

# ⁉ No Sabes Como Copiar Tu Token? Sencillo Aqui Lo Podes Ver uwu:

<div align="left"><img src="/assets/token.gif">

#### 🎃 Paquetes opcionales

* [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus) para codificación, utilizado principalmente para música \(`npm install @discordjs/opus`\)
* [ffmpeg-static](https://github.com/discord/ffmpeg-static) para permitir que los filtros de música se ejecuten sin problemas \(`npm install ffmpeg-static`\)
* [danbot-hosting](https://www.npmjs.com/package/danbot-hosting) para publicar estadísticas en su API \(`npm install danbot-hosting`\)

**🎶 Integración musical**

Con nuestro poderoso Paquete, incorporamos Música con varias funciones. Permitimos la personalización y el control sobre lo que desea.

**🎈 Ejemplo De Musica**

```javascript
bot.command({
name: "play",
code: `$playSong[Nombre de la música; algo salió mal!]`
})
```
## 💨 Ejecuta los proyectos

Glitch: [![Remix en Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Jennifer7w7/DBD.js-AOI.js-Discord.js)
Repl: [![Ejecutarse en Repl.it](/assets/GitHub.PNG)](https://repl.it/github/Jennifer7w7/DBD.js-AOI.js-Discord.js)
Heroku: [![Desplegar](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Jennifer7w7/DBD.js-AOI.js-Discord.js)

### 🔗Links

* [Web](https://aoi.js.org)
* [Github](https://github.com/Jennifer7w7)
* [Discord Server](https://discord.gg/TvBXwYbW4y)
