(function(){
    var sections = $('.layout_main_wrapper');
    var sections_btn = $('.vostock-zapad');
    var stage_btn = $('.unscale_slide .layout_stage_position');
    var stages = $('.unscale_slide img');
    stage_btn.click(function(){
        var index = stage_btn.index(this);
        stage_btn.removeClass('layout_stage_position_active');
        $(this).addClass('layout_stage_position_active');
        stages.removeClass('unscale_slide');
        $(stages[index]).addClass('unscale_slide');
    });
    sections_btn.click(function(){
       var index = sections_btn.index(this);
       sections.removeClass('unscale_slide');
       sections_btn.removeClass('layout_btn_active');
       $(this).addClass('layout_btn_active');
       $(sections[index]).addClass('unscale_slide');
       stage_btn = $('.unscale_slide .layout_stage_position');
       stages = $('.unscale_slide img');
       stage_btn.click(function(){
           var index = stage_btn.index(this);
           stage_btn.removeClass('layout_stage_position_active');
           $(this).addClass('layout_stage_position_active');
           stages.removeClass('unscale_slide');
           $(stages[index]).addClass('unscale_slide');
       });
    });
})();