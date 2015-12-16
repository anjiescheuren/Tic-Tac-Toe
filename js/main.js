//document ready function
$(function () {

  // assign X a number (1)
  var X = 1;
  // assign O a number (9)
  var O = 9;
  // create an array for all the spots on the board
  var left = [];
  var middle = [];
  var right = [];

  // get the value for a position on the board
  // var a = $('#a').val();

  // create 8 different variables equal to arrays for each win condition

  // function for User1 to click on a button in the grid
    // mark an 'X' (.click)

    $('#a').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#b').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#c').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#d').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#e').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#f').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#g').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#h').click(function() {
      $(this).text('X');
      console.log('picture');
    });

    $('#j').click(function() {
      $(this).text('X');
      console.log('picture');
    });

  // alternate player clicks. X clicks first. (modulus)

  // function for User2 to click on a button in the grid
    // mark an 'O' (.click)
    $('#b').click(function() {
      $(this).text('O');
      console.log('picture');
    });

  // loop through 8 arrays
    // if there are 3 Xs or 3 Os in an array
      // alert "X wins!" or "O wins!".
    // else if there are not 3 Xs or 3 Os in an array
      // alert "Tie!".

  // clear board function
  $('.clear').click(function() {
    $('.btn').empty();
  });

});


