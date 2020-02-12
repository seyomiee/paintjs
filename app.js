const canvas= document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");

ctx.strokeStyle="black";

let painting = false;

function stopPainting() {
    painting= false;
}

function onMouseMove(e){
    const x= e.offsetX;
    const y= e.offsetY;
}

function onMouseDown(e){
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
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}

