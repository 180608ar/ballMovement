var ball,database,position;

function setup(){
    database = firebase.database();
    createCanvas(600,600);

    ball = createSprite(300,300,20,20);

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);

    
}


function draw(){
    background("green");
    if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
    }

    if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
    }

    if(keyDown(UP_ARROW)){
            writePosition(0,-1);
    }

    if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
    }
    drawSprites();      
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x +x,
        'y': position.y +y
    })
}

function showError(){
    console.log("error");
}



