const Discord = require('discord.js');
const api = require('../requests/axios')

exports.run = async (client, msg) => {
    //! Puxando da api
    let resultLsp = await api.get('/smooth-love-potion')
    const lspFormat = resultLsp.data["market_data"]["current_price"]["brl"].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const porcentagem = resultLsp.data["market_data"]["price_change_percentage_24h_in_currency"]["brl"]

    msg.delete();
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Valor do SLP hoje')
        .setAuthor(msg.author.username)
        .setDescription(`**1 SLP = ${lspFormat} BRL**`)
        .addFields(
            { name: `Aumento ou queda nas últimas 24h:`, value: `**${porcentagem.toFixed(2)}%**` },
        )
        .setFooter(msg.author.username, msg.author.avatarURL())
        .setTimestamp()
    msg.channel.send(embed)
}