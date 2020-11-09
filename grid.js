var xStart;
var xEnd;
var yStart;
var yEnd;
var tolerance = 10;
var step = 0;
var limit = 20;
var moveMe = document.querySelector(".moveMe");
var grid = document.querySelector(".grid");

grid.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
}); 

grid.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    // left right
    if(step < 40){
        if ((xEnd - tolerance) > xStart
        && yEnd < (yStart + limit)
        && yEnd > (yStart - limit)){
            step = step + 20;
            moveMe.style.transform = "translateX(" + step + "vw)";
            console.log("right");
        }
        console.log(step);
    }

    if(step != 0){
        if ((xEnd + tolerance) < xStart
        && yEnd < (yStart + limit)
        && yEnd > (yStart - limit)){
            step = step - 20;
            moveMe.style.transform = "translateX(" + step + "vw)";
            console.log("left");
        }
        console.log(step);
    }
    

    // up down
    if (step != 0){
        if ((yEnd + tolerance) < yStart
        && xEnd < (xStart + limit)
        && xEnd > (xStart - limit)){
            step = step - 20;
            moveMe.style.transform = "translateX(" + step + "vw)";
            console.log("up");
        }
    }
    if (step < 40){
        if ((yEnd - tolerance) > yStart
        && xEnd < (xStart + limit)
        && xEnd > (xStart - limit)){
            step = step + 20;
            moveMe.style.transform = "translateX(" + step + "vw)";
            console.log("down");
        }
    }
})