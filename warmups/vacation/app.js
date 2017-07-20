module.exports = (day, vacation) => {
    // return vacation ? true : day.split("").indexOf("s") === 0 ? true : false;
    return vacation || day.toLowerCase().split("").indexOf("s") === 0
};