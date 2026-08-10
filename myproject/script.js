const characterCanvas = document.getElementById("characterCanvas");

const characterCtx = characterCanvas.getContext("2d");
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

characterCtx.fillStyle = "#ffd0a6";
characterCtx.strokeStyle = "#333";
function drawCharacter(){
characterCtx.lineWidth = 5;
characterCtx.beginPath();
characterCtx.ellipse(300,190,88,105,0,0,Math.PI*2);
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
characterCtx.moveTo(220,135);
characterCtx.quadraticCurveTo(220,90,250,82);
characterCtx.quadraticCurveTo(275,70,300,82);
characterCtx.quadraticCurveTo(325,70,350,82);
characterCtx.quadraticCurveTo(375,90,380,125);
characterCtx.lineTo(365,118);
characterCtx.lineTo(350,128);
characterCtx.lineTo(335,118);
characterCtx.lineTo(320,128);
characterCtx.lineTo(305,118);
characterCtx.lineTo(290,128);
characterCtx.lineTo(275,118);
characterCtx.lineTo(260,128);
characterCtx.lineTo(245,118);
characterCtx.lineTo(235,128);
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
    let currentTool = "pencil";
    pencilBtn.addEventListener("click",function(){
        currentTool = "pencil";
        ctx.globalCompositeOperation = "source-over";

        pencilBtn.classList.add("active");
        brushBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    });
    brushBtn.addEventListener("click",function(){
        currentTool = "brush";
        ctx.globalCompositeOperation = "source-over";

        brushBtn.classList.add("active");
        pencilBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    });
    const eraserBtn = document.getElementById("eraserBtn");
    eraserBtn.addEventListener("click",function(){
        currentTool = "eraser";
        ctx.globalCompositeOperation = "destination-out";

        eraserBtn.classList.add("active");
        pencilBtn.classList.remove("active");
        brushBtn.classList.remove("active");
    });
    const brushSize = document.getElementById("brushSize");
    brushSize.addEventListener("input",function(){
        ctx.lineWidth = Number(brushSize.value);
    });
    let undostack = [];
    let redostack = [];
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

        const finalCtx = finalCanvas.getContext("2d");
        finalCtx.drawImage(characterCanvas, 0,0);
        finalCtx.drawImage(canvas,0,0);
        const image = finalCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my-cartoon-png";
        link.href = image;
        link.click();
    });
    