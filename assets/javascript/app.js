$(document).ready(function(){


    //GLOBAL VARIALBES
    var counter = 30;
    var timeInterval;
    var rightq = 0;
    var wrongq = 0;
    var unaswered =0;

    //COUNTDOWN START

    function setTimer(){
        timeInterval = setInterval(decrement, 1000);
    }

    $(window).on("load", hide);

    $('#start').on('click', function(){
        $(this).hide();
        show();
        setTimer();
    });

    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        Results();
        stop();

    });

    function Results(){
        var allComplete = $('<h2>').html("All questions answered!!!");
        var correctAswers = $('<p>').html('Correct asnwers ' + rightq);
        var incorrectAswers = $('<p>').html('Incorrect asnwers ' + wrongq);
        var unasweredQue = $('<p>').html('Unanswered ' + unaswered);
        var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="results">');
        newclass.append(allComplete);
        newclass.append(correctAswers);
        newclass.append(incorrectAswers);
        newclass.append(unasweredQue);
        $('.row:nth(2)').append(newclass); //add row for the results
    }

    function decrement(){
        counter--;
        $('#timer').html(" " + counter + " seconds");

        if (timer === 1){
            $('#timer').html("" + counter + " seconds");
        }
        else if(counter === 0){
            $('#start').hide();
            hide();
            Results();
            stop();
        }
    }

    function stop(){
        clearInterval(timeInterval);
    }

    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }

    function show() {
        $('.form-group').show();
        $('#time').show();
        $('#done').show();
    }

    $('input[type=radio]').on("change", function() {
        rightq =  $('input[value=goodanswer]:checked').length;
        wrongq = $('input[value=wrong]:checked').length;
        unanswered = (7-(rightq + wrongq));
     });
     


    
})