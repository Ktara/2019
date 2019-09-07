$('.login_form_btn').click(function(event){
    event.preventDefault();
    var login = $('.login_form_input1').val();
    var password = $('.login_form_input2').val();
    if (login.length < 1) {
        $('.login_form_input1_span').html('Please enter');
        $('.login_form_input1_span').parent().addClass('input_active');
    };
    if (password.length < 1) {
        $('.login_form_input2_span').html('Please enter');
        $('.login_form_input2_span').parent().addClass('input_active');
    };
    if (login.length > 1  && password.length > 1) {
        $('.login_form_input1_span').html('Login/Password not recognized');
        $('.login_form_input1_span').parent().addClass('input_active');
    };
});
$('.login_form_input1').on('input',function(){
    $(this).parent().removeClass('input_active');
});
$('.login_form_input2').on('input',function(){
    $(this).parent().removeClass('input_active');
});