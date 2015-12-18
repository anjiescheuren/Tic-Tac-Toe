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
            tie(X, playerx);

        } else {
            var playero = 'Player O';
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
        // if
        if (array.includes('a') && array.includes('b') && array.includes('c')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('d') && array.includes('e') && array.includes('f')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('g') && array.includes('h') && array.includes('j')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('a') && array.includes('d') && array.includes('g')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('b') && array.includes('e') && array.includes('h')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('c') && array.includes('f') && array.includes('j')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('a') && array.includes('e') && array.includes('j')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        } else if (array.includes('c') && array.includes('e') && array.includes('g')) {
            array.push('winner');
            $('#banner').html(player + ' Wins!');
        }
    }

    function tie(array, player) {
        // if
        if (array.includes('winner'))  {
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
        clickCount = 1;
    });

});
