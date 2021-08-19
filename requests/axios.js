const axios = require('axios').default;

const api = axios.create({
    baseURL: process.env.API_COINGECKO,
    params: {
        localization: false,
        tickers: false,
        'market_data': true,
        'community_data': false,
        'developer_data': false,
        sparkline: false
    }
    
})

module.exports = api