$(document).ready(function(){

    $('.site-int-titles').find('h2').addClass('showh');
    $('.site-int-titles').find('h4').addClass('showh');

    /******************* sub Menu *********************/

        if($(window).width() > 992){
            $('.main-ul > li').mouseenter(function () {
                $(this).find('ul.sub-menu').slideDown('fast')
            });
            $('.main-ul > li').mouseleave(function () {
                $(this).find('ul.sub-menu').slideUp('fast')
            });

            var body_width = $(window).width();

            var mega_menu_li_width = $('.mega-menu-li').width();
            var mega_menu_li_pos = $('.mega-menu-li').position();
            var mega_menu_li_pos_right= -(body_width - ((mega_menu_li_pos.left) + mega_menu_li_width + 64));
            if( $('body').find('.mega-menu').length > 0){
                $('body').find('.mega-menu').css({
                    'width':body_width,
                    'right' : mega_menu_li_pos_right
                });
            }

        }

    /******************* scroll menu *********************/
    if($(window).width() > 992) {
        var scroll_offset = 300;
        $(document).scroll(function () {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > scroll_offset) {
                $("#main-header").addClass('fix-menu');
            } else {
                $("#main-header").removeClass('fix-menu');
            }
        });
    }

    /********************* side-box *********************/

        if($(window).width() > 992){
            $('.menu-icon').click(function () {
                $('#side-box').toggleClass('open-side-box');
                $('.hamburger--slider').toggleClass('is-active');
            });

            $('.menu-triger').click(function () {
                $('#side-box').toggleClass('open-side-box');
                $('.hamburger--slider').toggleClass('is-active');
            });
        }
        if($(window).width() < 992){
            $('.menu-icon').click(function () {
                $('.main-menu').find('ul.main-ul').slideToggle();
            });

            $('.main-ul li').click(function () {
               $(this).find('.sub-menu').slideToggle();
            });
            $('.mega-menu > li').removeClass('container');
        }


    /********************* play video *********************/

        $('.bio-video').click(function () {
            $('.bio-videoplayer').addClass('show');
        });
        $('.bio-videoplayer > span').click(function () {
            $('.bio-videoplayer').removeClass('show');
        });

    /**************** edit background color with scroll ****************/

        var window_height = $(window).height();
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > window_height) {
                $("body").css('background-color', 'black');
            } else {
                $("body").css('background-color', 'white');
            }
        });

});