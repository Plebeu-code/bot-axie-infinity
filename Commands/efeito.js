const Discord = require('discord.js');
const effect = require("../cartas/efeitos.json")
const { Efeitos } = require("../index")

exports.run = async (client, msg, args) => {

  const efeito = new Efeitos(effect);
  msg.delete()

  const errorMsg = new Discord.MessageEmbed()
  .setTitle(`Hey ${msg.author.username} !`)
  .setColor("#ff0011")
  .setDescription("Não conseguir encontrar esse efeito :/")

  if(efeito.buscar(args[0]) === -1) return msg.channel.send(errorMsg).then((tmp) => {tmp.delete({timeout: 4500})})

  const efeitoArg = efeito.buscar(args[0]); 

  const exec = () => {

    const enviarEfeito = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(efeitoArg[1].name)
    .setThumbnail(efeitoArg[1].img)
    .setDescription(efeitoArg[1].description)
    .addFields(
        { name: "Acumulável", value: `${efeitoArg[1].stack}`},
    )
    .setTimestamp()

    msg.channel.send(enviarEfeito) //

  }

  await exec();

}