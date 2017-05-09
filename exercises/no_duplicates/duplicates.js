function removeDuplicates(string) {
    var result = [];

    var i = null;
    var length = string.length;
    var previous = null;
    for (i = 0; i < length; i += 1) {
        var current = string.charAt(i);

        if (current !== previous) {
            result.push(current);
        }

        previous = current;
    }

    return result.join("");
}

function showDuplicates(string) {
    var result = [];

    var i = null;
    var length = string.length;
    var previous = null;
    for (i = 0; i < length; i += 1) {
        var current = string.charAt(i);

        if (current === previous) {
            result.push(current);
        }

        previous = current;
    }

    return result.join("");
}

console.log(
    "\nNo duplicates: " + removeDuplicates("bookkeeper larry\n"),
    "The Misfits: " + showDuplicates("bookkeeper larry\n\n"),
    
    "\nNo duplicates: " + removeDuplicates("beginning letters\n"),
    "The Misfits: " + showDuplicates("beginning letters\n\n")
);










