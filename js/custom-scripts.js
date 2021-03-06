$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    if ($(window).width() < '481') {
        $('.linear-indicator').removeClass('il-horizontal');
        $('.linear-indicator').addClass('il-vertical');
    } else if ($(window).width() < '981') {
        $('nav ul').css('display', 'none');
        $('.burger').removeClass('fa-close');
        $('.burger').addClass('fa-bars');
    } else if ($(window).width() < '1031') {
        $('.linear-indicator').removeClass('il-vertical');
        $('.linear-indicator').addClass('il-horizontal');
    } else {
        $('.linear-indicator').removeClass('il-horizontal');
        $('.linear-indicator').addClass('il-vertical');
        $('nav ul').css('display', 'flex');
    }

    $(window).resize(function(){
        if ($(window).width() < '481') {
            $('.linear-indicator').removeClass('il-horizontal');
            $('.linear-indicator').addClass('il-vertical');
        } else if ($(window).width() < '981') {
            $('nav ul').css('display', 'none');
            $('.burger').removeClass('fa-close');
            $('.burger').addClass('fa-bars');
        } else if ($(window).width() < '1031') {
            $('.linear-indicator').removeClass('il-vertical');
            $('.linear-indicator').addClass('il-horizontal');
        } else {
            $('.linear-indicator').removeClass('il-horizontal');
            $('.linear-indicator').addClass('il-vertical');
            $('nav ul').css('display', 'flex');
        }
    });
    

    /******************************
     ******* other scripts ********
     ******************************/

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav ul').fadeToggle(200);
    });

    /** disciplines animation **/

    var discipline = $('.disciplines li .image-wrap');

    discipline.hover (

        function() {

            if($(window).width() > 980) {

                $(this).find('.space-hover').css({'top' : '-100%', 'bottom' : 'auto'});
                $(this).find('.space-hover').stop().animate({
                    top: 0
                }, 400);

            }

    },

        function() {

            if($(window).width() > 980) {

                $(this).find('.space-hover').stop().animate({
                    top: '100%'
                }, 400);

            }

        }

    );

    discipline.click(function() {

        if ($(this).find('.space-hover').hasClass('active')) {

            if($(window).width() < 981) {

                $(this).find('.space-hover').removeClass('active');

                $(this).find('.space-hover').stop().animate({
                    top: '100%'
                }, 400);

            }

        }

        else {

            if($(window).width() < 981) {

                $('.space-hover.active').stop().animate({
                    top: '100%'
                }, 400);

                $('.space-hover.active').removeClass('active');

                $(this).find('.space-hover').addClass('active');

                $(this).find('.space-hover').css({'top' : '-100%', 'bottom' : 'auto'});
                $(this).find('.space-hover').stop().animate({
                    top: 0
                }, 400);

            }

        }

    });

    /************************************
     ********* indicator scripts ********
     ************************************/

    $('.form-question button').click(function() {

        linearIndicatorStep();

        radialIndicatorStep();

        return false;

    });

    /** linear indicator */

    function linearIndicatorStep() {

        var items = $('.linear-indicator ul li');

        for (var i =  0; i < items.length; i++) {

            if ($(items[i]).hasClass('active')) {

                $(items[i]).removeClass('active').addClass('empty');

                if (i < items.length - 1) {
                    $(items[i + 1]).addClass('active');
                }

                break;

            }

        }

    }

    /** radial indicator */

    function radialIndicatorStep() {
        
        var step = nextStepNumber();
        
        nextStepImage(step);
        
    }

    function nextStepNumber() {

        var number = parseInt($('.radial-indicator .central span').html());
        
        if (number < 100) {

            number += 5;
            
        }

        $('.radial-indicator .central span').html(number);

        return number;

    }

    function nextStepImage(step) {

        var deg = (step / 5) * 18;

        $('.radial-indicator .filled').css({
            '-webkit-transform' : 'rotate(' + deg + 'deg)',
            '-moz-transform' : 'rotate(' + deg + 'deg)',
            '-ms-transform' : 'rotate(' + deg + 'deg)',
            '-o-transform' : 'rotate(' + deg + 'deg)',
            'transform' : 'rotate(' + deg + 'deg)'
        });

        if (step > 50) {
            $('.radial-indicator').addClass('second-half');
        }

        /*var stepName = $('.radial-indicator').attr('class').split(' ')[1];

        var newStepName = stepName.slice(0, -1);

        var stepNumber = parseInt(stepName.slice(-1));

        stepNumber++;

        newStepName += stepNumber;

        $('.radial-indicator').removeClass(stepName);
        $('.radial-indicator').addClass(newStepName);*/

    }

});


