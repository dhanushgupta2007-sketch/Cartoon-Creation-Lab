const characterCanvas = document.getElementById("characterCanvas");

const characterCtx = characterCanvas.getContext("2d");
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

characterCtx.fillStyle = "#ffd0a6";
characterCtx.strokeStyle = "#333";
characterCtx.LineWidth = 5;
characterCtx.beginPath();
characterCtx.ellipse(300,180,100,120,0,0,Math.PI *2);
characterCtx.fill();
characterCtx.stroke();

characterCtx.fillStyle = "#7ec8ff";
characterCtx.beginPath();
characterCtx.roundRect(210,290,180,180,180,35);
characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(215,315);
characterCtx.lineTo(130, 420);
characterCtx.lineTo(155,440);
characterCtx.closePath();

characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(385, 315);
characterCtx.lineTo(470, 420);
characterCtx.lineTo(445,440);
characterCtx.lineTo(360,350);
characterCtx.closePath();

characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.roundRect(230,460,55,105,20);
characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.roundRect(315,460,55,105,20);
characterCtx.fill();
characterCtx.stroke();

characterCtx.fillStyle = "#333";

characterCtx.beginPath();
characterCtx.arc(335,170,10,0,Math.PI*2);
characterCtx.fill();

characterCtx.beginPath();
characterCtx.arc(265,170,10,0,Math.PI*2);
characterCtx.fill();

characterCtx.beginPath();
characterCtx.arc(300,205,35,0,Math.PI);
characterCtx.stroke();

let drawing = false;
canvas.addEventListener("mousedown",function(event){
    drawing = true;
    ctx.beginPath();

    ctx.moveTo(
        event.offsetX,
        event.offsetY
    );
});
canvas.addEventListener("mousemove",function(event) {
    if(!drawing){
        return;
    }
    ctx.lineTo(
        event.offsetX,
        event.offsetY
    );
    ctx.stroke();
});
    canvas.addEventListener("mouseup",function(){
        drawing = false;
    });
    canvas.addEventListener("mouseleave",function(){
        drawing = false;
    });
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("input",function(){
        ctx.strokeStyle = colorPicker.value;
    });
    const pencilBtn = document.getElementById("pencilBtn");
    const brushBtn = document.getElementById("brushBtn");

    pencilBtn.addEventListener("click",function(){
        ctx.globalCompositionOperation = "source-over";
        ctx.lineWidth = 4;
    });
    brushBtn.addEventListener("click",function(){
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = 14;
    });
    const eraserBtn = document.getElementById("eraserBtn");
    eraserBtn.addEventListener("click",function(){
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 25;
    });
    let undostack = [];
    const undoBtn = document.getElementById("undoBtn");
    const clearBtn