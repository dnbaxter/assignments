// module.exports = (ip) => {
//
//     let segments = ip.split(".");
//     if (segments.length === 4) {
//
//         return segments.every(function (segment) {
//             return !isNaN(segment) && parseInt(segment, 10) >= 0 && parseInt(segment, 10) <= 255;
//         });
//     }
//
//     return false;
//
//     // if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
//     //     console.log("That is a valid IP address!");
//     //     return (true)
//     // }
//     // console.log("You have entered an invalid IP address!");
//     // return (false)
//
// };

let isNumeric = (value) => {
    //return true if number '1' -> true
    //return false if not a number 'j' -> false
    return !isNaN(value);
}

let ipAddress = (value) => {
    let ipParts = value.split(".");
    //doesnt contain 3 periods
    if(ipParts.length !== 4) {
        throw "invalid ip address";
    }
    //includes non-digits except for periods
    for(let i = 0; i < ipParts.length; i++) {
        if(isNumeric(ipParts[i]) === false) {
            throw "invalid ip address";
        }
    }
    //a not within range of 0 - 255
    for(let i = 0; i < ipParts.length; i++) {
        if(Number(ipParts[i]) > 255 || Number(ipParts[i]) < 0) {
            throw "invalid ip address";
        }
    }
    //not within range of 7-15 characters
    if(value.length < 7 || value.length > 15) {
        throw "invalid ip address";
    }
    return true;
};


module.exports = ipAddress;