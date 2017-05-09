function timeAndDate() {
    var day;

    switch (new Date().getDate()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    
//    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//    var today = days[new Date().getDate()]
//    console.log("Today is: " + today);

    var hours = new Date().getHours();
    var hours = (hours + 24 - 2) % 24;
    var mid = 'am';
    if (hours == 0) { //At 00 hours we need to show 12 am
        hours = 12;
    } else if (hours > 12) {
        hours = hours % 12;
        mid = 'pm';
    }
    
//    var d = new Date();
//    var ampm = d.getHours() < 12 ? "am" : "pm";
//    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//    var currentTime = d.toLocaleTimeString();
//    console.log("Current time is: " + currentTime);
    

    var currentdate = new Date();
    var datetime = "Today is: " + day +
        "\n" + "Current time is: " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds() + " " + mid;

    console.log(datetime);
}

timeAndDate();