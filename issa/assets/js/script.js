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
    infinite: true
});





$('.nav_header_list').click(function(){
    $('.popup_nav_menu').addClass('popup_nav_menu_active').velocity({
        opacity: 1
    }, 600);
    $('.nav_header').addClass('nav_header_white').velocity({
        opacity: 1
    }, 600);
});

$('.popup_nav_menu_close').click(function(){
    $('.popup_nav_menu').removeClass('popup_nav_menu_active').velocity({
        opacity: 0
    }, 600);
});

$('.popup_nav_menu').click(function(event){
    if(event.target === this){
        $(this).velocity({
            opacity: 0
        }, 600);
        setTimeout(function(){
            $('.popup_nav_menu').removeClass('popup_nav_menu_active');
        }, 600);
    };
});