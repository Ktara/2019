$('.nav_header_burger').click(function(){
    $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
    $('.nav_header_burger').toggleClass('nav_header_burger_close');
});



$('.nav_header_langs_plus').click(function(){
    $('.nav_header_langs').toggleClass('nav_header_langs_open');
    $('.nav_header_langs_plus').toggleClass('nav_header_langs_plus_open');
});



$('.text_block_list_point_title').click(function(){
    $('.text_block_list_point_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('text_block_list_point_title_open')){
        $(this).removeClass('text_block_list_point_title_open');
        return;
    };
    $('.text_block_list_point_title').removeClass('text_block_list_point_title_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('text_block_list_point_title_open');
});




$('.vacancy_list_title').click(function(){
    $('.vacancy_list_text_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('vacancy_list_title_open')){
        $(this).removeClass('vacancy_list_title_open');
        return;
    };
    $('.vacancy_list_title').removeClass('vacancy_list_title_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('vacancy_list_title_open');
});



$('.main_elements_box_more').click(function(){
    $('.main_elements_box_wrapper').toggleClass('main_elements_open');
    $('.main_elements_box_text_wrapper_tablet').toggleClass('main_elements_open_text');
    $('.main_elements_box_more').toggleClass('more_open');
});




var $productTabs = $('.project_main_about_head li');
var $productTexts = $('.project_main_about_block');
$productTabs.click(function () {

    for(var i = 0; i < $productTabs.length; i++) {
        if($(this)[0] == $productTabs[i]) {
            $productTabs.removeClass('project_main_about_active');
            $productTexts.removeClass('project_main_about_text_active');
            $(this).addClass('project_main_about_active');
            $($productTexts[i]).addClass('project_main_about_text_active');
        }
    }
});




var $blogTabs = $('.blog_main_sort li');
var $blogTexts = $('.blog_main_block_wrapper');
$blogTabs.click(function () {

    for(var i = 0; i < $blogTabs.length; i++) {
        if($(this)[0] == $blogTabs[i]) {
            $blogTabs.removeClass('active_point_sort');
            $blogTexts.removeClass('active_block_sort');
            $(this).addClass('active_point_sort');
            $($blogTexts[i]).addClass('active_block_sort');
        }
    }
});




$('.project_about_slider_wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    // nextArrow: '<div class="comment_next_arrow"></div>',
    // prevArrow: '<div class="comment_prev_arrow"></div>',
    dots: true,
    arrows: true,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.reviews_count').text(length);
        return i + 1 + '/' + length;
    }
});




$('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="main_next_arrow">Дальше</div>',
    prevArrow: '<div class="main_prev_arrow">Назад</div>',
    dots: true,
    arrows: true,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.main_count').text(length);
        var idx = i + 1;
        return '0' + idx;
    }
});




$('.review_slider').slick({
    centerMode: true,
    centerPadding: '27%',
    // focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="review_next_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    prevArrow: '<div class="review_prev_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerPadding: '20px'
            }
        }
    ]
});




$('.gallery_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: '<div class="gallery_next_arrow">Дальше</div>',
    prevArrow: '<div class="gallery_prev_arrow">Назад</div>',
    fade: true,
    infinite: true,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.gallery_count').text(length);
        var idx = i + 1;
        return '0' + idx;
    },
    responsive: [
        {
            breakpoint: 420,
            settings: {
                dots: false
            }
        }
    ]
});
$('.gallery_slider_nav').slick({
    centerMode: true,
    centerPadding: '48.5%',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery_slider',
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                centerPadding: '66.5%',
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerPadding: '20px'
            }
        }
    ]
});