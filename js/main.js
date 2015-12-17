//document ready function
$(function() {

    // create a variable that counts clicks
    var val = 0;
    var clickCount = 0;

    $('.btn-xl').click(function() {
        clickCount = (val++);
    });

    // create an array for all the spots on the board
    var buttons = [];
    $(".board").find(".btn").each(function() {
        buttons.push(this.id);
    });

    $('#a').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png'>";
        } else {
            shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        // onclick, addClass to button to only allow one click
        $(this).addClass('occupied');
        // create a conditional that only lets you click on a button once
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#b').click(function() {
        if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
            shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#c').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
      $(this).html(shape);
      $(this).addClass('occupied');
      if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#d').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#e').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#f').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#g').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#h').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });

    $('#j').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
          $(this).off();
        }
    });
});

// get the value for a position on the board
// var a = $('#a').val();

// create 8 different variables equal to arrays for each win condition

// function for User1 to click on a button in the grid
// mark an 'X' (.click)






// loop through 8 arrays
// if there are 3 Xs or 3 Os in an array
// alert "X wins!" or "O wins!".
// else if there are not 3 Xs or 3 Os in an array
// alert "Tie!".

// clear board function
$('.clear').click(function() {
    $('.btn').empty();
    if ($('div').hasClass('.btn-xl')) {

    }
});

// });
