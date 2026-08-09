const characterCanvas = document.getElementById("characterCanvas");

const characterCtx = characterCanvas.getContext("2d");
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

characterCtx.fillStyle = "#ffd0a6";
characterCtx.strokeStyle = "#333";
function drawCharacter(){
characterCtx.LineWidth = 5;
characterCtx.beginPath();
characterCtx.ellipse(300,190,88,105,0,0,Math.PI *2);
characterCtx.fill();
characterCtx.stroke();

characterCtx.fillStyle = "#39b5e8";
characterCtx.beginPath();
characterCtx.moveTo(225,295);
characterCtx.quadraticCurveTo(300,275,375,295);
characterCtx.lineTo(385,430);
characterCtx.quadraticCurveTo(300,465,215,430);
characterCtx.closePath();
characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(225,315);
characterCtx.quadraticCurveTo(195,345,165,385);
characterCtx.lineTo(145, 415);
characterCtx.lineTo(160,425);
characterCtx.quadraticCurveTo(195,385,235,345);
characterCtx.closePath();

characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(375, 315);
characterCtx.quadraticCurveTo(405,345,435,385);
characterCtx.lineTo(455, 415);
characterCtx.lineTo(440,425);
characterCtx.quadraticCurveTo(405,385,365,345);
characterCtx.closePath();

characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(240,455);
characterCtx.lineTo(230,550);
characterCtx.quadraticCurveTo(230,570,248,570);
characterCtx.lineTo(267,570);
characterCtx.quadraticCurveTo(280,570,280,550);
characterCtx.lineTo(280,475);
characterCtx.quadraticCurveTo(280,455,265,455);
characterCtx.closePath();

characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(335,455);
characterCtx.quadraticCurveTo(320,455,320,470);
characterCtx.lineTo(320,550);
characterCtx.quadraticCurveTo(320,565,335,565);
characterCtx.lineTo(352,570);
characterCtx.quadraticCurveTo(370,565,370,550);
characterCtx.lineTo(370,470);
characterCtx.quadraticCurveTo(370,455,355,455);
characterCtx.closePath();
characterCtx.fill();
characterCtx.stroke();

characterCtx.fillStyle = "#333";

characterCtx.beginPath();
characterCtx.ellipse(265,175,6,8,0,0,Math.PI*2);
characterCtx.fill();

characterCtx.beginPath();
characterCtx.ellipse(335,175,6,8,0,0,Math.PI*2);
characterCtx.fill();

characterCtx.beginPath();
characterCtx.moveTo(275,220);
characterCtx.quadraticCurveTo(300,238,325,220);
characterCtx.stroke();

characterCtx.fillStyle = "#333";
characterCtx.beginPath();
characterCtx.arc(300,115,88,0,Math.PI);
characterCtx.fill();
characterCtx.stroke();

characterCtx.beginPath();
characterCtx.moveTo(225,145);
characterCtx.quadraticCurveTo(230,105,300,102);
characterCtx.quadraticCurveTo(370,105,375,145);
characterCtx.lineTo(360,135);
characterCtx.lineTo(345,150);
characterCtx.lineTo(330,135);
characterCtx.lineTo(315,150);
characterCtx.lineTo(300,135);
characterCtx.lineTo(285,150);
characterCtx.lineTo(270,135);
characterCtx.lineTo(255,150);
characterCtx.lineTo(240,135)
characterCtx.closePath();
characterCtx.fill();
characterCtx.stroke();
}
drawCharacter();
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
    const clearBtn = document.getElementById("clearBtn");
    const redoBtn = document.getElementById("redoBtn");
    canvas.addEventListener("mousedown",function(){
        undostack.push(ctx.getImageData(0,0,canvas.width,canvas.height));
        redostack = [];
    });
    undoBtn.addEventListener("click",function(){
        if(undostack.length>0){
            redostack.push(
                ctx.getImageData(0,0,canvas.width,canvas.height)
            );
            const previousState = undostack.pop();
            ctx.putImageData(previousState,0,0);
        }
    });
    clearBtn.addEventListener("click",function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        undostack = [];
        redostack = [];
    });
    redoBtn.addEventListener("click",function(){
        if(redostack.length>0){
            undostack.push(
                ctx.getImageData(0,0,canvas.width,canvas.height)
            );
            const nextState = redostack.pop();
            ctx.putImageData(nextState,0,0);
        }
    });
    const saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click",function(){
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = characterCanvas.width;
        finalCanvas.height = characterCanvas.height;

        const finalCtx = finalCtx = finalCanvas.getContext("2d");
        finalCtx.drawImage(characterCanvas, 0,0);
        finalCtx.drawImage(canvas,0,0);
        const image = finalCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my-cartoon-png";
        link.href = image;
        link.click();
    });
    