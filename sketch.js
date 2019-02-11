var snake;
var gridSize = 20;
var food;
var score = 1;
var shift = 30;

function setup() {
	createCanvas(600,600);
	frameRate(10);
	snake = new Snake;
	pickLocation();	
}	

function pickLocation(){
	var flag = false;
	var cols = width/gridSize;
	var rows = (height-shift)/gridSize;
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.x = food.x * gridSize;
	food.y = food.y * gridSize;

	for(var i = 0; i < snake.size - 1; i++){
		if((food.x == snake.tail[i].x) && (food.y == snake.tail[i].y)){
			flag = true;
		}
	}
	if(flag){
		pickLocation();
	}
}

function draw() {
	background(55);
	
	snake.update();
	snake.show();

	if(snake.eat(food)){		
		pickLocation();		
	}
	
	fill(255,0,100);
	rect(food.x, food.y, gridSize, gridSize);

	textSize(30);
	fill(255,0,0);
	text(score, 15, 30);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.direction(0,-1);
	} else if(keyCode === DOWN_ARROW){
		snake.direction(0,1);
	} else if(keyCode === RIGHT_ARROW){
		snake.direction(1,0);
	} else if(keyCode === LEFT_ARROW){
		snake.direction(-1,0);
	}
}

