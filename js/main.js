//document ready function
$(function() {

    // create a variable that counts clicks
    var clickCount = 0;
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
                shape = "<img src='images/X.png' class='image'>";
                var selection = $(this).attr("id");
                X.push(selection);
                console.log(X);

            } else {
                shape = "<img src='images/O.png' class='image'>";
                var selection = $(this).attr("id");
                O.push(selection);
                console.log(O);
            }
            $(this).html(shape);
            // onclick, addClass to button to only allow one click
            $(this).addClass('occupied');

        });

        // clear board function
    $('.clear').click(function() {
        $('.btn-xl').html('');
        $('.btn-xl').removeClass('occupied');
        clickCount = 0;
    });

});

        // $('#b').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#c').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#d').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#e').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#f').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#g').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#h').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

        // $('#j').click(function() {

        //     var shape;
        //     if (clickCount % 2 === 0) {
        //         shape = "<img src='images/X.png' class='image' value=1>";
        //     } else {
        //         shape = "<img src='images/O.png' class='image' value=10>";
        //     }
        //     $(this).html(shape);
        //     $(this).addClass('occupied');
        // });

    // get the value for a position on the board
    // var value = $('.image').val();

    // push those values in to an array
    // var values = [];
    // for (var i = 0; i < Things.length; i++) {
    //   Things[i]
    // };

    // create 8 different variables equal to arrays for each win condition
    // $(".btn-xl").click(function() {
    //   var selection = $(this).attr("id");
    //   topRow.push(selection);
    //   console.log(topRow);
    // });
    // var topRow = [];



    // var middleRow = [];
    // $(".middle-row").find(".btn").each(function() {
    //     middleRow.push(this.id);
    //     console.log(middleRow);
    // });

    // var bottomRow = [];
    // $(".bottom-row").find(".btn").each(function() {
    //     bottomRow.push(this.id);
    //     console.log(bottomRow);
    // });

    // var firstColumn = [];
    // $(".first-col").find(".btn").each(function() {
    //     firstColumn.push(this.id);
    //     // console.log(firstColumn);
    // });

    // var secondColumn = [];
    // $(".second-col").find(".btn").each(function() {
    //     secondColumn.push(this.id);
    //     // console.log(secondColumn);
    // });

    // var thirdColumn = [];
    // $(".third-col").find(".btn").each(function() {
    //     thirdColumn.push(this.id);
    //     // console.log(thirdColumn);
    // });

    // var rows = [['topRow'], ['middleRow'], ['bottomRow']];
    // console.log(rows);
    // var columns = [['firstColumn'], ['secondColumn'], ['thirdColumn']];
    // console.log(columns);


    // loop through 8 arrays

    // if there are 3 Xs or 3 Os in an array
    // if (topRow[0]+[1]+[2] == 3 ||
    // middleRow[0]+[1]+[2] == 3 ||
    // bottomRow[0]+[1]+[2] == 3) {
    // alert 'X wins!'
    // $('#banner').html('X WINS!');}
    // else if (firstColumn[0]+[1]+[2] == 30 ||
    // secondColumn[0]+[1]+[2] == 30 ||
    // thirdColumn[0]+[1]+[2] == 30) {
    // alert 'O wins!'
    // $('#banner').html('O WINS!')}
    // else if there are not 3 Xs or 3 Os in an array
    // else {
    // alert "Tie!"
    // $('#banner').hmtl('IT'S A TIE!);}


