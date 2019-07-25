$('.nav_header_burger').click(function(){
    $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
    $('.nav_header_burger').toggleClass('nav_header_burger_close');
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