const Discord = require('discord.js');
const getPrice = require('../web/requis')
const slpPorcen = require('../web/requis')

exports.run = async (client, msg) => {
    const slpPrice = await getPrice.slpPrice();
    const slpporc = await slpPorcen.slpPorcen();

    if(slpPrice === false) {
        return msg.channel.send("Erro no foda-se")
    }else {
        const embed =  new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Valor do SLP hoje')
            .setAuthor(msg.author.username)
            .setDescription(`**1 SLP = ${slpPrice} BRL**`)
            .addFields(
                { name: `Aumento ou queda nas últimas 24h:`, value: `**${slpporc.toFixed(2)}%**`},
            )
            .setTimestamp()
        msg.channel.send(embed)
    }
}