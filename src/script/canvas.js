import getDistance from './PythagoreanUtil.js';
import getRandomColor from './RandomColor.js';
import getRandomInt from './RandomIntFromRange.js';
import Circle from './Circle.js';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
let c = canvas.getContext('2d'),        
    mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('click', (event) => {
    init();
});

let circle1;
let circle2;

function init() {
    circle1 = new Circle(300,300,1,1,100,100,10,c,'black',mouse);
    circle2 = new Circle(0,0,1,1,30,30,10,c,'red',mouse);
}

export default function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if( getDistance(circle1.x, circle1.y,circle2.x,circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = 'red';
    } else {
        circle1.color = 'black';
    }
}

init();