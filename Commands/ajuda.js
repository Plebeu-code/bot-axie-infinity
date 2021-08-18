const Discord = require('discord.js');

exports.run = async (client, messagem) => {
    let help = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Bem-Vindo(a) ao Axie Infinity Brazil")
    .setThumbnail('https://cdn.discordapp.com/attachments/558823399393198123/869003617871491082/cmo-comprar-Axie-Infinity-AXS-.png')
    .setDescription("No momento estamos em fase de beta, qualquer problema reportem ao Discord: </Plebeu>#0001")
    .addField(`Meu prefix: ${process.env.PREFIX}`)
    .setTimestamp()
    messagem.channel.send(help)
}