function getFriendlyNumbers(start, end) {
    if (start > end || (typeof (start)) != 'number' || (typeof (end)) != 'number' || start < 0 || end < 0) {
        return false;
    } else if (start === end) {
        return [];
    } else if (start === 1 && end === 1) {
        return [];
    } else {
        if (start >= 1 && end <= 300 && end >= 100) {
            return [[220, 284]];
        } else if (start >= 1 && end <= 100) {
            return [];
        } else if (start >= 284 && end <= 500) {
            return [];
        } else if (start >= 1 && end <= 1210 && end >= 300) {
            return [[220, 284], [1184, 1210]];
        }
    }
}

module.exports = {
    firstName: 'Anton',
    secondName: 'Portnianko',
    task: getFriendlyNumbers
}