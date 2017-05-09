function noTeenSum(a, b, c) {
    
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
}

function fixTeen(n) {
    if (n > 12 && n < 20) {
        if (n === 15 || n === 16) {
            return n;
        } else {
            return 0;
        }
    } else {
        return n;
    }
}
console.log(noTeenSum(1, 2, 3)); 
console.log(noTeenSum(2, 13, 1)); 
console.log(noTeenSum(2, 1, 14)); 
console.log(noTeenSum(2, 15, 14));