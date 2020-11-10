var xStart;
var xEnd;
var yStart;
var yEnd;

var tolerance = 40;
var limit = 20;

var moveMe = document.querySelectorAll(".moveMe"); // array
moveMe.forEach(function(listItem){
    listItem.addEventListener("touchstart", startTouch);
    listItem.addEventListener("touchend", endTouch);
});

function endTouch(event){
    xEnd = event.changedTouches[0].pageX; 
    yEnd = event.changedTouches[0].pageY;

    var stepX = parseInt(event.target.dataset.x);
    var stepY = parseInt(event.target.dataset.y);

    if ((xEnd - tolerance) > xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX + 20;
        if(isOccupied(stepX, stepY)) return;
        if (stepX >= 40) stepX = 40;
        event.target.style.transform = `translate(${stepX}vw,${stepY}vw)`;
        event.target.dataset.x = stepX;
        console.log("right");
    }

    if ((xEnd + tolerance) < xStart
    && yEnd < (yStart + limit)
    && yEnd > (yStart - limit)){
        stepX = stepX - 20;
        if(isOccupied(stepX, stepY)) return;
        if (stepX <= 0) stepX = 0;
        event.target.style.transform = `translate(${stepX}vw,${stepY}vw)`;
        event.target.dataset.x = stepX;
        console.log("left");
    }
    
    if ((yEnd - tolerance) > yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY + 20;
        if(isOccupied(stepX, stepY)) return;
        if (stepY >= 40) stepY = 40;
        event.target.style.transform = `translate(${stepX}vw,${stepY}vw)`;
        event.target.dataset.y = stepY;
        console.log("down");
    }

    if ((yEnd + tolerance) < yStart
    && xEnd < (xStart + limit)
    && xEnd > (xStart - limit)){
        stepY = stepY - 20;
        if(isOccupied(stepX, stepY)) return;
        if (stepY <= 0) stepY = 0;
        event.target.style.transform = `translate(${stepX}vw,${stepY}vw)`;
        event.target.dataset.y = stepY;
        console.log("up");
    }
}

function startTouch(event){
    xStart = event.changedTouches[0].pageX; 
    yStart = event.changedTouches[0].pageY;
};

function isOccupied(x, y){
    var toggle = false;

    moveMe.forEach(function(listItem){
        if(listItem.dataset.x == x
        && listItem.dataset.y == y){
            toggle = true;
        }
    });

    return toggle;
}

(function(){
    moveMe.forEach(function(listItem){
        listItem.style.transform = `translate(${listItem.dataset.x}vw, ${listItem.dataset.y}vw)`;
    })
})()

function shuffle(array){
    var m = array.length, t, i;

    while(m){
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
