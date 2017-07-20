let timeNumToText = (str) => {

    let newStr = str.split(":");
    let first = parseInt(newStr[0]);
    let second = parseInt(newStr[1]);
    // let hour = "";
    // let minutes = "";
    let meridiem = "";

    // Checks to see if time needs to be AM or PM
    if (first < 12) {
        meridiem = " am";
    } else if (first >= 12 && first < 24) {
        meridiem = " pm";
    } else if (first === 24) {
        meridiem = " am";
    } else if (first > 24) {
        return "Not a valid input"
        //throw ("Not a valid input");
    }

    // Check if input is a valid number
    if (isNaN(first) || isNaN(second)) {
        throw ("Not a valid input");
    }



    if (first === 0 && second === 0) {
        first = 12;
        return "It's " + hourToName(first) + meridiem;
    }

    if (second <= 9) {
        return "It's " + hourToName(first) + " oh " + numberToName(second) + meridiem;
    } else if (first >= 13) {
        first = first - 12;
        return "It's " + hourToName(first) + " " + numberToName(second) + meridiem;
    }

    return "It's" + hourToName(first) + " " + numberToName(second);


};

function hourToName(num) {
    if (num > 12) {
        num -= 12;
    }
    return numberToName(num);
}
function numberToName(num) {
    let lowNames = ["zero", "one", "two", "three",
        "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"];
    let tensNames = ["twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"];
    let tens, ones, result;

    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
}
console.log(timeNumToText("24:09"));

module.exports = timeNumToText;