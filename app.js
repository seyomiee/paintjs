const canvas= document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");
const colors= document.getElementsByClassName("jsColor");

canvas.width= 800;
canvas.height= 635;

ctx.strokeStyle="black";

let painting = false;

function stopPainting() {
    painting= false;
}

function onMouseMove(e){
    const x= e.offsetX;
    const y= e.offsetY;
    if(!painting){
        //move mouse, not click
        ctx.beginPath();
        //create path every time moving mouse
        ctx.moveTo(x,y);
    } else{
        //click! painting-> true
        ctx.lineTo(x,y);
        //create painting and stroking
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

function handleColorClick(e){
   const color= e.target.style.backgroundcolor;
   ctx.strokeStyle = color;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}




Array.from(colors).forEach(color=> 
    color.addEventListener("click", handleColorClick)
    //color ㄷㅏ른 이름이어도 괜찮음. array 안의 각 아이템 대표하는 역할
    );