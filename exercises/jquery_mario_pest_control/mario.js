var total1 = 0;
var total2 = 0;
var total3 = 0;
var totalKilled1 = 0;
var totalKilled2 = 0;
var totalKilled3 = 0;
var audio = $("#mysoundclip")[0];

$("#Goombas").keypress(function (e) {
    var moreCoins1 = goombasKilled = $("#Goombas").val();
    
//    if (isNaN(moreCoins1)) {
//        moreCoins1 = 0;
//    } 
//    This will fix NaN issues with no input.
    
    // new Audio("input sound clip").play();
    
    if (e.which == 13) {
        e.preventDefault();
        audio.play();
        
        total1 += moreCoins1 * 5;
        $("#goombasCaught").html(total1 + " coins"); // individual coins
        $("#totalCoins").html(total1 + total2 + total3 + " coins") // total coins

        // Time to kill the enemies
        totalKilled1 += goombasKilled * 1;
        $("#goombasKilled").html(totalKilled1 + " killed"); // individual goombas killed
        $("#totalKilled").html(totalKilled1 + totalKilled2 + totalKilled3 + " killed") // total killed
    }
});

$("#Bob-ombs").keypress(function (e) {
    var moreCoins2 = bobombsKilled = $("#Bob-ombs").val();
    
    if (e.which == 13) {
        e.preventDefault();
        audio.play();
        
        total2 += moreCoins2 * 7;
        $("#bobombsCaught").html(total2 + " coins"); // individual coins
        $("#totalCoins").html(total1 + total2 + total3 + " coins") // total coins

        // Time to kill the enemies
        totalKilled2 += bobombsKilled * 1;
        $("#bobombsKilled").html(totalKilled2 + " killed"); // individual bob-ombs killed
        $("#totalKilled").html(totalKilled1 + totalKilled2 + totalKilled3 + " killed") // total killed
    }
});

$("#Cheep-Cheeps").keypress(function (e) {
    var moreCoins3 = cheepcheepsKilled = $("#Cheep-Cheeps").val();
    
    if (e.which == 13) {
        e.preventDefault();
        audio.play();
        
        total3 += moreCoins3 * 11;
        $("#cheepcheepsCaught").html(total3 + " coins"); // individual coins
        $("#totalCoins").html(total1 + total2 + total3 + " coins") // total coins

        // Time to kill the enemies
        totalKilled3 += cheepcheepsKilled * 1;
        $("#cheepcheepsKilled").html(totalKilled3 + " killed"); // individual cheep-cheeps killed
        $("#totalKilled").html(totalKilled1 + totalKilled2 + totalKilled3 + " killed") // total killed
    }
});






    var isModeLight = true;
    $('#switchto-dark-mode').click(function() {
        if (isModeLight) {
            //change main background to dark
            $('.container').css({backgroundColor: 'rgba(51,51,51,1)'});
            $('.container2').css({backgroundColor: '#333'});
            $('body').css({background: 'linear-gradient(rgba(51,51,51,1), rgba(51,51,51,1))'});
            
            $('.red').css({color: 'rgba(200,1,4,1)'});
            $('.green').css({color: 'rgb(70,184,4)'});
            $('.yellow').css({color: 'rgb(224,173,51)'});
            $('.blue').css({color: 'rgb(52,117,215)'});

            $('.title2').css({backgroundColor: 'rgba(51,51,51,.9)'});
            $('.form-inline').css({backgroundColor: 'rgba(51,51,51,.9)'});
            $('footer').css({backgroundColor: 'rgba(51,51,51,.9)'});
            $('#goombasCaught').css({color: 'silver'});
            $('#bobombsCaught').css({color: 'silver'});
            $('#cheepcheepsCaught').css({color: 'silver'});
            $('#totalCoins').css({color: 'silver'});

            $('.light-dark-toggle').css({color: '#acacac'});
            //change the label in the button to 'Light-Mode'
            $('.light-dark-toggle').children('span').last().text(' Light-Mode');

            isModeLight = false;
        } else {
            $('.container').css({backgroundColor: 'rgba(51,51,51,0)'});
            $('footer').css({backgroundColor: 'dimgray'});
            $('body').css({'background-image': 'url(http://imgur.com/ak5WkII.png)', backgroundRepeat: 'no-repeat', backgroundSize: '75%', 'background-position':'top-left'});
            
            $('.red').css({color: '#eb1f22'});
            $('.green').css({color: '#78ea2c'});
            $('.yellow').css({color: '#fecb51'});
            $('.blue').css({color: '#5c9dff'});
           
            $('.form-inline').css({background: 'dimgray'});
            $('.container2').css({backgroundColor: 'rgba(255,215,0,0.3)'});
            $('#goombasCaught').css({color: 'black'});
            $('#bobombsCaught').css({color: 'black'});
            $('#cheepcheepsCaught').css({color: 'black'});
            $('#totalCoins').css({color: 'black'});
            

            //change the 'Dark-Mode/Light-Mode switch for better visibility'
            $('.light-dark-toggle').css({color: 'rgba(0,0,0, 0.7)'});
            //change the label in the button back to 'Dark-Mode'
            $('.light-dark-toggle').children('span').last().text(' Dark-Mode');
            isModeLight = true;

        }
    });