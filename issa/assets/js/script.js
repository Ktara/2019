$('.cardContainer').mouseenter(function(){
    $(this).find('.card').toggleClass('flipped');
});






$('.instructor_gallery_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
});
$('.instructor_gallery_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.instructor_gallery_slider',
    dots: false,
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="instructor_gallery_prewAr"></div>',
    nextArrow: '<div class="instructor_gallery_nextAr"></div>'
});






$('.main_video_play').click(function(){
    $('.main_video_wrapper').addClass('open_wrapper').velocity({
        opacity: 1
    }, 600);
    $('.main_video_play').css({
        visibility: 'hidden'
    });
    $('.nav_header').css({
        visibility: 'hidden'
    });
    $('.main_video_close').css({
        display: 'block'
    });
});

$('.main_video_close').click(function(){
    $('.main_video_wrapper').removeClass('open_wrapper').velocity({
        opacity: 1
    }, 600);
    $('.main_video_close').css({
        display: 'none'
    });
    $('.main_video_play').css({
        visibility: 'visible'
    });
    $('.nav_header').css({
        visibility: 'visible'
    });
});





$('.instructor_review_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="instructor_review_prewAr"></div>',
    prevArrow: '<div class="instructor_review_nextAr"></div>',
    infinite: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




$('.nav_header_list').click(function(){
    $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
    $('.nav_header').toggleClass('nav_header_white');
    $('.nav_header_list').toggleClass('nav_header_burger_close');
});





$('.instructor_calendar_wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});





$('.instructor_other_btn').click(function(){
    $('.popup_form').addClass('popup_form_active').animate({
        opacity: 1
    }, 600, function () {
        $('.popup_form').css('display', 'block');
    });
    $('.nav_header').css('display', 'none');
});
$('.popup_form_close').click(function(){
    $('.popup_form').removeClass('popup_form_active').animate({
        opacity: 0
    }, 600, function () {
        $('.popup_form').css('display', 'none');
    });
    $('.nav_header').css('display', 'block');
});






$('.instructor_calendar_btn').click(function(){
    $('.popup_form').addClass('popup_form_active').animate({
        opacity: 1
    }, 600, function () {
        $('.popup_form').css('display', 'block');
    });
    $('.nav_header').css('display', 'none');
});
$('.popup_form_close').click(function(){
    $('.popup_form').removeClass('popup_form_active').animate({
        opacity: 0
    }, 600, function () {
        $('.popup_form').css('display', 'none');
    });
    $('.nav_header').css('display', 'block');
});





$(".instructor_main_btn").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href')
        , top = $(id).offset().top - 150;
    $('body,html').animate({
        scrollTop: top
    }, 1200);
});





$(".school_main_btn").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href')
        , top = $(id).offset().top - 0;
    $('body,html').animate({
        scrollTop: top
    }, 1200);
});






$(".captain_main_btn").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href')
        , top = $(id).offset().top - 150;
    $('body,html').animate({
        scrollTop: top
    }, 1200);
});