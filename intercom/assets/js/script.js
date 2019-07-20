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
    $('.main_cooperate_list_point_title').removeClass('text_block_list_point_title_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('text_block_list_point_title_open');
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