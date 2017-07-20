var app = angular.module("musicApp");

app.service("database", function () {

    this.data = [{
            name: "Sting",
            genre: "Rock",
            members: 4,
            _id: "423df444655434"
    },
        {
            name: "Funkadelic",
            genre: "Funk",
            members: 39,
            _id: "42344jhj34234"
     },
        {
            name: "Suke and the Pizza Delivery Boys",
            genre: "Polka Punk Indie",
            members: 2.5,
            _id: "4534534534dassbutt"
    },
        {
            name: "Pink Floyd",
            genre: "Rock",
            members: 4,
            _id: "6456fd4565645"
    },
        {
            name: "Led Zepplin",
            genre: "Rock",
            members: 4,
            _id: "87564fd356533"
    },
        {
            name: "The Beatles",
            genre: "Rock",
            members: 4,
            _id: "5364fd5675665"
    }];

});