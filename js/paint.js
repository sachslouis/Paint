var mousePressed = false;
var currentButton = "pencil";

function pressMouse(value) {
    if (value === 1) {
        mousePressed = true;
    }
    return mousePressed;
}

function releaseMouse(value) {
    if (value === 1) {
        mousePressed = false;
    }
    return mousePressed;
}

var brushColor = "black";

var headSize = 10;

function brushSize(value) {
    if (value === 1) {
        headSize = 10;
    }
    if (value === 2) {
        headSize = 30;
    }
    if (value === 3) {
        headSize = 50;
    }
    return headSize;
}
function eraser(value) {
    brushColor = "white"
    if (value === 1) {
        headSize = 10;
    }
    if (value === 2) {
        headSize = 30;
    }
    if (value === 3) {
        headSize = 100;
    }
    return headSize;
}
function fill() {
    document.getElementById("paint").style.backgroundColor = brushColor;
    console.log("pressed fill")
}
function pencil() {
    headSize = 1;
    console.log("pressed pencil")
}
function paintBrush() {
    headSize = 40;
    currentButton = "paintBrush"
    console.log("pressed paintbrush")
}
function sprayPaint() {
    currentButton = "sprayPaint";
    console.log("currentButton: " + currentButton)
}
function text() {
    currentButton = "text";
    console.log("pressed text")
    var input = document.createElement("input");
    input.type = "text";
    input.className = "textInput"
    $("#paint").append(input);
}
function findClick(e) {
    var p = {
        x: e.clientX,
        y: e.clientY
    }
    console.log(p)
    if ((currentButton == "paintBrush") || (currentButton == "pencil")) {
        mouseDraw(p);
    }
    else if (currenButton == "erase") {
        mouseErase(p)
    }
    else if (currentButton == "sprayPaint") {
        console.log("you picked the spraypaint button")
        mouseTag(p)
    }
    return p
}

$("#x").click(x)
$("#min").click(minimize)
$("#max").click(maximize)
var boardSize = "reg"
function x() {
    $(".container").hide()
}


function maximize() {
    $(".container").height('100vh')
    $(".container").width('98vw')
    boardSize = "max"
    console.log(boardSize)
}
function minimize() {
    if (boardSize == "max") {
        $(".container").height(500)
        $(".container").width(500)
        boardSize = "reg"
    }
    else {
        $(".container").hide()
    }
}

var arr = ['eraser', 'paintCan', 'pencil', 'paintBrush', 'sprayPaint', 'text']
var functionArr = [eraser, fill, pencil, paintBrush, sprayPaint, text]

for (i = 0; i < arr.length; i++) {
    var button = document.createElement('button');
    button.className = "toolButton";
    button.id = arr[i];
    button.style.background = "url('./images/" + arr[i] + ".jpg')";
    button.style.backgroundSize = "contain";
    $("#buttonNode").append(button)
    document.getElementById(arr[i]).addEventListener("click", functionArr[i]);

    //document.getElementsByClassName("tools")[0].appendChild(button)
}

var hues = ['black', 'white', 'grey', 'lightgrey', 'brown', 'red', 'olive', 'yellow', 'green', 'lime', 'teal', 'skyblue', 'darkblue', 'blue', 'purple', 'fuchsia', 'tan', 'lightyellow', 'darkolivegreen', 'seagreen', 'lightskyblue', 'lightblue', 'darkslategrey', 'lavender', 'royalblue', 'palevioletred', 'darkslategrey', 'orange', 'pink', 'turquoise', 'lightgreen', 'darkred']
for (i = 0; i < hues.length; i++) {
    var colorButton = document.createElement('button');
    colorButton.className = "button";
    colorButton.id = hues[i];
    var buttonElements = document.querySelectorAll('.button');
    for (var i = 0; i < buttonElements.length; i++)
        buttonElements[i].id = hues[i];
    colorButton.style.backgroundColor = hues[i];
    colorButton.style.backgroundSize = "contain";
    $("#colorNode").append(colorButton)
}

function yellow() {
    document.getElementById("button-7").addEventListener(click)
}

var words = ['File ', 'Edit ', 'View ', 'Color ', 'Image ', 'Help ']
for (i = 0; i < words.length; i++) {
    var menuText = document.createElement('span');
    var bText = document.createTextNode(words[i] + '  ');
    menuText.appendChild(bText)
    //menuText.className="text";
    $("#menuStrip").append(menuText)
    //document.getElementsByClassName("tools")[0].appendChild(button)
}

function mouseDraw(point) {
    if (mousePressed === true) {
        var newElement = document.createElement("div");
        newElement.style.height = headSize + "px";
        newElement.style.width = headSize + "px";
        newElement.style.position = "absolute";
        newElement.style.left = (point.x - headSize / 2) - 100 + "px";
        newElement.style.top = (point.y - headSize / 2) - 75 + "px";
        if (currentButton == "eraser") {
            newElement.style.background = white;
        }
        else {
            newElement.style.background = brushColor;
        }
        newElement.style.borderRadius = "50%";
        $("#paint").append(newElement);
    }
    else if (mousePressed === false) {
    }
}

