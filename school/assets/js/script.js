(function(){
$('.show_call').click(function(){
    if($('.show_numbers')[0] == undefined) {
        $('.main_menu_numbers').addClass('show_numbers').fadeIn(400);
    } else {
        $('.main_menu_numbers').removeClass('show_numbers').fadeOut(400);
    }
})
})();
(function(){
    var count = document.querySelector('.advantage_count');
    if(count == undefined) return;
    var length = $('.advantage_slide').length;
    var i = 0;

    count.innerHTML = '<span>1/</span>' + length;
   $('.advantage_right_arrow').click(function(){
      i++;
      if(i === length) i = 0;
      $('.advantage_slide').removeClass('advantage_slide_active');
      $($('.advantage_slide')[i]).addClass('advantage_slide_active');
      var x = i + 1;
      count.innerHTML = '<span>' + x +'/</span>' + length;
   });
   $('.advantage_left_arrow').click(function(){
      i--;
      if(i === -1) i = length - 1;
      $('.advantage_slide').removeClass('advantage_slide_active');
      $($('.advantage_slide')[i]).addClass('advantage_slide_active');
       var x = i + 1;
       count.innerHTML = '<span>' + x +'/</span>' + length;
   });
})();
(function(){
    console.log('here');
    $('.start_block_header').click(function(){
        console.log('here');
        $(this).toggleClass('start_active_header').next().toggleClass('hover_course_wrapper');
    })
})();
(function () {
    $('.article_text_read').click(function (e) {
        $(e.target).css('display', 'none');
        var trHeight = $(e.target).prev().children().css('height');
        $(e.target).prev().animate({
            'height': trHeight
        }, 600);
    });
})();


$('.studies_column_btn').click(function(){
    $('.popup_form').addClass('popup_form_active').animate({
        opacity: 1
    }, 600, function () {
        $('.popup_form').css('display', 'block');
    });
});
$('.popup_form_close').click(function(){
    $('.popup_form').removeClass('popup_form_active').animate({
        opacity: 0
    }, 600, function () {
        $('.popup_form').css('display', 'none');
    });
});




$('.main_menu_tbl_burger').click(function(){
    $('.popup_nav_menu').toggleClass('popup_nav_menu_active');
    $('.main_menu_tbl_burger').toggleClass('main_menu_tbl_burger_active');
    $('.main_menu_tbl_burger_close').toggleClass('main_menu_tbl_burger_close_active');
});