$(function(){

    
    var num_01 = $(".num_01").attr('value');
    var num_02 = $(".num_02").attr('value');
    var num_03 = $(".num_03").attr('value');
    var num_04 = $(".num_04").attr('value');
    var num_05 = $(".num_05").attr('value');
    var num_06 = $(".num_06").attr('value');
    var num_07 = $(".num_07").attr('value');
    var num_08 = $(".num_08").attr('value');
    var num_09 = $(".num_09").attr('value');
    var num_zero = $(".num_zero").attr('value');

    var btn = $("button");
    var result_num = $(".result_num");
    
    btn.click(function(){
        result_num.text($(this).attr('value'))
    })

    

});