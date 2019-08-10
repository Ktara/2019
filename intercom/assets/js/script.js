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
    centerPadding: '20px',
    // focusOnSelect: true,
    slidesToShow: 2,
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



// $(document).ready(function(){
//     var menuItemNum=$(".main_media_item").length;
//     var angle=120;
//     var distance=90;
//     var startingAngle=180+(-angle/2);
//     var slice=angle/(menuItemNum-1);
//     TweenMax.globalTimeScale(0.8);
//     $(".main_media_item").each(function(i){
//         var angle=startingAngle+(slice*i);
//         $(this).css({
//             transform:"rotate("+(angle)+"deg)"
//         })
//         $(this).find(".menu-item-icon").css({
//             transform:"rotate("+(-angle)+"deg)"
//         })
//     })
//     var on=false;
//
//     $(".menu-toggle-button").mousedown(function(){
//         TweenMax.to($(".menu-toggle-icon"),0.1,{
//             scale:0.65
//         })
//     })
//     $(document).mouseup(function(){
//         TweenMax.to($(".menu-toggle-icon"),0.1,{
//             scale:1
//         })
//     });
//     $(document).on("touchend",function(){
//         $(document).trigger("mouseup")
//     })
//     $(".menu-toggle-button").on("mousedown",pressHandler);
//     $(".menu-toggle-button").on("touchstart",function(event){
//         $(this).trigger("mousedown");
//         event.preventDefault();
//         event.stopPropagation();
//     });
//
//     function pressHandler(event){
//         on=!on;
//
//         TweenMax.to($(this).children('.menu-toggle-icon'),0.4,{
//             rotation:on?45:0,
//             ease:Quint.easeInOut,
//             force3D:true
//         });
//
//         on?openMenu():closeMenu();
//
//     }
//     function openMenu(){
//         $(".main_media_item").each(function(i){
//             var delay=i*0.08;
//
//             var $bounce=$(this).children(".menu-item-bounce");
//
//             TweenMax.fromTo($bounce,0.2,{
//                 transformOrigin:"50% 50%"
//             },{
//                 delay:delay,
//                 scaleX:0.8,
//                 scaleY:1.2,
//                 force3D:true,
//                 ease:Quad.easeInOut,
//                 onComplete:function(){
//                     TweenMax.to($bounce,0.15,{
//                         // scaleX:1.2,
//                         scaleY:0.7,
//                         force3D:true,
//                         ease:Quad.easeInOut,
//                         onComplete:function(){
//                             TweenMax.to($bounce,3,{
//                                 // scaleX:1,
//                                 scaleY:0.8,
//                                 force3D:true,
//                                 ease:Elastic.easeOut,
//                                 easeParams:[1.1,0.12]
//                             })
//                         }
//                     })
//                 }
//             });
//
//             TweenMax.to($(this).children(".menu-item-button"),0.5,{
//                 delay:delay,
//                 y:distance,
//                 force3D:true,
//                 ease:Quint.easeInOut
//             });
//         })
//     }
//     function closeMenu(){
//         $(".main_media_item").each(function(i){
//             var delay=i*0.08;
//
//             var $bounce=$(this).children(".menu-item-bounce");
//
//             TweenMax.fromTo($bounce,0.2,{
//                 transformOrigin:"50% 50%"
//             },{
//                 delay:delay,
//                 scaleX:1,
//                 scaleY:0.8,
//                 force3D:true,
//                 ease:Quad.easeInOut,
//                 onComplete:function(){
//                     TweenMax.to($bounce,0.15,{
//                         // scaleX:1.2,
//                         scaleY:1.2,
//                         force3D:true,
//                         ease:Quad.easeInOut,
//                         onComplete:function(){
//                             TweenMax.to($bounce,3,{
//                                 // scaleX:1,
//                                 scaleY:1,
//                                 force3D:true,
//                                 ease:Elastic.easeOut,
//                                 easeParams:[1.1,0.12]
//                             })
//                         }
//                     })
//                 }
//             });
//
//
//             TweenMax.to($(this).children(".menu-item-button"),0.3,{
//                 delay:delay,
//                 y:0,
//                 force3D:true,
//                 ease:Quint.easeIn
//             });
//         })
//     }
// })