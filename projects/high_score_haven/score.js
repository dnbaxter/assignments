function showHideControl() {
    $('#message').toggle();
}

$(document).ready(function () {
    $('.submit').attr('disabled', true);

    $('#userName , #userGame , #highscore').keyup(function () {
        if ($('#userName').val().length != 0 &&
            $('#userGame').val().length != 0 &&
            $('#highscore').val().length != 0) {
            $('.submit').attr('disabled', false);
        } else {
            $('.submit').attr('disabled', true);
        }
    })
});



$(function () {
    $('#form').on('submit', function (e) { //use on if jQuery 1.7+
        e.preventDefault(); //prevent form from submitting
        var data = $("#form :input").serializeArray();
        //console.log(data); //use the console for debugging, F12 in Chrome, not alerts

        console.log(data);
        var userName = data[0].value;
        var gameName = data[1].value;
        var date = data[2].value;
        var highScore = data[3].value;


        //        if ($('.checkBox').is("checked"))// sees if box is checked            
        //        if ($('.checkBox').prop("checked", false))// true or false to check or uncheck    
        //        if ($('.checkBox').checked)// checks the box



        var messageArray = ["Yeah! That's right!", "You got nothin' on me!", "Eat my shorts!", "You're not even good!", "I didn't even try.", "What competition?", "What's good?", "Looking for a real challenge.", "Get on my level.", "GOML!"];
        var randomMessage = Math.floor(Math.random() * messageArray.length);
        var trashTalk = messageArray[randomMessage];

        var boxCheck = $('input:checkbox').is(':checked'); // checks to see if box is checked
        //console.log(message);
        //boxCheck === true ? trashTalk = trashTalk : " ";
        
        if (boxCheck === true) {
            trashTalk = trashTalk;
        } else {
            trashTalk = " ";
        }

        var newRow = `
            <tr>
                <td>${userName}</td>
                <td>${gameName}</td>
                <td>${date}</td>
                <td>${highScore}</td>
                <td>${trashTalk}</td>
            </tr>
        `
        
        // inserts new <td> into the table
        $('#table').append(newRow);

        // resets document after submit
        $('#form').each(function(){
            this.reset();
        });
    });

});



//Note that if you are writing a userscript, it is a good idea
// to prefix your keys, to reduce the risk of collisions with other 
// userscripts or the page itself.
var prefix = "localStorageDemo-";

