const Discord = require('discord.js');
const getPrice = require('../api/api_slp')
const slpPorcen = require('../api/api_slp')

exports.run = async (client, msg) => {
    const slpPrice = await getPrice.slpPrice();
    const slpporc = await slpPorcen.slpPorcen();

    if(slpPrice === false) {
        return msg.channel.send("Erro na API")
    }else {
        msg.delete();
        const embed =  new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Valor do SLP hoje')
            .setAuthor(msg.author.username)
            .setDescription(`**1 SLP = ${slpPrice} BRL**`)
            .addFields(
                { name: `Aumento ou queda nas últimas 24h:`, value: `**${slpporc.toFixed(2)}%**`},
            )
            .setFooter(msg.author.username, msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send(embed)
    }
}