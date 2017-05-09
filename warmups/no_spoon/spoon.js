var objects = {
    cellphone: {
        color: "black",
        brand: "LG",
        model: "G5",
        others: {
            type1: "iPhone",
        },
        speak: function () {
            console.log("\nDustin owns a " + this.color + " " + this.brand + " " + this.model + ".\n");
        }
    },

    laptop: {
        color: "silver",
        brand: "Apple",
        model: "MacBook Pro",
        screensizes: {
            size1: 24,
            size2: 27,
        },
        amount: 10,
        speak: function () {
            console.log("The main computer here is a " + this.model + " made by " + this.brand + ".\n");
        }
    },

    monitor: {
        color: "black",
        brand: "Asus",
        amount: 12,
        speak: function () {
            console.log("On top of all the " + objects.laptop.model + "'s in the room. There are also roughly " + this.amount + " " + this.color + " " + this.brand + " monitors.\n");
        }
    },

    table: {
        topColor: "white",
        legColor: "black",
        amount: 12,
        speak: function () {
            console.log("This room is filled with " + this.topColor + " tables!\n");
        }
    },

    drinks: {
        types: [" juice", " coffee", " tea"],
        container: ["can", "mug", "glass"],
        mostPopular: "coffee",
        speak: function () {
            console.log("Let's first see our drink types; " + this.types + ". Now let's reverse it!" + this.types.reverse() + "! Cool huh?!\n");
        }
    },

    markers: {
        colors: ["black", "blue", "red"],
        type: "Expo",
        length: 4,
        lengthType: "inches",
        speak: function () {
            console.log("If you take a " + this.colors[0] + " to the " + objects.projector.color + " " + objects.projector.brand + " projector. It will no longer be that color!")
            if (objects.projector.color === "white") {
                console.log("Lucky for you, it is still white.\n")
            } else {
                console.log("You're in some serious trouble now!\n")
            }
        },
        speak2: function () {
            console.log("Not long after saying that, you got the idea to color the projector..")
            objects.projector.color = "black";
            if (objects.projector.color === "white") {
                console.log("Lucky for you, it is still white.\n")
            } else {
                console.log("You're in some serious trouble now!\n")
            }
        }
    },

    projector: {
        brand: "BenQ",
        color: "white",
        resolution: "1080p",
        more: {
            models: ["HT2050", "SX920", "W1070"]
        },
        speak: function () {
            console.log("The class room we are in has an awesome " + this.color + " " + this.brand + " projector that shoots in " + this.resolution + ".\n");
        }
    },

    people: {
        genderMale: {
            ethnicity: ["white"],
            eyecolors: ["blue", "brown", "hazel"],
        },
        genderFemale: {
            ethnicity: ["white", "hispanic"],
            eyecolors: ["blue", "brown", "hazel"],
        },
        speak: function () {
            console.log("The main ethnicity of the class is " +
                this.genderMale.ethnicity[0] + " but isn't a big difference other than that.\n");
        }
    },

    shoes: {
        brands: ["Converse", "Vans", "Nike", "Puma", "etc."],
        colors: ["black", "brown", "gray", "tan", "blue"],
        favorite: "Converse",
        myShoeSize: 12,
        speak: function () {
            console.log("I'm the cool guy in class by the name of Dustin wearing the " + this.colors[0] + " " + this.brands[0] + ".\n");
        }
    },


    projectorScreen: {
        color: "white",
        height: "tall",
        legType: "tripod",
        speak: function () {
            console.log("The projector screen sits on-top of a " + this.color + " " + this.height + " " + this.legType + ".\n");
        }
    },

    carpet: {
        style: "box-pattern",
        colors: ["tan", "brown", "darkblue"],
        type: "low-profile",
        speak: function () {
            console.log("The carpet is a mixture of " + this.colors[0] + ", " + this.colors[1] + ", and " + this.colors[2] + ".");
        }
    },
}


objects.cellphone.speak();
objects.laptop.speak();
objects.monitor.speak();
objects.table.speak();
objects.drinks.speak();
objects.markers.speak();
objects.markers.speak2();
objects.projector.speak();
objects.people.speak();
objects.shoes.speak();
objects.projectorScreen.speak();
objects.carpet.speak();



