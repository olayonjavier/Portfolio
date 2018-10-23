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

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var x = 200;
var y= 200;

var dx = 1;
function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.stroke();

    x += dx;
}

animate();