const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
    canvas.height = window.innerHeight
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
//     ctx.fillstyle = "white";
// ctx.fillRect(20,20,630,30);
})
// ctx.fillstyle = "white";
// ctx.fillRect(20,20,630,30);
// ctx.strokeStyle = "red"
let hue = 0;
let pp = 0;
let particlesArray = [];
let k = [];
const mouse = {
    x : undefined,
    y : undefined
}
canvas.addEventListener("mousedown",function(event){
     mouse.x = event.x;
     mouse.y = event.y;
     mouse.pressed = true;
     for(let i = 0; i<5; i++){
     particlesArray.push(new Particle());
    //  let a1 = Math.round(Math.random()*255)
    //  let a2 = Math.round(Math.random()*255)
    //  let a3 = Math.round(Math.random()*255)
    //  pp ++;
    //   k[pp] = `rgb(${a1},${a2},${a3})`
     }
})

canvas.addEventListener("mouseup",function(event){
mouse.pressed = false;
});

canvas.addEventListener("mousemove",(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    if(mouse.pressed){
    for(let i = 0; i<2; i++){
        particlesArray.push(new Particle());
        // k[pp] = `hsl(${hue},100%,50%)`
       
        }
    }
   })

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size = Math.round(Math.random()*15+1)
        this.speedX = Math.random()*3-1.5;
        this.speedY = Math.random()*3-1.5;
        // this.color = `hsl(${hue},100%,50%)`
        this.color = 'red'
    }
    update(){
        // this.x+=this.speedX;
        // this.y+=this.speedY;
        // if(this.size>0.1) this.size-=0.5
 
        if(this.speedX<0 && this.speedY>0 && this.x<canvas.width/2 && this.y>canvas.height/2){
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.size>0.1) this.size-=0.1
          
        }
        else if(this.speedX<0 && this.speedY<0 && this.x<canvas.width/2 && this.y<canvas.height/2){
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.size>0.1) this.size-=0.1
            
        }
        else if(this.speedX>0 && this.speedY<0 && this.x>canvas.width/2 && this.y<canvas.height/2){
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.size>0.1) this.size-=0.1
     
        }
        else if(this.speedX>0 && this.speedY>0 && this.x>canvas.width/2 && this.y>canvas.height/2){
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.size>0.1) this.size-=0.1
            
        }
        else {
              this.size = 0;
           
        }
        

    }
    draw(){
        // ctx.fillStyle = "white";
        // ctx.fillStyle = `hsl(${hue},100%,50%)`
        ctx.fillStyle = this.color
    
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill();
    }
}
// function init(){
//     for(let i = 0; i<1; i++){
//         particlesArray.push(new Particle());
//     }
// }
// init();
function handlesParticles(){
    for(let i = 0; i<particlesArray.length; i++){
        
        particlesArray[i].draw();
        particlesArray[i].update();
       
        for(let j = i; j<particlesArray.length;j++){
          const dx = particlesArray[i].x-particlesArray[j].x;
          const dy = particlesArray[i].y-particlesArray[j].y;
          let distance = Math.sqrt(dx*dx+dy*dy);
          if(distance<120){
            ctx.beginPath();
            // ctx.strokeStyle = particlesArray[i].color;
            ctx.strokeStyle = 'purple';
            // ctx.lineWidth = Math.round(Math.random()*15+1)/10
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[i].x,particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x,particlesArray[j].y)
            ctx.stroke();
          }
        }
        if(particlesArray[i].size<=0.3){
            particlesArray.splice(i,1)
            i--;
        }
    }
}




let aaa = 0;
function line(){
    let x = aaa;
    let y = x+2;
    mouse.x = x
    mouse.y = y;
    for(let ee=0; ee<1; ee++){
    particlesArray.push(new Particle());
    }
    aaa++;
}
// setInterval(()=>{
//  line();   
// },12)

let t = 0
function heart(){
    let x = (16*(Math.sin(t)*Math.sin(t)*Math.sin(t))*canvas.width/50)+canvas.width/2;
    let y = -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))*canvas.height/50+canvas.height/2;
    mouse.x = x
    mouse.y = y;
    for(let ee=0; ee<10; ee++){
    particlesArray.push(new Particle());
    }
        t+=0.08;
   
}
// setInterval(()=>{
//     heart();
// },1)

let t1 = 0
function heart1(){
    let x = Math.round((16*(Math.sin(t1)*Math.sin(t1)*Math.sin(t1))*canvas.width/80)+canvas.width/2);
    let y = -(13*Math.cos(t1) - 5*Math.cos(2*t1) - 2*Math.cos(3*t1) - Math.cos(4*t1))*canvas.height/80+canvas.height/2;
    mouse.x = x
    mouse.y = y;
    for(let ee=0; ee<2; ee++){
    particlesArray.push(new Particle());
    }
        t1+=0.1;
}

let t2 = 0
function heart2(){
    let x = (16*(Math.sin(t2)*Math.sin(t2)*Math.sin(t2))*canvas.width/150)+canvas.width/2;
    let y = -(13*Math.cos(t2) - 5*Math.cos(2*t2) - 2*Math.cos(3*t2) - Math.cos(4*t2))*canvas.height/150+canvas.height/2;
    mouse.x = x
    mouse.y = y;
    for(let ee=0; ee<2; ee++){
    particlesArray.push(new Particle());
    }
        t2+=0.1;
}


let animate = ()=>{
//   ctx.clearRect(0,0,canvas.width,canvas.height);
   heart();
//    heart1();
//    heart2();
// line();
//   drawcircle();
ctx.fillStyle = "rgba(255,0,255,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)
handlesParticles();
hue+=5;
if(hue==360){hue=0}
  requestAnimationFrame(animate);
}
animate();
