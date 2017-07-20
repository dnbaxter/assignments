let matchingWords = (str) => {
    str = str.toLowerCase();
    let words = str.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i++) {
        //console.log('i words:' + words[i])
        for (let x = 0; x < words.length; x++) {
            //console.log('x words:' + words[x])
            if (words[i] === words[x] && x !== i) {
                if (result.includes(words[i]) === false) {
                    result.push(words[i]);
                }
            }
        }
    }
    return result;
};

let riddle = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas. ";
let answer = matchingWords(riddle);
console.log(answer);

module.exports = matchingWords;