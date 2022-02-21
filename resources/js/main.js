const hello = document.getElementById("name")
const bio =  document.getElementById("bio")
var myVarX = setInterval(helloCircleControllerX, 1);
var myVarY = setInterval(helloCircleControllerY, 1);
let left = 0;
let bottom = 0;
let helloMovingX = true;
let helloMovingY = true;
function helloCircleControllerX() {
    if (left === 700) {
        helloMovingX = false;
    } else if (left === 0) {
        helloMovingX = true;
    }
    if (helloMovingX) {
        moveHelloCircleRight();
    } else {
        moveHelloCircleLeft();
    }
};
function helloCircleControllerY() {
    if (bottom === 370) {
        helloMovingY = false;
    } else if (bottom === -30) {
        helloMovingY = true;
    }
    if (helloMovingY) {
        moveHelloCircleDown()
    } else {
        moveHelloCircleUp()
    }
}
function moveHelloCircleRight(){
    left += 1;
    hello.style.left = left + "px";
}
function moveHelloCircleLeft(){
    left -= 1;
    hello.style.left = left + "px";
}
function moveHelloCircleDown(){
    bottom += 1;
    hello.style.top = bottom + "px";
}
function moveHelloCircleUp(){
    bottom -= 1;
    hello.style.top = bottom + "px";
}