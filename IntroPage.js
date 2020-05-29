"use strict"


let canvas = document.getElementById("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let Intro = document.getElementById("Ibutton");
let Loading = document.getElementById("LWheel");

Intro.addEventListener('mousedown', function(){
    Intro.classList.add("Clicked");
    Intro.classList.remove("introButton");
})

Intro.addEventListener('mouseup', function(){
    Intro.classList.remove("Clicked");
    Intro.classList.add("introButton");
    setTimeout(function(){
        Loading.classList.remove("hidden");
    }, 500);
    setTimeout(function(){
        window.location.href = "index.html";
    }, Math.random() * 3000 + 3000);
})

function Star(x, y, vx, vy, radius){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.colors = ["#fffcff", "#c637a0", "#1E0253"];
    this.color = this.colors[Math.floor(Math.random() * 3)];

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    this.update = function(){
        this.x += this.vx;
        this.y += this.vy;
    
        if (this.x >= window.innerWidth - this.radius || this.x <= radius){
            this.vx = -this.vx;
        }
        if (this.y >= window.innerHeight - this.radius || this.y <= radius){
            this.vy = -this.vy;
        }
    }
}

let stars = [new Star(100, 100, 1, 1, 10)];
let amount = Math.random() * 50 + 30;
for (let i = 0; i < amount; i++){
    let x = Math.random() * (innerWidth - 100) + 50;
    let y = Math.random() * (innerHeight - 100) + 50;
    let vx = Math.random() * 2 - 1;
    let vy = Math.random() * 2 - 1;
    let radius = Math.random() * 30 + 10;
    let star = new Star(x, y, vx, vy, radius);
    stars.push(star);
}
requestAnimationFrame(moveCircle);

console.log(stars);


function moveCircle(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < amount; i++){
        stars[i].draw();
        stars[i].update();
    }
    requestAnimationFrame(moveCircle);
} 