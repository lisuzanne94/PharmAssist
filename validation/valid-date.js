const validDate = date => {
    if (date instanceof Date) {
        return true;
    }
}

module.exports = validDate;