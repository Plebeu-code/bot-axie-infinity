const fetch = require('node-fetch');

const ethPrice = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
        if(!response.ok) {
            throw Error('Axie Infinity problema com API')
        }
        const price = await response.json();
        return price["market_data"]["current_price"]["brl"];
    } catch (error) {
        console.log(error);
        return false;       
    }
};

const ethPorcen = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
        if(!response.ok) {
            throw Error('Axie Infinity problema com API')
        }
        const price = await response.json();
        return price["market_data"]["price_change_percentage_24h_in_currency"]["brl"];
    } catch (error) {
        console.log(error);
        return false;       
    }
};

module.exports = { ethPrice, ethPorcen }