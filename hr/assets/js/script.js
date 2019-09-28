$('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="main_next_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    prevArrow: '<div class="main_prev_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 450,
            settings: {
                customPaging : function(slider, i) {
                    var length = slider.$slides.length;
                    $('.main_count').text(length);
                    return i + 1 + '/' + length;
                }
            }
        }
    ]
});



$('.service_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="service_next_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    prevArrow: '<div class="service_prev_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    dots: true,
    arrows: true
});



$('.blog_categories_point').click(function(e){
    $('.blog_categories_wrapper').animate({
        height: 0
    }, 200);
    var target = $(this).find('.blog_categories_wrapper');
    if ($(this).hasClass('blog_categories_active')){
        $(this).removeClass('blog_categories_active');
        return;
    };
    $('.blog_categories_point').removeClass('blog_categories_active');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 200);
    $(this).addClass('blog_categories_active');
});



$('.events_categories_point').click(function(e){
    $('.events_categories_wrapper').animate({
        height: 0
    }, 200);
    var target = $(this).find('.events_categories_wrapper');
    if ($(this).hasClass('events_categories_active')){
        $(this).removeClass('events_categories_active');
        return;
    };
    $('.events_categories_point').removeClass('events_categories_active');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 200);
    $(this).addClass('events_categories_active');
});



$('.sign_btn').click(function(){
    $('.popup_sign').addClass('popup_sign_active').velocity({
        opacity: 1
    }, 300);
    $('.popup_sign_blue').addClass('blue_active');
});
$('.popup_sign_close').click(function(){
    $('.popup_sign').removeClass('popup_sign_active').velocity({
        opacity: 1
    }, 500);
});
$('.popup_sign_back').click(function(){
    $('.popup_sign').removeClass('popup_sign_active').velocity({
        opacity: 1
    }, 500);
});




$('.consultation_btn').click(function(){
    $('.popup_consultation').addClass('popup_consultation_active').velocity({
        opacity: 1
    }, 300);
    $('.popup_consultation_blue').addClass('blue_active');
});
$('.popup_consultation_close').click(function(){
    $('.popup_consultation').removeClass('popup_consultation_active').velocity({
        opacity: 1
    }, 500);
});
$('.popup_consultation_back').click(function(){
    $('.popup_consultation').removeClass('popup_consultation_active').velocity({
        opacity: 1
    }, 500);
});