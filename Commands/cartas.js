const Discord = require("discord.js");
const card = require("../cartas/cartas.json");
const config = require("../config/config.json");
const index = require("../index");
require("discord-buttons")(index.client);
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports.run = async (client, msg, args) => {
  msg.delete();

  const carta = new index.Cartas(card);

  const cartas = carta.conteudo();

  const addField = (name, value) => {
    return [
      {
        name,
        value,
      },
    ];
  };

  const sendEmbed = (n) => {

    const current = cartas.slice(n, n + 10);

    const cartasEmbed = {
        color: "#0099ff",
        title: "Cartas",
        fields: [],
        footer: {

            text: `Página atual: ${n+1}`

        }
      };

        let i = 1;

      for (let index of current) {

        let result = carta.buscar(index);
    
        cartasEmbed.fields.push(
          addField(`${i++} - ${result[1].nome}`, result[1].desc)
        );
        
      }

      return cartasEmbed;
  }

  let button = new MessageButton()
    .setStyle('red')
    .setLabel('aaaa')
    .setID('click_to_function')

//   await msg.channel.send({ embed: sendEmbed(0) }, button)
  await msg.channel.send("teste", button);
};
