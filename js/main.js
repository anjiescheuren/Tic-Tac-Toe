//document ready function
$(function() {

    // create a variable that counts clicks
    var clickCount = 1;
    $('.btn-xl').click(function() {
        if ($(this).hasClass('occupied')) {
            return false;}
        clickCount++;
    });

    // create a function to wrap click functions
    var X = [];
    var O = [];

        $('.btn-xl').click(function() {
            // create a conditional that only lets you click on a button once

            var shape;
            if (clickCount % 2 === 0) {
                var playerx = 'Player X';
                shape = "<img src='images/X.png' class='image'>";
                var selection = $(this).attr("id");
                X.push(selection);
                getWinner(X, playerx);

            } else {
                var playero = 'Player O';
                shape = "<img src='images/O.png' class='image'>";
                var selection = $(this).attr("id");
                O.push(selection);
                getWinner(O, playero);
            }
            $(this).html(shape);
            // onclick, addClass to button to only allow one click
            $(this).addClass('occupied');


        });

    function getWinner(array, player) {
    // if
      if (array.includes('a') && array.includes('b') && array.includes('c')) {
        $('#banner').html(player + ' Wins!');
      } else if (array.includes('d')&&array.includes('e')&&array.includes('f')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('g')&&array.includes('h')&&array.includes('j')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('a')&&array.includes('d')&&array.includes('g')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('b')&&array.includes('e')&&array.includes('h')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('c')&&array.includes('f')&&array.includes('j')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('a')&&array.includes('e')&&array.includes('j')) {
        $('#banner').html(player + ' Wins!');
      }  else if (array.includes('c')&&array.includes('e')&&array.includes('g')) {
        $('#banner').html(player + ' Wins!');
      }
    // array X includes a&&b&&c || d&&e&&f || g&&h&&j
    // || a&&d&&g || b&&e&&h || c&&f&&j || a&&e&&j ||
    // c&&e&&g
    // alert 'X wins!'
    // $('#banner').html('X WINS!');}

    // else if
    // array X includes a&&b&&c || d&&e&&f || g&&h&&j
    // || a&&d&&g || b&&e&&h || c&&f&&j || a&&e&&j ||
    // c&&e&&g
    // alert 'O wins!'
    // $('#banner').html('O WINS!')}

    // else
    // alert "Tie!"
    // $('#banner').hmtl('IT'S A TIE!);}
    }



        // clear board function
    $('.clear').click(function() {
        $('.btn-xl').html('');
        $('#banner').html('');
        $('.btn-xl').removeClass('occupied');
        X = [];
        O = [];
        clickCount = 1;
    });

});




