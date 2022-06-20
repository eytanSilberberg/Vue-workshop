import axios from "axios"
import { dbService } from "./db.service"



export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {

    const retrieved = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return retrieved.data
}

async function getMarketPrice() {
    let marketPrice = await dbService.query('marketPrice')
    if (!marketPrice || marketPrice.length === 0) {
        const retrieved = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        marketPrice = retrieved.data
        dbService.post('marketPrice', marketPrice)

    }
    return marketPrice

}
async function getConfirmedTransactions() {
    let tradeVolume = await dbService.query('trades')
    if (!tradeVolume || tradeVolume.length === 0) {
        const retrieved = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        tradeVolume = retrieved.data
        dbService.post('trades', tradeVolume)
    }
    return tradeVolume
}