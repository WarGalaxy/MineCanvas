var canvas = new fabric.Canvas('myCanvas');

playerX=10;
playerY=10;

blockImgW= 30;
blockImgH= 30;

var playerObject= "";
var blockImgObject="";

function playerUpdate (){
    fabric.Image.fromURL("sliminho.png", function(Img){
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
        top:playerY,
        left:playerX 
    });
    canvas.add(playerObject);

    })
}
function newImage (getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObject = Img;

        blockImgObject.scaleToWidth(blockImgW);
        blockImgObject.scaleToHeight(blockImgH);
        blockImgObject.set({
        top:playerY,
        left:playerX 
    });
    canvas.add(blockImgObject);    
    })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftkey == true && keyPressed == '80' || keyPressed == '20'){
    blockImgW= blockImgW + 10;
    blockImgH= blockImgH + 10;
    document.getElementById("currentWidth").innerHTML=blockImgW;
    document.getElementById("currentHeight").innerHTML=blockImgH;
}

    if(e.shiftkey == true && keyPressed == '77' || keyPressed == '190'){
    blockImgW= blockImgW - 10;
    blockImgH= blockImgH - 10;
    document.getElementById("currentWidth").innerHTML=blockImgW;
    document.getElementById("currentHeight").innerHTML=blockImgH;

}
if(keyPressed == '87'){
    up();
}
if(keyPressed == '83'){
    down();
}
if(keyPressed == '65'){
    left();
}
if(keyPressed == '68'){
    right();
}
//movimento
if(keyPressed == '71'){
    newImage('light_green.png');
}
if(keyPressed == '78'){
    newImage('roof.jpg');
}
if(keyPressed == '69'){
    newImage('unique.png');
}
if(keyPressed == '77'){
    newImage('trunk.jpg');
}
if(keyPressed == '84'){
    newImage('wall.jpg');
}
if(keyPressed == '67'){
    newImage('ground.png');
}

}
function up (){
    if(playerY >=0){
        playerY= playerY- blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down (){
    if(playerY <=500){
        playerY= playerY+ blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left (){
    if(playerX >=-30){
        playerX= playerX- blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right (){
    if(playerX <=950){
        playerX= playerX+ blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
    }
}


