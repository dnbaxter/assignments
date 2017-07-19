var app = angular.module("cartoonApp");

app.service("cartoonService", function() {
    
    //var self = this;
    
    this.newImage = {};
    this.images = [
        {
            "title": "Courage the Cowardly Dog",
            "imgUrl": "http://vignette1.wikia.nocookie.net/courage/images/1/11/Courage.a.jpg/revision/latest?cb=20110304185658",
            "description": "Courage is a timid pink dog with paranoia problems. His owners are an old couple living on a farm full of bizarre adversaries. Courage must overcome his fear and help save his owners, Eustace and Muriel, from ghosts and paranormal spirits living on the farm. Although Muriel loves Courage, Eustace loves to tease him and scare him."
        },
        {
            "title": "Johnny Bravo",
            "imgUrl": "https://b.thumbs.redditmedia.com/Hjl9t0_xjUuoCGZUG5bpfkEnbUXvTOqF1P5EY4abjTQ.png",
            "description": "Johnny Bravo has no shortage of confidence, and he's certain that all women want him. With his big hair and tight black clothes, he's known for his karate chops, accompanied by the sound of a bullwhip."
        },
        {
            "title": "The Powerpuff Girls",
            "imgUrl": "http://vignette3.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045",
            "description": "Accidentally created in a lab by Professor Utonium, superpowered sisters Blossom, Bubbles and Buttercup regularly save Townsville from evildoers such as Mojo Jojo, the Gangreen Gang and Him. Blossom is the self-proclaimed leader of the trio, Bubbles is the cute one and Buttercup is the toughest one."
        }];
    
    this.newImage = function(newImage) {
        this.images.unshift(newImage);
        return this.images;
    }
    
});


