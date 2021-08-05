const { MessageAttachment } = require('discord.js');
const lib = require('../web/getQR');
const scholars = JSON.parse(process.env.SCHOLAR);
const slicer = require('../web/slice')

exports.run = async (client, msg) => {
    scholars.map(async (scholar) => {
        if (scholar.id === msg.author.id) {
            const accountAddress = scholar.roninAddress;
            const privateKey = scholar.roninPrivateKey;
            const fileNameID = msg.author.id;
            const haveError = await lib.getRawMessage();
            if(haveError === true) {
                msg.reply('Por favor, tente novamente');
            } else {
                const randMessage = await lib.getRawMessage();
                const accessToken = await lib.submitSignature(accountAddress, privateKey, randMessage);
                await lib.generateQR(accessToken,fileNameID);
                const attachment = new MessageAttachment('../qrcode-images/qr-'+ msg.author.id + '.png');
                await msg.author.send(`Obrigado por esperar, aqui está o seu código de login qr ${msg.author.tag}` )
                msg.author.send(attachment);
                console.log(`${msg.author.tag} requested a QR`);
            }               
        }
    })
}


