const Discord = require('discord.js');
const api = require('../requests/axios');

exports.run = async (client, msg) => {
    //! Puxando da api
    let resultEth = await api.get('/ethereum')
    const ethformat = resultEth.data["market_data"]["current_price"]["brl"].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const porcentagem = resultEth.data["market_data"]["price_change_percentage_24h_in_currency"]["brl"]

    msg.delete()
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Valor do Ethereum hoje')
        .setAuthor(msg.author.username)
        .setDescription(`**1 ETH = ${ethformat} BRL**`)
        .addFields(
            { name: `Aumento ou queda nas últimas 24h:`, value: `**${porcentagem.toFixed(2)}%**` },
        )
        .setFooter(msg.author.username, msg.author.avatarURL())
        .setTimestamp()
    msg.channel.send(embed)
}