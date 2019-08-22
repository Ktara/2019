$('.nav_header_langs_plus').click(function(){
    $('.nav_header_langs').toggleClass('nav_header_langs_open');
    $('.nav_header_langs_plus').toggleClass('nav_header_langs_plus_open');
});


$('.details_btn').click(function(){
    $('.popup_details').toggleClass('popup_details_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_details').removeClass('popup_details_active');
    })
});




$('.consultation_btn').click(function(){
    $('.popup_consultation').toggleClass('popup_consultation_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_consultation').removeClass('popup_consultation_active');
    })
});




$('.price_btn').click(function(){
    $('.popup_price').toggleClass('popup_price_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_price').removeClass('popup_price_active');
    })
});




$('.want_btn').click(function(){
    $('.popup_want').toggleClass('popup_want_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_want').removeClass('popup_want_active');
    })
});


$('.image_in_popup').click(function(event){
    var image_src = event.target.src;
    console.log(event.target.src);
    $('.picture_popup').find('img').attr('src', image_src);
    $('.picture_popup').addClass('picture_popup_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.picture_popup').removeClass('picture_popup_active');
    })
});




$('.partner_btn').click(function(){
    $('.popup_partner').toggleClass('popup_partner_active');
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_partner').removeClass('popup_partner_active');
    })
});


$('.popup_image_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="popup_image_next_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    prevArrow: '<div class="popup_image_prev_arrow"><img src="assets/img/icon/arrow-right.svg" alt=""></div>',
    dots: false,
    arrows: true
});

$('.popup_btn').click(function(event){
    $('.popup_image').addClass('popup_image_active');
    var target = $(event.currentTarget)[0].dataset.slickIndex;
    $('.popup_image_slider').slick('slickGoTo', target,  true);
    $('.nav_header_burger').addClass('nav_popup_burger_close');
    $('.nav_popup_burger_close').click(function (event) {
        $('.popup_image').removeClass('popup_image_active');
    })
});

$('.gallery_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
console.log(currentSlide);

});

$('.nav_header_burger').click(function(){
    if ($('.nav_header_burger').hasClass('nav_popup_burger_close')) {
        $('.nav_header_burger').removeClass('nav_popup_burger_close');
    } else {
        $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
        $('.nav_header_burger').toggleClass('nav_header_burger_close');
    }
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
    let status = $(event.target).parent().parent().hasClass('main_elements_open');
    $('.main_elements_box_wrapper').removeClass('main_elements_open');
    $('.main_elements_box_more').removeClass('more_open');
    if (!status) {
        $(event.target).parent().parent().addClass('main_elements_open');
        $(event.target).addClass('more_open');
    };
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
    arrows: false,
    dots: false,
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
            breakpoint: 780,
            settings: {
                dots: false,
                arrows: true,
                nextArrow: '<div class="gallery_next_arrow">Дальше</div>',
                prevArrow: '<div class="gallery_prev_arrow">Назад</div>'
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
    arrows: true,
    nextArrow: '<div class="gallery_next_arrow">Дальше</div>',
    prevArrow: '<div class="gallery_prev_arrow">Назад</div>',
    infinite: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                centerPadding: '0%',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                arrows: false
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





var stages_status = true;
$('.stages_work_slide').click(function(event){
    if (stages_status){
        $(event.currentTarget).find('.stages_work_slide_image').toggleClass('stages_work_slide_image_active');
    };
    stages_status = true;
});
$('.stages_work_slide').mouseenter(function(){
    stages_status = false;
    $('.stages_work_slide_image').removeClass('stages_work_slide_image_active');
    $('.stages_work_slide').css('opacity', 0.5);
    $(this).css('opacity', 1);
    $(this).find('.stages_work_slide_image').addClass('stages_work_slide_image_active');
});
$('.stages_work_slide').mouseleave(function(){
    $('.stages_work_slide_image').removeClass('stages_work_slide_image_active');
    $('.stages_work_slide').css('opacity', 1);
});




$('.reviews_main_block_btn').click(function (event) {
    var target = $(event.currentTarget);
    target.parent().addClass('reviews_main_block_image_close');
    target.parent().next().addClass('reviews_main_block_blank_open');
    $('.reviews_main_block_blank_more').click(function (event) {
        var target = $(event.currentTarget);
        target.parent().prev().removeClass('reviews_main_block_image_close');
        target.parent().removeClass('reviews_main_block_blank_open');
    })
});