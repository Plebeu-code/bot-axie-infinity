const Discord = require('discord.js');
const card = require("../cartas/cartas.json")
const config = require("../config/config.json")
const { Cartas } = require("../index")

exports.run = async (client, msg, args) => {

  const carta = new Cartas(card);
  msg.delete()

  const errorMsg = new Discord.MessageEmbed()
  .setTitle(`Hey ${msg.author.username} !`)
  .setColor("#ff0011")
  .setDescription("Não conseguir encontrar essa carta :/")

  if(carta.buscar(args[0]) === -1) return msg.channel.send(errorMsg).then((tmp) => {tmp.delete({timeout: 4500})})

  const cartaArg = carta.buscar(args[0]);

  const exec = () => {

    const enviarCarta = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(cartaArg[1].nome)
    .setDescription(cartaArg[1].desc)
    .setImage(cartaArg[1].img)
    .setTimestamp()

    msg.channel.send(enviarCarta) //
    .then((tmp) => {

      tmp.delete({timeout: 3500})

    })

  }

  await exec();

}