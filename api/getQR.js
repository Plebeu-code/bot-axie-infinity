require('dotenv').config()
const fetch = require('node-fetch');
const Web3 = require('web3');
const web3 = new Web3();
const QRCode = require('easyqrcodejs-nodejs');

//Função assíncrona que retorna a consulta de mensagem aleatória na API Axie Infinity Grapql
const getRawMessage = async () => {
  try {
      const response = await fetch('https://axieinfinity.com/graphql-server-v2/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'operationName': "CreateRandomMessage",
          'query': "mutation CreateRandomMessage {\n  createRandomMessage\n}\n",
          'variables': {}
        }),
      });
      if(!response.ok) {
        throw Error('Axie Infinity API have a problem')
    }
      const randMessage = await response.json();
      return randMessage['data']['createRandomMessage'];
  } catch (error) {
      console.log(error);
      return true;
  };
};

// Função assíncrona com 2 parâmetros (accountAddress e privatekey) que assinam a mensagem aleatória acima, envie a assinatura para a API Axie Infinity GraphQL e retorne um AccessToken
const submitSignature = async (accountAddress, privateKey, randMessage) => {
    // obter a mensagem aleatória na função getRawMessage
    // assine a mensagem aleatória usando a chave privada do ID do Discord acadêmica correspondente
    let hexSignature = web3.eth.accounts.sign(randMessage, privateKey);
    hexSignature = hexSignature["signature"];
     
    try {
        //Chame a API Axie Infinity GraphQL e forneça os parâmetros necessários que configuramos nesta função
        const response = await fetch('https://axieinfinity.com/graphql-server-v2/graphql',{
        method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            "operationName":"CreateAccessTokenWithSignature",
            "variables":{"input":{"mainnet":"ronin","owner":accountAddress,"message":randMessage,"signature":hexSignature }},
            "query":"mutation CreateAccessTokenWithSignature($input: SignatureInput!) {\n  createAccessTokenWithSignature(input: $input) {\n    newAccount\n    result\n    accessToken\n    __typename\n  }\n}\n"
            })

        });
        //Obtenha a resposta no formato JSON
        const accessToken = await response.json();
        //retorna o valor do token de acesso
        return accessToken['data']['createAccessTokenWithSignature']['accessToken'];   
    } catch (error) {
        console.log(error.name);
        
    }
};

// Uma função Async com 2 parâmetros (accessToken e filenameID) que converte o token de acesso em código qr
const generateQR = async (accessToken, fileNameID) => {
    //! aguarde o token de acesso ao enviar a função assíncrona de assinatura
    const token = await accessToken;
    try {
        // atribuir o objeto (opções de código qr) em uma variável
        const qrcode = new QRCode({
        text: token, // o token de acesso
        width: 256, // largura do qr
        height: 256, // altura do qr
        colorDark : "#000000", // cor do qr
        colorLight : "#ffffff", // cor do qr
        correctLevel : QRCode.CorrectLevel.L,
        quietZone: 15, // tamanho da zona tranquila do código qr
        quietZoneColor: "rgba(0,0,0,0)", // cor da zona tranquila do código QR
        logo: './logo.png', // o caminho do logotipo de sua marca colocado no centro do qr
        logoWidth: 50, // tamanho da largura do logotipo
        logoHeight: 63, // tamanho da altura do logotipo
        title: 'QR do seu login do Axie Infinity',  // título do seu código QR
        titleFont: "normal normal bold 18px Ubuntu", // fonte do título do código QR
        titleColor: "#004284", // ccor do título do código qr
        titleBackgroundColor: "#fff", // cor de fundo do título
        titleHeight: 20, // titleHeight: 20, // altura do título
        titleTop: 10, //desenha coordenadas y
        });
        //salve o qr com o objeto de opções como um arquivo png com o id acadêmico correspondente
        qrcode.saveImage({
        path: './qrcode-images/qr-'+ fileNameID + '.png'
        });
    } catch (err) {
        console.log(err);
    }
};

// exporta as duas funções como módulo para uso posterior
module.exports = { generateQR, submitSignature, getRawMessage }