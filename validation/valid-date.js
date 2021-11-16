const validDate = date => {
    if ((date instanceof Date) && !isNaN(date)) {
        return true;
    }
}

module.exports = validDate;