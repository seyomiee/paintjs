const canvas= document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");

canvas.width= 700;
canvas.height= 700;

ctx.strokeStyle="black";

let painting = false;

function stopPainting() {
    painting= false;
}

function onMouseMove(e){
    const x= e.offsetX;
    const y= e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function startPainting(e){
    painting= true;
}

function onMouseUp(e){
    painting= false;
}

function onMouseLeave(e){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}

