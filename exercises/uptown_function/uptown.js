var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printLyrics(lyrics) {
    console.log("\n" + lyrics.join(" ") + "\n");
}
printLyrics(lyrics);

/*********************************************************************/

function printBackwards(lyrics) {
//    var lyricsReversed = lyrics.reverse(" ").join(" ");
    console.log(lyrics.reverse().join(" ") + "\n");
}
printBackwards(lyrics);

/*********************************************************************/

function everyOther(lyrics) {
    var arr = [];
    
    for (i = 0; i < lyrics.length; i += 2) {
        arr.push(lyrics[i]);
    }
    console.log(arr.reverse().join(" ") + "\n");
}
everyOther(lyrics);

/*********************************************************************/

function everyOther2(lyrics) {   
    //var arr = [];
    for (i = 0; i < lyrics.length; i += 2) {
        process.stdout.write(lyrics[i+1] + " " + lyrics[i] + " \n")
        //arr.push(lyrics[i + 1] + " " + lyrics[i]);
    }
    //console.log(arr.reverse().join(" ") + "\n");
}
everyOther2(lyrics);

/*********************************************************************/