function mouseErase(point) {
    if (mousePressed === true) {
        var newElement = document.createElement("div");
        newElement.style.height = headSize + "px";
        newElement.style.width = headSize + "px";
        newElement.style.position = "absolute";
        newElement.style.left = (point.x - headSize / 2) - 100 + "px";
        newElement.style.top = (point.y - headSize / 2) - 75 + "px";
        newElement.style.background = "white";
        newElement.style.borderRadius = "50%";
        $("#paint").append(newElement);
    }
    else if (mousePressed === false) {
    }
}

function mouseTag(point) {
    if (mousePressed === true) {
        var newElement = document.createElement("div");
        newElement.style.height = headSize + "px";
        newElement.style.width = headSize + "px";
        newElement.style.position = "absolute";
        newElement.style.left = (point.x - headSize / 2) + "px";
        newElement.style.top = (point.y - headSize / 2) + "px";
        newElement.style.backgroundSize = "cover";
        newElement.style.padding = -10 + "px";
        newElement.style.backgroundImage = "url('./images/sprayPaint.jpeg')";
        console.log("This is function mouseTag()")

        newElement.style.borderRadius = "50%";
        $("#paint").append(newElement);
    }
    else if (mousePressed === false) {
    }
}
var print = setInterval(mouseDraw, 1);

document.getElementById("eraser").addEventListener("click", callEraser)
function callEraser() {
    eraser(1);
}

$("#black").click(assignColor);
$("#red").click(assignRed);
$("#white").click(assignWhite);
$("#grey").click(assignGrey);
$("#lightgrey").click(assignLightGrey);
$("#brown").click(assignBrown);
$("#olive").click(assignOlive);
$("#yellow").click(assignYellow);
$("#green").click(assignGreen);
$("#lime").click(assignLime);
$("#teal").click(assignTeal);
$("#darkblue").click(assignDarkBlue);
$("#skyblue").click(assignSkyBlue);
$("#blue").click(assignBlue);
$("#purple").click(assignPurple);
$("#fuchsia").click(assignFuchsia);
$("#tan").click(assignTan);
$("#lightyellow").click(assignLightYellow);
$("#darkolivegreen").click(assignDarkOliveGreen);
$("#seagreen").click(assignSeaGreen);
$("#lightskyblue").click(assignLightSkyBlue);
$("#lavender").click(assignLavender);
$("#darkslategrey").click(assignDarkSlateGrey);
$("#lightblue").click(assignLightBlue);
$("#lightyellow").click(assignLightYellow);
$("#darkolivegreen").click(assignDarkOliveGreen);
$("#seagreen").click(assignSeaGreen);
$("#lightskyblue").click(assignLightSkyBlue);
$("#darkolivegreen").click(assignDarkOliveGreen);
$("#seagreen").click(assignSeaGreen);
$("#lightskyblue").click(assignLightSkyBlue);



function assignColor() {
    brushColor = "black";
}
function assignRed() {
    brushColor = "red";
}
function assignWhite() {
    brushColor = 'white';
}
function assignGrey() {
    brushColor = "Grey"
}
function assignLightGrey() {
    brushColor = "lightGrey";
}
function assignBrown() {
    brushColor = "brown";
}
function assignOlive() {
    brushColor = 'olive';
}
function assignYellow() {
    brushColor = "yellow"
}
function assignGreen() {
    brushColor = 'green';
}
function assignLime() {
    brushColor = "Lime"
}
function assignTeal() {
    brushColor = 'teal';
}
function assignSkyBlue() {
    brushColor = "skyblue"
}
function assignDarkBlue() {
    brushColor = 'darkblue';
}
function assignBlue() {
    brushColor = "Blue"
}
function assignPurple() {
    brushColor = "Purple"
}
function assignFuchsia() {
    brushColor = 'fuchsia';
}
function assignTan() {
    brushColor = "tan"
}
function assignLightYellow() {
    brushColor = 'lightyellow';
}
function assignDarkOliveGreen() {
    brushColor = "darkolivegreen"
}
function assignSeaGreen() {
    brushColor = "seagreen"
}
function assignLightSkyBlue() {
    brushColor = 'lightskyblue';
}
function assignLightBlue() {
    brushColor = "lightblue"
}
function assignDarkSlateGrey() {
    brushColor = 'darkslategrey';
}
function assignLavender() {
    brushColor = "lavender"
}
function royalBlue() {
    brushColor = "royalblue"
}
function paleVioletRed() {
    brushColor = "palevioletred"
}
function darkSlateGrey() {
    brushColor = 'darkslategrey';
}
function orange() {
    brushColor = "orange"
}
function pink() {
    brushColor = 'pink';
}
function turquoise() {
    brushColor = "turquoise"
}
lightgreen, darkred











