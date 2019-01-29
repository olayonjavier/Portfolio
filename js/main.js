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


//$('.canvas-button').top(canvas.height/2);

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
    'pink',
    'purple',
    'red'
]


var c = canvas.getContext('2d');

function randomIntFromRange(min, max){
    return Math.floor(Math.random() * ( max - min +1) + min);
}

function randomColor(colors){
    return colors[Math.floor(Math.random() * colors.length)];
}

function Particle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(125, 200);

    this.update = () => {
        const lastPoint = {x: this.x, y: this.y};
        
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
        text();
    }

    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }
}


let particles;
function init(){
    particles = [];
    
    for(let i = 0; i < 100; i++){
        const radius = (Math.random() * 2) + 1;
        particles.push(new Particle(canvas.width /2, canvas.height / 2, radius, randomColor(colors)));
    }
}


function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(37, 41, 52, 0.05)'; // = #252934 
    c.fillRect(0, 0, innerWidth, innerHeight);

    particles.forEach(particle => {
        particle.update();
    })    
}

function text(){
    c.font = "25pt Raleway";
    c.fillStyle = "pink";
    c.textAlign = "center";
    c.fillText("Javier Olayon", canvas.width / 2, canvas.height / 2);
}

init();
animate();
