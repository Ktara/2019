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