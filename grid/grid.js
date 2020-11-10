var xStart;
var xEnd;
var yStart;
var yEnd;
var tolerance = 40;
var stepX = 0;
var stepY = 0;
var limit = 20;
var moveMe = document.querySelector(".moveMe");
var grid = document.querySelector(".grid");

moveMe.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
}); 

moveMe.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd - tolerance) > xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX + 20;
        if (stepX >= 40) stepX = 40;
        moveMe.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("right");
    }

    if ((xEnd + tolerance) < xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX - 20;
        if (stepX <= 0) stepX = 0;
        moveMe.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("left");
    }
    
    if ((yEnd - tolerance) > yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY + 20;
        if (stepY >= 40) stepY = 40;
        moveMe.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("down");
    }

    if ((yEnd + tolerance) < yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY - 20;
        if (stepY <= 0) stepY = 0;
        moveMe.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("up");
    }
})