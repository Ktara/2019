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