$(document).ready(function () {

    var discipline = $('.disciplines li');

    /******************************
     ******* init scripts *********
     ******************************/

    

    /******************************
     ******* other scripts ********
     ******************************/

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav ul').slideToggle(200);
    });

    /** disciplines animation **/

    discipline.hover (

        function() {

            if($(window).width() > 980) {

                $(this).find('.space-hover').css({'top' : '-100%', 'bottom' : 'auto'});
                $(this).find('.space-hover').stop().animate({
                    top: 0
                }, 400);

            }

    },  function() {

            if($(window).width() > 980) {

                $(this).find('.space-hover').stop().animate({
                    top: '100%'
                }, 400);

            }

        });

    discipline.click(function() {

        if ($(this).find('.space-hover').hasClass('active')) {

            if($(window).width() < 981) {

                $(this).find('.space-hover').removeClass('active');

                $(this).find('.space-hover').stop().animate({
                    top: '100%'
                }, 400);

            }

        } else {

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

});


