var sbdiv = document.getElementById("zhazhahui");
var sbtext = document.getElementById("sb_text");
var X = 0;
var Y = 0;
var LX = true;
var LY = true;
function moveLocation() {
    var CX = document.body.clientWidth - sbdiv.clientWidth;
    var CY = document.body.clientHeight - sbdiv.clientHeight;
    if (X > CX){LX = false;}
    if (Y > CY){LY = false;}
    if (X < 0){LX = true;}
    if (Y < 0){LY = true;}
    if (LX){X += 2;}
    else{X -= 1;}
    if (LY){Y += 1;}
    else{Y -= 2;}
    sbdiv.style.left = X + "px";
    sbdiv.style.top = Y + "px";
}
var i = 0;
var colors = ['red','blue','purple','green'];
function changeTextColor(){
    i += 1;
    if (i > 3){i = 0;}
    sbtext.style.color = colors[i];
}

function play() {
    var audio = document.getElementById("myAudio");
    audio.play().catch(function(error) {
        console.log("Autoplay was prevented:", error);
    });
}

setInterval(moveLocation, 5);
setInterval(changeTextColor, 500);