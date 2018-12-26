(function(){
    var sections = $('.layout_main_wrapper');
    var sections_btn = $('.vostock-zapad');
    var stage_btn = $('.unscale_slide .layout_stage_position');
    var stages = $('.unscale_slide img');
    var plan_row = $('.unscale_block .layout_row');
    var plans_row = $('.unscale_block .plans_row');
    var plan_btn = $('.unscale_block .unscale_slide .layout_btn');
    var plans = $('.unscale_block .unscale_slide .plans_wrapper');
    var blocks = $('.section_block');
    var stage_up = $('.unscale_slide .layout_stage_up');
    var stage_down = $('.unscale_slide .layout_stage_down');
    stage_up.click(function(){
        var curent_stage = $('.unscale_slide .layout_stage_position_active');
        var index = stage_btn.index(curent_stage) - 1;
        console.log(index);
        if(index === -1) index = stage_btn.length - 1;
        plan_row = $('.unscale_block .layout_row');
        plans_row = $('.unscale_block .plans_row');
        stage_btn.removeClass('layout_stage_position_active');
        $(stage_btn[index]).addClass('layout_stage_position_active');

        stages.removeClass('unscale_slide');
        $(stages[index]).addClass('unscale_slide');

        plan_row.removeClass('unscale_slide');
        $(plan_row[index]).addClass('unscale_slide');

        plans_row.removeClass('unscale_slide');
        $(plans_row[index]).addClass('unscale_slide');

        plan_btn = $('.unscale_block .unscale_slide .layout_btn');
        plans = $('.unscale_block .unscale_slide .plans_wrapper');
        plan_btn.click(function(){
            var index = plan_btn.index(this);
            plan_btn.removeClass('layout_btn_active');
            $(this).addClass('layout_btn_active');
            plans.removeClass('unscale_slide');
            $(plans[index]).addClass('unscale_slide');
        });
    });
    stage_down.click(function(){
        var curent_stage = $('.unscale_slide .layout_stage_position_active');
        var index = stage_btn.index(curent_stage) + 1;
        console.log(index);
        if(index === stage_btn.length) index = 0;
        plan_row = $('.unscale_block .layout_row');
        plans_row = $('.unscale_block .plans_row');
        stage_btn.removeClass('layout_stage_position_active');
        $(stage_btn[index]).addClass('layout_stage_position_active');

        stages.removeClass('unscale_slide');
        $(stages[index]).addClass('unscale_slide');

        plan_row.removeClass('unscale_slide');
        $(plan_row[index]).addClass('unscale_slide');

        plans_row.removeClass('unscale_slide');
        $(plans_row[index]).addClass('unscale_slide');

        plan_btn = $('.unscale_block .unscale_slide .layout_btn');
        plans = $('.unscale_block .unscale_slide .plans_wrapper');
        plan_btn.click(function(){
            var index = plan_btn.index(this);
            plan_btn.removeClass('layout_btn_active');
            $(this).addClass('layout_btn_active');
            plans.removeClass('unscale_slide');
            $(plans[index]).addClass('unscale_slide');
        });
    });
    stage_btn.click(function(){
        var index = stage_btn.index(this);
        plan_row = $('.unscale_block .layout_row');
        plans_row = $('.unscale_block .plans_row');
        stage_btn.removeClass('layout_stage_position_active');
        $(this).addClass('layout_stage_position_active');

        stages.removeClass('unscale_slide');
        $(stages[index]).addClass('unscale_slide');

        plan_row.removeClass('unscale_slide');
        $(plan_row[index]).addClass('unscale_slide');

        plans_row.removeClass('unscale_slide');
        $(plans_row[index]).addClass('unscale_slide');

        plan_btn = $('.unscale_block .unscale_slide .layout_btn');
        plans = $('.unscale_block .unscale_slide .plans_wrapper');
        plan_btn.click(function(){
            var index = plan_btn.index(this);
            plan_btn.removeClass('layout_btn_active');
            $(this).addClass('layout_btn_active');
            plans.removeClass('unscale_slide');
            $(plans[index]).addClass('unscale_slide');
        });
    });
    plan_btn.click(function(){
        var index = plan_btn.index(this);
        plan_btn.removeClass('layout_btn_active');
        $(this).addClass('layout_btn_active');
        plans.removeClass('unscale_slide');
        $(plans[index]).addClass('unscale_slide');
    });
    sections_btn.click(function(){
       var index = sections_btn.index(this);
       sections.removeClass('unscale_slide');
       blocks.removeClass('unscale_block');
       sections_btn.removeClass('layout_btn_active');
       $(this).addClass('layout_btn_active');
       $(sections[index]).addClass('unscale_slide');
       $(blocks[index]).addClass('unscale_block');
       stage_btn = $('.unscale_slide .layout_stage_position');
       stages = $('.unscale_slide img');
       stage_btn.click(function(){
           var index = stage_btn.index(this);
           plan_row = $('.unscale_block .layout_row');
           plans_row = $('.unscale_block .plans_row');
           stage_btn.removeClass('layout_stage_position_active');
           $(this).addClass('layout_stage_position_active');

           stages.removeClass('unscale_slide');
           $(stages[index]).addClass('unscale_slide');

           plan_row.removeClass('unscale_slide');
           $(plan_row[index]).addClass('unscale_slide');

           plans_row.removeClass('unscale_slide');
           $(plans_row[index]).addClass('unscale_slide');

           plan_btn = $('.unscale_block .unscale_slide .layout_btn');
           plans = $('.unscale_block .unscale_slide .plans_wrapper');
           plan_btn.click(function(){
               var index = plan_btn.index(this);
               plan_btn.removeClass('layout_btn_active');
               $(this).addClass('layout_btn_active');
               plans.removeClass('unscale_slide');
               $(plans[index]).addClass('unscale_slide');
           });
       });
       plan_btn = $('.unscale_block .unscale_slide .layout_btn');
       plans = $('.unscale_block .unscale_slide .plans_wrapper');
       plan_btn.click(function(){
            var index = plan_btn.index(this);
            plan_btn.removeClass('layout_btn_active');
            $(this).addClass('layout_btn_active');
            plans.removeClass('unscale_slide');
            $(plans[index]).addClass('unscale_slide');
        });
        var stage_up = $('.unscale_slide .layout_stage_up');
        var stage_down = $('.unscale_slide .layout_stage_down');
        stage_up.click(function(){
            var curent_stage = $('.unscale_slide .layout_stage_position_active');
            var index = stage_btn.index(curent_stage) - 1;
            console.log(index);
            if(index === -1) index = stage_btn.length - 1;
            plan_row = $('.unscale_block .layout_row');
            plans_row = $('.unscale_block .plans_row');
            stage_btn.removeClass('layout_stage_position_active');
            $(stage_btn[index]).addClass('layout_stage_position_active');

            stages.removeClass('unscale_slide');
            $(stages[index]).addClass('unscale_slide');

            plan_row.removeClass('unscale_slide');
            $(plan_row[index]).addClass('unscale_slide');

            plans_row.removeClass('unscale_slide');
            $(plans_row[index]).addClass('unscale_slide');

            plan_btn = $('.unscale_block .unscale_slide .layout_btn');
            plans = $('.unscale_block .unscale_slide .plans_wrapper');
            plan_btn.click(function(){
                var index = plan_btn.index(this);
                plan_btn.removeClass('layout_btn_active');
                $(this).addClass('layout_btn_active');
                plans.removeClass('unscale_slide');
                $(plans[index]).addClass('unscale_slide');
            });
        });
        stage_down.click(function(){
            var curent_stage = $('.unscale_slide .layout_stage_position_active');
            var index = stage_btn.index(curent_stage) + 1;
            console.log(index);
            if(index === stage_btn.length) index = 0;
            plan_row = $('.unscale_block .layout_row');
            plans_row = $('.unscale_block .plans_row');
            stage_btn.removeClass('layout_stage_position_active');
            $(stage_btn[index]).addClass('layout_stage_position_active');

            stages.removeClass('unscale_slide');
            $(stages[index]).addClass('unscale_slide');

            plan_row.removeClass('unscale_slide');
            $(plan_row[index]).addClass('unscale_slide');

            plans_row.removeClass('unscale_slide');
            $(plans_row[index]).addClass('unscale_slide');

            plan_btn = $('.unscale_block .unscale_slide .layout_btn');
            plans = $('.unscale_block .unscale_slide .plans_wrapper');
            plan_btn.click(function(){
                var index = plan_btn.index(this);
                plan_btn.removeClass('layout_btn_active');
                $(this).addClass('layout_btn_active');
                plans.removeClass('unscale_slide');
                $(plans[index]).addClass('unscale_slide');
            });
        });
    });
})();




