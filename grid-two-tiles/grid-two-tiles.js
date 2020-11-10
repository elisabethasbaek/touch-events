var xStart;
var xEnd;
var yStart;
var yEnd;
var stepX = 0;
var stepY = 0;

var tolerance = 40;
var limit = 20;

var moveMe = document.querySelectorAll(".moveMe");
var firstSmiley = document.querySelector(".firstSmiley");
var secondSmiley = document.querySelector(".secondSmiley");

firstSmiley.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
}); 

secondSmiley.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
}); 

firstSmiley.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd - tolerance) > xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX + 20;
        if (stepX >= 40) stepX = 40;
        firstSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("right");
    }

    if ((xEnd + tolerance) < xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX - 20;
        if (stepX <= 0) stepX = 0;
        firstSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("left");
    }
    
    if ((yEnd - tolerance) > yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY + 20;
        if (stepY >= 40) stepY = 40;
        firstSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("down");
    }

    if ((yEnd + tolerance) < yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY - 20;
        if (stepY <= 0) stepY = 0;
        firstSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("up");
    }
})

secondSmiley.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    if ((xEnd - tolerance) > xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX + 20;
        if (stepX <= 0) stepX = 0;
        secondSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("right");
    }

    if ((xEnd + tolerance) < xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX - 20;
        if (stepX >= 40) stepX = 40;
        secondSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("left");
    }
    
    if ((yEnd - tolerance) > yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY + 20;
        if (stepY <= 0) stepY = 0;
        secondSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("down");
    }

    if ((yEnd + tolerance) < yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY - 20;
        if (stepY >= 40) stepY = 40;
        secondSmiley.style.transform = "translate(" + stepX + "vw, " + stepY + "vw)";
        console.log("up");
    }
})