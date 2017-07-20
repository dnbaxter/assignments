var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    }
];


function combineUserInfo(people) {
    for (var i = 0; i < people.length; i++) {
        if (people[i].name === people.name) {
            console.log(people[i]);
            var newUser = people[i];
            newUser.numFriends += people.numFriends
        }
    }
    console.log(newUser)

}

combineUserInfo();