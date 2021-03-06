//document ready function
$(function() {

    // create a variable that counts clicks
    var clickCount = 1;
    $('.btn-xl').click(function() {
        if ($(this).hasClass('occupied')) {
            return false;
        }
        clickCount++;
    });

    var X = [];
    var O = [];

    var fosho = new Audio('images/fosho.wav');

    $('.btn-xl').click(function() {

        var shape;
        if (clickCount % 2 === 0) {
            var playerx = $('.player1').val();
            shape = "<img src='images/X.png' class='image'>";
            $('img').css('background-color');
            var selection = $(this).attr("id");
            X.push(selection);
            getWinner(X, playerx);
            tie(X, playerx);

        } else {
            var playero = $('.player2').val();
            shape = "<img src='images/O.png' class='image'>";
            var selection = $(this).attr("id");
            O.push(selection);
            getWinner(O, playero);
            tie(O, playero);
        }
        $(this).html(shape);
        // onclick, addClass to button to only allow one click
        $(this).addClass('occupied');
    });

    function getWinner(array, player) {
        if (array.includes('a') && array.includes('b') && array.includes('c')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('d') && array.includes('e') && array.includes('f')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('g') && array.includes('h') && array.includes('j')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('a') && array.includes('d') && array.includes('g')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('b') && array.includes('e') && array.includes('h')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('c') && array.includes('f') && array.includes('j')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('a') && array.includes('e') && array.includes('j')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('c') && array.includes('e') && array.includes('g')) {
            array.push('winner');
            fosho.play();
            $('#banner').html(player + ' Wins!');
        }
    }

    function tie(array, player) {
          if (array.includes('winner'))  {
            return false;
          } else if (clickCount === 10) {
            $('#banner').html('Players Tie!');
          }
        }
    // clear board function
    $('.clear').click(function() {
        $('.btn-xl').html('');
        $('#banner').html('');
        $('.btn-xl').removeClass('occupied');
        X = [];
        O = [];
        $('.player1').val('');
        $('.player2').val('');
        clickCount = 1;
    });

});
