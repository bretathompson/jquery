$(document).ready(function(){
  function fadeButtons() {
    $('nav a, footer a, button').mouseover(function() {
      $(this).fadeTo(150, 0.3);
    }).mouseout(function() {
      $(this).fadeTo(150, 1);
    });

    $('nav a, footer a, button').click(function() {
      $(this).fadeTo(0, 1);
    });
  }

  fadeButtons();
});

