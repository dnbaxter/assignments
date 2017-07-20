jQuery(function( $ ){             // DOM ready shorthand
    
    // ::: Fade Gallery: http://stackoverflow.com/a/18454450/383904
    var $gal = $("#photos"),
        $img = $gal.find(">*"),
        n = $img.length,          // number of images
        x = 0,                    // counter
        itv;                      // loop interval       
   
    function anim() { 
        $img.fadeOut(0).eq( ++x % n ).stop().fadeIn(1000);
    }
    function loop() { 
        itv = setInterval(anim, 4800);
    }
    function stop() { 
        clearInterval( itv ); 
    }
    
    $img.hide().eq(x).show();     // Begin with `c` indexed image
    loop();                       // START!
    
});





var total = $('.item').length;
var currentIndex = $('div.active').index() + 1;
$('#slidetext').html(currentIndex + ' of '  + total);

// This triggers after each slide change
$('.carousel').on('slid.bs.carousel', function () {
  currentIndex = $('div.active').index() + 1;
 
  // Now display this wherever you want
  var text = currentIndex + ' of ' + total;
  $('#slidetext').html(text);
});