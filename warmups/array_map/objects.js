var votes = [
    {
        name: "a",
        voted: true
    },
    {
        name: "b",
        voted: false
    },
    {
        name: "c",
        voted: true
    },
    {
        name: "d",
        voted: false
    },
    {
        name: "e",
        voted: true
    },
    {
        name: "f",
        voted: false
    }
];

var voteCounts = votes.map(function (voter) {
    if (voter.voted) {
        return 1;
    } else {
        return 0;
    }
});
console.log(voteCounts);