$('.nav_header_mob_btn').click(function(){
    $('.call_popup').addClass('call_popup_active').animate({
        opacity: 1
    }, 600, function () {
        $('.call_popup').css('display', 'block');
    });
});
$('.call_popup_close').click(function(){
    $('.call_popup').removeClass('call_popup_active').animate({
        opacity: 0
    }, 600, function () {
        $('.call_popup').css('display', 'none');
    });
});




$('.nav_header_list_btn').click(function(){
    $('.call_popup').addClass('call_popup_active').animate({
        opacity: 1
    }, 600, function () {
        $('.call_popup').css('display', 'block');
    });
});
$('.call_popup_close').click(function(){
    $('.call_popup').removeClass('call_popup_active').animate({
        opacity: 0
    }, 600, function () {
        $('.call_popup').css('display', 'none');
    });
});

$('.call_popup').click(function(event){
    if(event.target === this){
        $(this).animate({
            opacity: 0
        }, 600, function () {
            $('.call_popup').css('display', 'none');
        });
        setTimeout(function(){
            $('.call_popup').removeClass('call_popup_active');
        }, 600, function () {
            $('.call_popup').css('display', 'block');
        });
    };
});







$('.nav_header_mob_burger').click(function(){
    $('.mob_nav_menu_list').addClass('mob_nav_menu_list_active').animate({
        opacity: 1
    }, 600, function () {
        $('.mob_nav_menu_list').css('display', 'block');
    });
});
$('.mob_nav_menu_list_close').click(function(){
    $('.mob_nav_menu_list').removeClass('mob_nav_menu_list_active').animate({
        opacity: 0
    }, 600, function () {
        $('.mob_nav_menu_list').css('display', 'none');
    });
});

$('.mob_nav_menu_list').click(function(event){
    if(event.target === this){
        $(this).animate({
            opacity: 0
        }, 600, function () {
            $('.mob_nav_menu_list').css('display', 'none');
        });
        setTimeout(function(){
            $('.mob_nav_menu_list').removeClass('mob_nav_menu_list_active');
        }, 600, function () {
            $('.mob_nav_menu_list').css('display', 'block');
        });
    };
});



$(document).ready(function(){
    $(".nav_header_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




$(document).ready(function(){
    $(".footer_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});





$('.mob_price_title_block').click(function(){
    $('.mob_price_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('mob_price_title_open')){
        $(this).removeClass('mob_price_title_open');
        return;
    };
    $('.mob_price_title_block').removeClass('mob_price_title_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 600);
    $(this).addClass('mob_price_title_open');
});




$('.main_sub_block_dark').slick({
    infinite: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});