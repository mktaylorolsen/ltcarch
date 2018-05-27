AOS.init({
  duration: 1200,
})
/*HOME*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("homeSlide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; //add fade out css animation
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex-1].style.display = "block"; //add fade in css animation
    setTimeout(carousel, 4000); // Change image every 2 seconds
}


$(document).ready(function() {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 750) {
      $('.project').removeAttr('data-aos-delay');
    }
  };

  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
