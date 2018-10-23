$(document).ready(function(){
    $('.header').height($(window).height());


    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        }, 1000)
    })

    $(".navbar").hide();

    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > $(window).height()){
                $('.navbar').fadeIn();
            }
            else{
                $('.navbar').fadeOut();
            }
        })
    })
})