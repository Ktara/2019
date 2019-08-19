$('.nav_header_burger').click(function(){
    $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
    $('.nav_header_burger').toggleClass('nav_header_burger_close');
});



$('.nav_header_langs_plus').click(function(){
    $('.nav_header_langs').toggleClass('nav_header_langs_open');
    $('.nav_header_langs_plus').toggleClass('nav_header_langs_plus_open');
});


$('.details_btn').click(function(){
    $('.popup_details').toggleClass('popup_details_active');
});
$('.popup_details_close').click(function(){
    $('.popup_details').toggleClass('popup_details_active');
});




$('.consultation_btn').click(function(){
    $('.popup_consultation').toggleClass('popup_consultation_active');
});
$('.popup_consultation_close').click(function(){
    $('.popup_consultation').toggleClass('popup_consultation_active');
});



$('.price_btn').click(function(){
    $('.popup_price').toggleClass('popup_price_active');
});
$('.popup_price_close').click(function(){
    $('.popup_price').toggleClass('popup_price_active');
});



$('.want_btn').click(function(){
    $('.popup_want').toggleClass('popup_want_active');
});
$('.popup_want_close').click(function(){
    $('.popup_want').toggleClass('popup_want_active');
});



$('.partner_btn').click(function(){
    $('.popup_partner').toggleClass('popup_partner_active');
});
$('.popup_partner_close').click(function(){
    $('.popup_partner').toggleClass('popup_partner_active');
});



$('.popup_btn').click(function(){
    $('.popup_image').toggleClass('popup_image_active');
});
$('.popup_image_close').click(function(){
    $('.popup_image').toggleClass('popup_image_active');
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



$('.main_elements_box_more').click(function(event){
    $('.main_elements_box_wrapper').removeClass('main_elements_open');
    $(event.target).parent().parent().addClass('main_elements_open');
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
    nextArrow: '<div class="project_about_next_arrow">Дальше</div>',
    prevArrow: '<div class="project_about_prev_arrow">Назад</div>',
    dots: false,
    arrows: true,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.reviews_count').text(length);
        return i + 1 + '/' + length;
    },
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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
    dots: false,
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
    // initialSlide: -2,
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
                // centerMode: true,
                centerPadding: '0%',
                slidesToShow: 1,
                // slidesToScroll: 1,
                // vertical: true,
                // verticalSwiping: true
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





$('.product_main_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




$('.product_point_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="product_point_next_arrow">Дальше</div>',
    prevArrow: '<div class="product_point_prev_arrow">Назад</div>'
});



$('.product_main_image_slider').slick({
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="product_main_image_next_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    prevArrow: '<div class="product_main_image_prev_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerPadding: '40px'
            }
        }
    ]
});

(function () {
    $('.stages_work_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        initialSlide: -1,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            }
        ]
    });
})();



$('.popup_image_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="popup_image_next_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    prevArrow: '<div class="popup_image_prev_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    dots: false,
    arrows: true
});
$('.gallery_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//console.log('beforeChange');
    $('.popup_image_slider').slick('slickGoTo', 0,  true);
});

$('.popup_image_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//console.log('beforeChange child');
    return false;
});



$('.stages_work_slide').mouseenter(function(){
    $('.stages_work_slide_image').removeClass('stages_work_slide_image_active');
    $('.stages_work_slide').css('opacity', 0.5);
    $(this).css('opacity', 1);
    $(this).find('.stages_work_slide_image').addClass('stages_work_slide_image_active');
});
$('.stages_work_slide').mouseleave(function(){
    $('.stages_work_slide_image').removeClass('stages_work_slide_image_active');
    $('.stages_work_slide').css('opacity', 1);
});