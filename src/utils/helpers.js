import BigNumber from "bignumber.js";
import store from '@/store';

const NETWORK_MAIN = 'main';
const PLATFORM_BSC = 'bsc';
const PLATFORM_ETH = 'eth';
const PLATFORM_MATIC = 'polygon';
const PLATFORM_FANTOM = 'fantom';

export const numberOrNull = (value) => {
    if (value === null) {
        return null
    }
    const valueNum = Number(value)
    return Number.isNaN(valueNum) ? null : valueNum
}

export const getMultiplier = (total, amount) => {
    if (total === 0 || amount === 0) {
        return 0
    }
    return total / amount
}

export const getPayout = (bet, rewardRate = 1) => {
    if (!bet || !bet.round) {
        return 0
    }
    const {bullAmount, bearAmount, totalAmount} = bet.round
    const multiplier = getMultiplier(totalAmount, bet.position === "Bull" ? bullAmount : bearAmount)
    return bet.amount * multiplier * rewardRate
}

export const getNetPayout = (bet, rewardRate = 1) => {
    if (!bet || !bet.round) {
        return 0
    }

    const payout = getPayout(bet, rewardRate)
    return payout - bet.amount
}

export const formatBnb = (bnb) => {
    return bnb ? bnb.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3}) : '0'
}

export const usePriceBnbBusd = () => {

    const price = store.state.prediction.price
    return new BigNumber(price)
}

export const numberWithCommas = (x) => {
    x = x.toString();
    let array = x.split('.');
    let y = 0;
    if (array[0]) {
        y = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (array[1]) {
        y = y+ '.'+array[1];
    }
    return y !== 0 ? y : x;
}

export const getAddressLink = (network, platform, address) => {
    let explorerUrl = '';
    if (platform === PLATFORM_BSC) {
        if (network === NETWORK_MAIN) {
            explorerUrl = 'https://bscscan.com/address/';
        } else {
            explorerUrl = 'https://testnet.bscscan.com/address/';
        }
    } else if (platform === PLATFORM_ETH) {
        if (network === NETWORK_MAIN) {
            explorerUrl = 'https://etherscan.io/address/';
        } else {
            explorerUrl = 'https://ropsten.etherscan.io/address/';
        }
    } else if (platform === PLATFORM_MATIC) {
        if (network === NETWORK_MAIN) {
            explorerUrl = 'https://polygonscan.com/address/';
        } else {
            explorerUrl = 'https://mumbai.polygonscan.com/address/';
        }
    } else if (platform === PLATFORM_FANTOM) {
        if (network === NETWORK_MAIN) {
            explorerUrl = 'https://ftmscan.com/address/';
        } else {
            explorerUrl = 'https://testnet.ftmscan.com/address/';
        }
    }

    return explorerUrl + address;
}

export const truncateAddress = (address) => {
    address = address.substr(0, 6) + '...' + address.substr(address.length - 4, 4);
    return address;
}