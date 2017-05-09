/*********************************************************************/

var someWords = "I love to eat mangoes...";
for (var i = 0; i < someWords.length; i++) {
    console.log("|" + someWords[i] + "|");
}

/*********************************************************************/

var input = "this is a string";
function findTheCharacter(input, char) {
    findLetter = false;
    
    console.log("\n");
    
    for (var i = 0; i < input.length; i++) {
        if (input[i] === char) {
            findLetter = true;
            console.log(i);
        }
        if (findLetter === false) {
            console.log("Locating!");
        }
    }
}
findTheCharacter(input, "i");

/*********************************************************************/

var third = ([11,22,13,15,33,21,1,2,3,4,5,42,99,100,101,999]);
function findTheNumber(nums) {
    
    findNumber = false;
    console.log("\n");
    console.log("Searching through " + nums.length + " index locations for the number 42");
    
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] === 42) {
            break;
        }
        if (nums[i] != 42) {
            console.log("Searching..");
        } else if (nums[i] === 42) {
            findNumber = true;
            console.log("Found it! Located in index location: " + nums.indexOf(42));
            break;
        } else if (findNumber === false) {
            console.log("Could not locate 42.")
        }
    }
}

findTheNumber(third);

/**
    for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 42) {
    console.log("Found it!")
    break;
    }
    console.log("Could not find it!")
    }
**/

/*********************************************************************/

var numbers = [43, 42, 22, 55, 77, 88, 99, 11, 9, 10];
function findTheSmallest(nums) {
    // compare uses the first number in the array as the comparison
    var compare = nums[0];
    console.log("\n");
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < compare) {
            compare = nums[i];
        }
    }
    
    console.log("The smallest numbers was: " + compare);
}

findTheSmallest(numbers);

/**
var lowestNum = input[0];
input.forEach(function(val)) {
lowestNum = Math.min(lowestNum, val);
}
console.log(lowestNum);
**/

/**
var lowestNum = nums[0];
for (var i = 0; i < nums.length; i++) {
lowestNum = Math.min(lowestNum, nums[i]);
}
console.log("The smallest is number is: " + lowestNum)
}
**/

/*********************************************************************/

