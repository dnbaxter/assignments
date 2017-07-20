let middleStr = (str) => {

    if(str.length <= 0) {
        throw "String is empty";
    } else if (str.length % 2 === 1) {
        throw "String is odd";
    } else if(str.length % 2 === 0) {
        let position = (str.length / 2) - 1;
        let length = 2;
        return str.substring(position, position + length);
    }

};

module.exports = middleStr;
console.log(middleStr("Hell"));