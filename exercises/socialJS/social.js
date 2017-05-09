// With is first set of code we are creating the inital object avidHiker, who is Dustin
var avidHiker = {
    name: "Dustin",
    age: 29,
    stateBorn: "Georgia",
    height: "6, 3",
    weight: 180,
    college: "BYU-Idaho",
    eyeColor: "Hazel",
    favoriteColor: "Green",
    favoriteHikes: ["Mount Olympus", "Middle Teton", "Wild Horsetail Canyon", "Blood Mountain", "Cascade Canyon"],
    favoriteLocations: ["Capitol Reef", "Zion", "Teton National Park", "Canyonland", "Goblin Valley", "Arches", "Northern Georgia"],
    
    
    // afterwards, we are nesting more objects, and object arrays within the inital object
    hikingCompanions: [
        {
            // companion 0
            name: "Jessica",
            age: 27,
            relationship: "fiancee",
            firstHikeTogether: [
                {
                    location: "Utah, USA",
                    hike: "Silver Lake",
                    
                    // with this function, we are bringing together data on how Dustin and Jessica 
                    // meet, and more.
                    speak: function() {
                        console.log("Friend 1: \n\t" + avidHiker.name + " and " + avidHiker.hikingCompanions[0].name + " first met when " + avidHiker.name + " came down from " + avidHiker.college + " to visit a friend and go to a general conference held by the LDS church. The first hike they went on together with their friend " + avidHiker.hikingCompanions[1].name + " was to " + this.hike + " located in " + this.location + "." + " Not long after meeting " + avidHiker.name + " asked " + avidHiker.hikingCompanions[0].name + " to marrying him and without hesitation she said, 'Yes!' becoming his " + avidHiker.hikingCompanions[0].relationship + ".\n");
                    }
                }
            ]
        },
        {
            // companion 1
            name: "Ricardo",
            age: 28,
            relationship: "friend",
            firstHikeTogether: [
                {
                    location: "Alabama, USA",
                    hike: "Tumbling Rock Cave",
                    
                    speak: function() {
                        console.log("Friend 2: \n\t" + avidHiker.hikingCompanions[1].name + " and " + avidHiker.name + " met each other in " + avidHiker.name + "'s homestate of " + avidHiker.stateBorn + ". One of the first hikes they ever went on with each other was actually a splunking trip trough " + this.hike + " located in " + this.location + ".\n");
                    }
                }
            ]
        },
        {
            // companion 2
            name: "Matt",
            age: 25,
            relationship: "friend",
            firstHikeTogether: [
                {
                    location: "Utah, USA",
                    hike: "Canyonlands",
                }
            ]
        },
        {
            // companion 3
            name: "Mike",
            age: 32,
            relationship: "friend",
            firstHikeTogether: [
                {
                    location: "Georgia, USA",
                    hike: "Lake Lanier",
                }
            ]
        },
        {
            // companion 4
            name: "Jennifer",
            age: 29,
            relationship: "friend",
            firstHikeTogether: [
                {
                    location: "Georgia, USA",
                    hike: "Lake Lanier",
                }
            ]
        }
    ]
}

// Right here is where we call the speak function we created within the nested object
// within the main object
avidHiker.hikingCompanions[0].firstHikeTogether[0].speak();
avidHiker.hikingCompanions[1].firstHikeTogether[0].speak();