const { MessageAttachment, MessageEmbed } = require('discord.js');
const scholars = JSON.parse(process.env.SCHOLAR);


exports.run = async (client, msg) => {
    scholars.map(async (scholar) => {
        if(scholar.id === msg.author.id) {
            const roninAddress = scholar.roninAddress;
            const data = await app.getStatus(roninAddress); 
            if(data === false) {
                msg.reply('Por favor, tente novamente');
            } else {
                const timestamp = data['last_claimed_item_at'] * 1000
                const dateOne = new Date(timestamp);
                const dateTwo = new Date(timestamp + + 12096e5)
                const options = { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    second: 'numeric', 
                    timeZoneName: 'short' };
                const lastClaimed = dateOne.toLocaleDateString(undefined, options);
                const claimAt = dateTwo.toLocaleDateString(undefined, options);                    
                const currentSLP = data['total']
                const claimableSLP = data['claimable_total']
                const embed = new MessageEmbed()
                    .setAuthor(msg.author.username)
                    .addField('Contagem de SLP: ', currentSLP)
                    .addField('Claimable SLP: ', claimableSLP)
                    .addField('Data da Última Reivindicação : ', lastClaimed)
                    .addField('Próxima data de Reivindicação: ', claimAt)
                    .setTimestamp()
                    .setFooter('Axie Infinity Brazil' );  
                msg.reply(embed);
                console.log(`Status verificado por: ${msg.author.tag}`);
            }                    
        } 
    })
}