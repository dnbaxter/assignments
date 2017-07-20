function countCode(string) {
    var count = (string.match(/code/g && /co/g) || []).length;
    console.log(count);
}

countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");



function checkNumberPalindrome(num) {
    num2 = num + "";
    num2 = num2.split("").reverse().join("");
    
    if (num2 != num) {
        return false;
    } else {
        return true;
    }
}

console.log(checkNumberPalindrome(1232));
console.log(checkNumberPalindrome(12321));
console.log(checkNumberPalindrome(111));
console.log(checkNumberPalindrome(112));
console.log(checkNumberPalindrome(121));























//function countCode2(string, subString, allowOverlapping) {
//
//    string += "";
//    subString += "";
//    if (subString.length <= 0) return (string.length + 1);
//
//    var n = 0,
//        pos = 0,
//        step = allowOverlapping ? 1 : subString.length;
//
//    while (true) {
//        pos = string.indexOf(subString, pos);
//        if (pos >= 0) {
//            ++n;
//            pos += step;
//        } else break;
//    }
//    return n;
//}
//console.log("\n");
//console.log(countCode2("aaacodebbb", "code"));
//console.log(countCode2("codexxcode", "code"));
//console.log(countCode2("cozexxcope", "code", true));