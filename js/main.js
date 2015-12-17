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

    // loop through the array to assign X to each button
    // alternate player clicks. X clicks first. (modulus)
    // for (var i = 0; i < buttons.length; i++) {
    // buttons[i]


    $('#a').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png'>";
        } else {
            shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#b').click(function() {
        if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
            shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#c').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
      $(this).html(shape);
    });

    $('#d').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#e').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#f').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#g').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#h').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
    });

    $('#j').click(function() {
      if (clickCount % 2 === 0) {
          var shape = "<img src='images/X.png'>";
        } else {
          shape = "<img src='images/O.png'>";
        }
        $(this).html(shape);
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
});

// });
