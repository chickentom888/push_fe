import BigNumber from 'bignumber.js'
import {BIG_TEN} from './bigNumber'

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount, decimals = 18) => {
    return new BigNumber(amount).times(BIG_TEN.pow(decimals))
}

export const getBalanceAmount = (amount, decimals = 18) => {
    return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

/**
 * This function is not really necessary but is used throughout the site.
 */
export const getBalanceNumber = (balance, decimals = 18) => {
    return getBalanceAmount(balance, decimals).toNumber()
}

export const getFullDisplayBalance = (balance, decimals = 18, decimalsToAppear) => {
    return getBalanceAmount(balance, decimals).toFixed(decimalsToAppear)
}

export const formatNumber = (number, minPrecision = 2, maxPrecision = 2) => {
    const options = {
        minimumFractionDigits: minPrecision,
        maximumFractionDigits: maxPrecision,
    }
    return number.toLocaleString(undefined, options)
}

export function formatNumber_(number, minPrecision = 2) {
    if (number === 0 || !number) {
        return '0.00';
    }
    let numberString = number.toString();
    let array = numberString.split('.');
    if (array[1]) {
        let pathDecimal = array[1].slice(0, minPrecision);
        return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + pathDecimal;
    } else {
        return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
