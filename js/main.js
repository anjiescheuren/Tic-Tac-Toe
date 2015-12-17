//document ready function
$(function() {

    // create a variable that counts clicks
    var val = 0;
    var clickCount = 0;

    $('.btn-xl').click(function() {
        clickCount = (val++);
    });

    // create an array for all the spots on the board

    var rows = ['topRow', 'middleRow', 'bottomRow'];

    // create a function to wrap click functions
    function buttonClick() {

      $('#a').click(function() {
          if (clickCount % 2 === 0) {
              var shape = "<img src='images/X.png' value='1'>";
          } else {
              shape = "<img src='images/O.png' value='10'>";
          }
          $(this).html(shape);
          // onclick, addClass to button to only allow one click
          $(this).addClass('occupied');
          // create a conditional that only lets you click on a button once
          if ($('div').hasClass('occupied')) {
            $(this).off();
            console.log($('img').val());
          }
      });

      $('#b').click(function() {
          if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
              shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#c').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
        $(this).html(shape);
        $(this).addClass('occupied');
        if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#d').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png'value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#e').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#f').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#g').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#h').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

      $('#j').click(function() {
        if (clickCount % 2 === 0) {
            var shape = "<img src='images/X.png' value=1>";
          } else {
            shape = "<img src='images/O.png' value=10>";
          }
          $(this).html(shape);
          $(this).addClass('occupied');
          if ($('div').hasClass('occupied')) {
            $(this).off();
          }
      });

    }
    buttonClick();

// get the value for a position on the board
// var a = $('#a').val();

// create 8 different variables equal to arrays for each win condition
var topRow = [];
    $(".top-row").find(".btn").each(function() {
        topRow.push(this.id);
        console.log(topRow);
    });

    var middleRow = [];
    $(".middle-row").find(".btn").each(function() {
      middleRow.push(this.id);
      console.log(middleRow);
    });

    var bottomRow = [];
    $(".bottom-row").find(".btn").each(function() {
      bottomRow.push(this.id);
      console.log(bottomRow);
    });

    var firstColumn = [];
// loop through 8 arrays
// if there are 3 Xs or 3 Os in an array
// alert "X wins!" or "O wins!"
// .html('X wins!')
// .html('O wins')
// else if there are not 3 Xs or 3 Os in an array
// alert "Tie!"
// .html('Players tie!')

// clear board function
$('.clear').click(function() {
    $('.btn-xl').empty();
      clickCount = 0;
      $('.btn-xl').click(function() {
        clickCount = (val++);
    });
      buttonClick();
});

});
