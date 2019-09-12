$('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="main_next_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    prevArrow: '<div class="main_prev_arrow"><img src="assets/img/icon/white-ar.svg" alt=""></div>',
    dots: true,
    arrows: true
});



$('.blog_categories_point').click(function(){
    $('.blog_categories_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('blog_categories_active')){
        $(this).removeClass('blog_categories_active');
        return;
    };
    $('.blog_categories_point').removeClass('blog_categories_active');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('blog_categories_active');
});