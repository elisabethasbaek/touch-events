var xStart;
var xEnd;
var yStart;
var yEnd;
var tolerance = 125; //px
var limit = 40; //deg

var moveMe = document.querySelector(".moveMe");
var wrapper = document.querySelector(".wrapper");
var sound = document.querySelector(".sound");

wrapper.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
    moveMe.classList.add("moved");
}); 

wrapper.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd + tolerance) < xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        moveMe.classList.remove("moved");
    }
    if ((xEnd - tolerance) > xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        moveMe.classList.add("moved");
        sound.play();
    } else {
        moveMe.classList.remove("moved");
    }

    if ((yEnd + tolerance) < yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        console.log("You swiped up");
    }
    if ((yEnd - tolerance) > yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        console.log("You swiped down");
    }
})