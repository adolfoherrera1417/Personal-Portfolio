$(document).ready(function() {

$( ".card" )
  .mouseenter(function() {
    $(this).find(".content").fadeToggle(150);
    $(this).find("img").fadeTo(150 , 0.5);
  })
  .mouseleave(function() {
    $(this).find(".content").fadeToggle(150);
    $(this).find("img").fadeTo(150 , 1);
  });

});

//on hover
//content background color = blue with opacity of 50%
//then i want the content to display
//off hover
//everything except image off the screen