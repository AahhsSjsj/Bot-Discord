const express = require('express')
const server = express();

var colors = require('colors')
 
server.all('/', (req, res) => {
    res.send('Tamos Listo Baby uwu');
});

var colors = require('colors')

 
function keepAlive() {
   server.listen(3000, () => { console.log(`Tamo bien:`.green, `${Date.now()}`.rainbow) });
}

module.exports = keepAlive;