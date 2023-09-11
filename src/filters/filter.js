import moment from "moment";

export default function uppercase (input) {
    return input.toUpperCase();
}

export function truncateMiddle_(value, limit) {
    if (value.length <= limit) {
        return value;
    }
    const separator = "...";
    const charsToShow = limit - separator.length;
    const frontChars = Math.ceil(charsToShow / 1);
    const backChars = Math.floor(charsToShow / 1);
    const front = value.substr(0, frontChars);
    const back = value.substr(value.length - backChars);
    return front + separator + back;
}

export function numberFormat(value) {
    if (isNaN(value)) return value;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function numberWithCommas(x) {
    if (isNaN(x)) return x;
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

export function dateFormat(date, format) {
    if (!date) return date;
    return moment(date).format(format);
}

export function contractCompact(value, pre = 6) {
    if (!value) return '';
    return value.substr(0, pre) + '...' + value.substr(value.length - 4, 4);
}

export function lockedTime(time) {
    if (!time) return time;
    time = parseInt(time);
    let lockPeriod = '1 month';
    if (time === 60 * 60 * 24 * 30) {
        lockPeriod = '1 month';
    } else if (time === 60 * 60 * 24 * 30 * 2) {
        lockPeriod = '2 months';
    } else if (time === 60 * 60 * 24 * 30 * 3) {
        lockPeriod = '3 months';
    } else if (time === 60 * 60 * 24 * 30 * 6) {
        lockPeriod = '6 months';
    } else if (time === 60 * 60 * 24 * 30 * 12) {
        lockPeriod = '1 year';
    } else if (time === 60 * 60 * 24 * 30 * 12 * 2) {
        lockPeriod = '2 years';
    } else if (time === 60 * 60 * 24 * 30 * 12 * 3) {
        lockPeriod = '3 years';
    } else if (time === 60 * 60 * 24 * 30 * 12 * 4) {
        lockPeriod = '4 years';
    } else if (time === 60 * 60 * 24 * 30 * 12 * 5) {
        lockPeriod = '5 years';
    }
    return lockPeriod;
}

export function momentTimeHistory_(date, number) {
    if (number && number == 1) {
        return moment(date).format("D/M/Y");
    } else if (number && number == 2) {
        return moment(date).format("HH:mm:ss");
    } else {
        return moment(date).format("HH:mm D/M/Y");
    }
}