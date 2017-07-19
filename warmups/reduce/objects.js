var donors = [
    {name: "a", donation: 10},
    {name: "b", donation: 100},
    {name: "c", donation: 4},
    {name: "d", donation: 9000}
];

/*
 * Given an array of donor objects (name and donation amount), return the
 * total amount of donations
 * */

function donationAmount(arr) {

    var sum = arr.reduce(function (prev, current) {
        return prev + current.donation;
    }, 0);
    return sum;
}
console.log(donationAmount(donors));