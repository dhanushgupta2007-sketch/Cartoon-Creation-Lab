
const characterCanvas =
    document.getElementById("characterCanvas");

const characterCtx =
    characterCanvas.getContext("2d");

const canvas =
    document.getElementById("artCanvas");

const ctx =
    canvas.getContext("2d");


ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#ff6b6b";
ctx.lineWidth = 4;


function drawCharacter() {

    characterCtx.clearRect(
        0,
        0,
        characterCanvas.width,
        characterCanvas.height
    );

    characterCtx.lineWidth = 5;
    characterCtx.strokeStyle = "#333";


    characterCtx.fillStyle = "#ffd0a6";

    characterCtx.beginPath();

    characterCtx.ellipse(
        300,
        190,
        88,
        105,
        0,
        0,
        Math.PI * 2
    );

    characterCtx.fill();
    characterCtx.stroke();



    characterCtx.fillStyle = "#39b5e8";

    characterCtx.beginPath();

    characterCtx.moveTo(225, 295);

    characterCtx.quadraticCurveTo(
        300,
        275,
        375,
        295
    );

    characterCtx.lineTo(385, 430);

    characterCtx.quadraticCurveTo(
        300,
        465,
        215,
        430
    );

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();


    characterCtx.beginPath();

    characterCtx.moveTo(225, 315);

    characterCtx.quadraticCurveTo(
        195,
        345,
        165,
        385
    );

    characterCtx.lineTo(145, 415);

    characterCtx.lineTo(160, 425);

    characterCtx.quadraticCurveTo(
        195,
        385,
        235,
        345
    );

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();

    characterCtx.beginPath();

    characterCtx.moveTo(375, 315);

    characterCtx.quadraticCurveTo(
        405,
        345,
        435,
        385
    );

    characterCtx.lineTo(455, 415);

    characterCtx.lineTo(440, 425);

    characterCtx.quadraticCurveTo(
        405,
        385,
        365,
        345
    );

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();



    characterCtx.beginPath();

    characterCtx.moveTo(240, 455);

    characterCtx.lineTo(230, 550);

    characterCtx.quadraticCurveTo(
        230,
        570,
        248,
        570
    );

    characterCtx.lineTo(267, 570);

    characterCtx.quadraticCurveTo(
        280,
        570,
        280,
        550
    );

    characterCtx.lineTo(280, 475);

    characterCtx.quadraticCurveTo(
        280,
        455,
        265,
        455
    );

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();


    characterCtx.beginPath();

    characterCtx.moveTo(335, 455);

    characterCtx.quadraticCurveTo(
        320,
        455,
        320,
        470
    );

    characterCtx.lineTo(320, 550);

    characterCtx.quadraticCurveTo(
        320,
        565,
        335,
        565
    );

    characterCtx.lineTo(352, 570);

    characterCtx.quadraticCurveTo(
        370,
        565,
        370,
        550
    );

    characterCtx.lineTo(370, 470);

    characterCtx.quadraticCurveTo(
        370,
        455,
        355,
        455
    );

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();


    characterCtx.fillStyle = "#333";



    characterCtx.beginPath();

    characterCtx.ellipse(
        265,
        175,
        6,
        8,
        0,
        0,
        Math.PI * 2
    );

    characterCtx.fill();


    characterCtx.beginPath();

    characterCtx.ellipse(
        335,
        175,
        6,
        8,
        0,
        0,
        Math.PI * 2
    );

    characterCtx.fill();


    characterCtx.beginPath();

    characterCtx.moveTo(275, 220);

    characterCtx.quadraticCurveTo(
        300,
        238,
        325,
        220
    );

    characterCtx.stroke();


    characterCtx.fillStyle = "#333";

    characterCtx.beginPath();

    characterCtx.moveTo(220, 135);

    characterCtx.quadraticCurveTo(
        220,
        90,
        250,
        82
    );

    characterCtx.quadraticCurveTo(
        275,
        70,
        300,
        82
    );

    characterCtx.quadraticCurveTo(
        325,
        70,
        350,
        82
    );

    characterCtx.quadraticCurveTo(
        375,
        90,
        380,
        125
    );

    characterCtx.lineTo(365, 118);
    characterCtx.lineTo(350, 128);
    characterCtx.lineTo(335, 118);
    characterCtx.lineTo(320, 128);
    characterCtx.lineTo(305, 118);
    characterCtx.lineTo(290, 128);
    characterCtx.lineTo(275, 118);
    characterCtx.lineTo(260, 128);
    characterCtx.lineTo(245, 118);
    characterCtx.lineTo(235, 128);

    characterCtx.closePath();

    characterCtx.fill();
    characterCtx.stroke();
}




drawCharacter();




let drawing = false;

let currentTool = "pencil";

let undoStack = [];
let redoStack = [];




const pencilBtn =
    document.getElementById("pencilBtn");

const brushBtn =
    document.getElementById("brushBtn");

const eraserBtn =
    document.getElementById("eraserBtn");

const brushSize =
    document.getElementById("brushSize");

const colorPicker =
    document.getElementById("colorPicker");




function setActiveTool(button) {

    pencilBtn.classList.remove("active");

    brushBtn.classList.remove("active");

    eraserBtn.classList.remove("active");

    button.classList.add("active");
}




setActiveTool(pencilBtn);




