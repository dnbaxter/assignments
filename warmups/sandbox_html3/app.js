//$(document).ready(function () {
//    setImageOne();
//});
//
//function setImageOne() {
//    $('#imageSwap').fadeIn(500).html('<img src="http://kandjdiaries.com/wp-content/uploads/2016/06/DSC_0081.jpg" />').delay(4000).fadeOut(0, function () {
//        setImageTwo();
//    });
//}
//
//function setImageTwo() {
//    $('#imageSwap').fadeIn(500).html('<img src="http://kandjdiaries.com/wp-content/uploads/2016/06/DSC_0192.jpg" />').delay(4000).fadeOut(0, function () {
//        setImageOne();
//    });
//}


$(function(){
  rotatePics(4);
 
  function rotatePics(currentPhoto){
    var numberOfPhotos = $('#photos img').length;
    currentPhoto = currentPhoto % numberOfPhotos;
 
    $('#photos img').eq(currentPhoto).fadeOut(function(){
      // Re-order the z-index
      $('#photos img').each(function(i){
        $(this).css(
          'zIndex', ((numberOfPhotos - i ) + currentPhoto) % numberOfPhotos
        );
      });
 
    $(this).show();
 
    setTimeout(function() {
      rotatePics(++currentPhoto);
    },4000);
 
    });
  }
});