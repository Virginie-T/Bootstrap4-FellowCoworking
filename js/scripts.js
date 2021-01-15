$(function () {

    $("#top-button").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    })

    $('[data-toggle="tooltip"]').tooltip()

});