pencilBtn.addEventListener(
    "click",
    function () {

        currentTool = "pencil";

        ctx.globalCompositeOperation =
            "source-over";

        ctx.lineWidth = 4;

        ctx.strokeStyle =
            colorPicker.value;

        setActiveTool(pencilBtn);
    }
);



brushBtn.addEventListener(
    "click",
    function () {

        currentTool = "brush";

        ctx.globalCompositeOperation =
            "source-over";

        ctx.lineWidth =
            Number(brushSize.value);

        ctx.strokeStyle =
            colorPicker.value;

        setActiveTool(brushBtn);
    }
);




eraserBtn.addEventListener(
    "click",
    function () {

        currentTool = "eraser";

        ctx.globalCompositeOperation =
            "destination-out";

        ctx.lineWidth = 25;

        setActiveTool(eraserBtn);
    }
);




brushSize.addEventListener(
    "input",
    function () {

        if (currentTool === "brush") {

            ctx.lineWidth =
                Number(brushSize.value);
        }
    }
);




colorPicker.addEventListener(
    "input",
    function () {

        if (currentTool !== "eraser") {

            ctx.strokeStyle =
                colorPicker.value;
        }
    }
);



canvas.addEventListener(
    "pointerdown",
    function (event) {

        drawing = true;


      

        undoStack.push(
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            )
        );


       

        redoStack = [];


        ctx.beginPath();

        ctx.moveTo(event.offsetX,event.offsetY);
    }
);




canvas.addEventListener(
    "pointermove",
    function (event) {

        if (!drawing) {
            return;
        }

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
);



canvas.addEventListener(
    "pointerup",
    function () {

        drawing = false;

        ctx.beginPath();
    }
);


canvas.addEventListener(
    "pointerleave",
    function () {

        drawing = false;

        ctx.beginPath();
    }
);



const undoBtn =
    document.getElementById("undoBtn");


undoBtn.addEventListener(
    "click",
    function () {

        if (undoStack.length === 0) {
            return;
        }


        

        redoStack.push(
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            )
        );


        const previousState =
            undoStack.pop();


        ctx.putImageData(
            previousState,
            0,
            0
        );
    }
);




const clearBtn =
    document.getElementById("clearBtn");


clearBtn.addEventListener(
    "click",
    function () {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        undoStack = [];

        redoStack = [];
    }
);




const redoBtn =
    document.getElementById("redoBtn");


redoBtn.addEventListener(
    "click",
    function () {

        if (redoStack.length === 0) {
            return;
        }



        undoStack.push(
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            )
        );


        const nextState =
            redoStack.pop();


        ctx.putImageData(
            nextState,
            0,
            0
        );
    }
);


const saveBtn =
    document.getElementById("saveBtn");


saveBtn.addEventListener(
    "click",
    function () {

        const finalCanvas =
            document.createElement("canvas");


        finalCanvas.width =
            characterCanvas.width;

        finalCanvas.height =
            characterCanvas.height;


        const finalCtx =
            finalCanvas.getContext("2d");




        if (darkMode) {

            finalCtx.fillStyle = "#05070c";

            finalCtx.fillRect(
                0,
                0,
                finalCanvas.width,
                finalCanvas.height
            );

            finalCtx.drawImage(
                canvas,
                0,
                0
            );

        }


      
        else {

            finalCtx.drawImage(
                characterCanvas,
                0,
                0
            );

            finalCtx.drawImage(
                canvas,
                0,
                0
            );
        }


        const image =
            finalCanvas.toDataURL(
                "image/png"
            );


        const link =
            document.createElement("a");


        link.download =
            "my-cartoon.png";


        link.href =
            image;


        link.click();
    }
);




const darkBtn =
    document.getElementById("darkBtn");

const batLayer =
    document.getElementById("batLayer");


let darkMode = false;

let savedDrawing = null;



function saveCurrentDrawing() {

    savedDrawing =
        ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
}




function restoreDrawing() {

    if (savedDrawing !== null) {

        ctx.putImageData(
            savedDrawing,
            0,
            0
        );
    }
}




function clearDrawing() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    undoStack = [];

    redoStack = [];
}



darkBtn.addEventListener(
    "click",
    function () {

        darkMode = !darkMode;



        if (darkMode) {


            saveCurrentDrawing();




            clearDrawing();




            characterCanvas.style.display =
                "none";


   

            document.body.classList.add(
                "dark-mode"
            );




            darkBtn.classList.add(
                "active"
            );




            createBats();
        }


      

        else {

            

            document.body.classList.remove(
                "dark-mode"
            );



            characterCanvas.style.display =
                "block";



            restoreDrawing();


      

            darkBtn.classList.remove(
                "active"
            );


       

            removeBats();
        }
    }
);




function createBats() {



    removeBats();


    const numberOfBats = 7;


    for (
        let i = 0;
        i < numberOfBats;
        i++
    ) {

        const bat =
            document.createElement("div");


        bat.className = "bat";


 

        bat.textContent = "🦇";




        bat.style.top =
            Math.random() * 550 + "px";




        bat.style.left =
            -100 -
            Math.random() * 500 +
            "px";




        bat.style.fontSize =
            20 +
            Math.random() * 25 +
            "px";




        bat.style.animationDuration =
            5 +
            Math.random() * 8 +
            "s";




        bat.style.animationDelay =
            -Math.random() * 8 +
            "s";


        batLayer.appendChild(bat);
    }
}



function removeBats() {

    batLayer.innerHTML = "";
}
