const Discord = require('discord.js')
const client = new Discord.Client();
require('dotenv').config();

class Cartas {
    constructor(deck) {
      if (!typeof deck == "object")
        return "Preciso que o baralho seja um Objeto.";
      this.deck = Object.entries(deck);
    }
  
    conteudo = () => {
      let result = [];
  
      for (let index of this.deck) {
        result.push(index[0]);
      }
  
      return result;
    };
  
    buscar = (value) => {
      if (value === "") return "Defina o nome que você quer que eu busque.";
      if (value === undefined)
        return "Defina o nome que você quer que eu busque.";
  
      const search = this.deck.filter((x) => {
        toString(x).toLowerCase();
        toString(value).toLowerCase();
  
        return x.indexOf(value) > -1;
      });
  
      return search[0] != undefined ? search[0] : -1;
    };
  }

client.on('ready', () => {
    console.log('Estamos online rede Infinity')
})


client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(process.env.PREFIX.toLowerCase())) return;
    if (message.content.startsWith(`@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    
    const args = message.content
        .trim().slice(process.env.PREFIX.length)
        .split(" ");

    const command = args.shift();

    try {
        const commandFile = require(`./Commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro: ' + err)
    }
})

client.login(process.env.DISCORD_TOKEN);

module.exports = { Cartas, client };