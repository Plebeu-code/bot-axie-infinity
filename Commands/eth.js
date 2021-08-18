const Discord = require('discord.js');
const ethPorcen = require('../api/api_eth')
const getPrice = require('../api/api_eth')

exports.run = async (client, msg) => {
    const ethPrice = await getPrice.ethPrice();
    const ethporc = await ethPorcen.ethPorcen();
    const ethformat = ethPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    if(ethPrice === false) {
        return msg.channel.send("Erro na API")
    }else {
        msg.delete()
        const embed =  new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Valor do Ethereum hoje')
            .setAuthor(msg.author.username)
            .setDescription(`**1 ETH = ${ethformat} BRL**`)
            .addFields(
                { name: `Aumento ou queda nas últimas 24h:`, value: `**${ethporc.toFixed(2)}%**`},
            )
            .setFooter(msg.author.username, msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send(embed)
    }
}