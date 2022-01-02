var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function createLine(sx,sy,ex,ey,width, delay = 0){
    setTimeout(function() {
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
    }, delay);
}
function createBox(x,y,width,height,delay){
    setTimeout(function(){
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(x,y,width,height);
        ctx.stroke()
    },delay);
}


let ps1, ps2, pe1, pe2;
ps1 = ps2 = pe1 = pe2 = 0;

function animation(){
    //ctx.clearRect(0, 0, 1000, 1000);
    ps1 += 1;
    ps2 += 1;
    pe1 += 1;
    pe2 += 1;
    const sides = 1000;
    const radius = 100;
    const angle = (ps1 / sides) * 2 * Math.PI;
    const x = ps1 + radius * Math.cos(angle);
    const y = ps1 + radius * Math.sin(angle);
    createLine(ps1,ps2, pe1, x*2,1 );
    console.log('1')
    // ctx.restore();
    setTimeout(function(){
    window.requestAnimationFrame(animation);
    },10)
}

window.requestAnimationFrame(animation);