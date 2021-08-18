const Discord = require('discord.js');

exports.run = async (client, msg) => {
    msg.delete()
    let help = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Bem-Vindo(a) ao  🚀 Rocket Infinity 🚀")
    .setThumbnail('https://cdn.discordapp.com/attachments/558823399393198123/869003617871491082/cmo-comprar-Axie-Infinity-AXS-.png')
    .setDescription("No momento estamos em fase de beta, qualquer problema reportem ao Discord: </Plebeu>#0001")
    .addFields(
        { name: `Prefix ${process.env.PREFIX}`, value: `Utilizando para chamar o bot`},
        { name: `${process.env.PREFIX}carta`, value:`exemplo: ${process.env.PREFIX}carta sugar rush, mostrará as informações em portugês`},
        { name: `${process.env.PREFIX}slp`, value: `mostrará a cotação do SLP de hoje, nas últimas 24h.`},
        { name: `${process.env.PREFIX}eth`, value: `mostrará a cotação do ETH de hoje, nas últimas 24h.`},
    )
    .setFooter(msg.author.username, msg.author.avatarURL())
    .setTimestamp()
    msg.channel.send(help)
}