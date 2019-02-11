function Snake(){
	this.x = floor(random(width)/gridSize)*gridSize;
	this.y = floor(random(height)/gridSize)*gridSize;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.tail = [];
	this.size = 0;

    this.direction = function(xSpeed, ySpeed){
		if(this.xSpeed != -xSpeed){
			this.xSpeed = xSpeed;
		}
		if(this.ySpeed != -ySpeed){
			this.ySpeed = ySpeed;  
		}
	}
	
	this.updateSnake = function(){
		for(var i = 0; i < this.size - 1; i++){
			this.tail[i] = this.tail[i+1];
		}
		this.tail[this.size-1] = createVector(this.x, this.y);
	}

	this.eat = function(position){
		distance = abs(this.x - position.x) + abs(this.y - position.y);
		if(distance < 1){
			this.size++;
			score++;
			return true;
		} else {
			return false;
		}
	}

	this.dead = function(){
		for(var i = 0; i < this.size - 1; i++){
			distance = abs(this.x - this.tail[i].x) + abs(this.y - this.tail[i].y);
			if(distance < 1){
				console.log("i'm dead");
				return true;
			}
		}
		return false;
	}

	this.update = function(){
		if(this.size != this.tail.length){
			this.tail[this.size-1] = createVector(this.x, this.y);
		} else{
			this.updateSnake();
		}

		if(this.dead()){
			this.size = 0;
			this.tail = [];
			score = 1;
		}

		this.x = this.x + this.xSpeed*gridSize;
		this.y = this.y + this.ySpeed*gridSize;
    
        this.x = constrain(this.x, 0, width - gridSize);
        this.y = constrain(this.y, 0, height - gridSize);
    }

	this.show = function(){
		fill(255);
		for(var i = 0; i < this.size; i++){
			rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);
		}
		rect(this.x, this.y, gridSize, gridSize);
	}
}