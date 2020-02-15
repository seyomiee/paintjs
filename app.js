const canvas= document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");
const colors= document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode= document.getElementById("jsMode");

const INITIAL_COLOR= "#2c2c2c";

canvas.width= 800;
canvas.height= 635;

ctx.fillStyle="white";
ctx.strokeStye="INITIAL_COLOR";
ctx.fillStyle="INITIAL_COLOR";
ctx.lineWidth=2.5;

let painting = false;
let filling = false;

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
   const color= e.target.style.backgroundColor;
   ctx.strokeStyle = color;
   ctx.fillStyle =color;
}

function handleRange(e){
    const size= e.target.value;
    ctx.lineWidth = size;
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
}

function handleModeClick(){
    if(filling ===true){
        filling = false;
        mode.innerText="Fill";
    }else{
        filling=true;
        mode.innerText="Paint";
    }
}


Array.from(colors).forEach(color=> 
    color.addEventListener("click", handleColorClick)
    //color ㄷㅏ른 이름이어도 괜찮음. array 안의 각 아이템 대표하는 역할
    );


if(range){
    range.addEventListener('change', handleRange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}