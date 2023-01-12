window.addEventListener('load', function(){

    var audio = new Audio('14 Ketsa - Delirium.mp3');
    audio.volume = 0.1
    audio.play();
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 720;

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ( e.key === 'w' || e.key === 'a' || e.key === 's' || e.key === 'd' && 
                this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                    this.frameX++;

                }
                console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if ( e.key === 'w' || e.key === 'a' || e.key === 's' || e.key === 'd'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                    if(this.keys.length > 1) this.keys = [];
                }
            });
        }        
    }

    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 171;
            this.height = 260;
            this.x = 0;
            this.y = canvas.height - this.height;
            this.image = document.getElementById('playerImageRichard');
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 0.05;

            this.yVelocity = 0;
            this.jumpForce = -15;
            this.gravity = 0.5;
            this.isJumping = false;
            this.aniamtionFrames = 5;
            this.frameDelay = 8;
            this.frameCount = 0;
            this.direction = 1;

        }
        draw(context) {

            context.fillStyle = 'white';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,
                this.width, this.height, this.x, this.y, this.width, this.height);
        }

        directionChange(value) {
       
        if (this.value != this.direction ) {
            this.direction = value;
            
            console.log(value);
            if(this.direction == 0) {
                document.getElementById("playerImage").className = "leftDirection";
              
            }
            if(this.direction == 1) {
                document.getElementById("playerImage").className = "rightDirection";
              
            }

            
               console.log(value);
        }


        }

        jump() {
            if(!this.isJumping) {
                this.yVelocity = this.jumpForce;
                this.isJumping = true;
            }
        }
        update() {

           


            // Vertical
            if (input.keys.indexOf("w") > -1) {
                this.jump();
            }
            this.yVelocity += this.gravity;
            this.y += this.yVelocity;
            // check for collisions
            if (this.y > this.gameHeight - this.height) {
                this.y = this.gameHeight - this.height;
                this.yVelocity = 0;
                this.isJumping = false;
            }

            if(this.xVelocity == 0){
                this.frameY = 0;
                this.isJumping = false;
            }

            this.frameCount++;
            if(this.frameCount >= this.frameDelay) {
                this.frameCount = 0;
                if (this.frameX >= 5 ) {
                    this.frameX = 0
                }else{
                    this.frameX++;
                }
                
            
                if(this.frameX >= this.animationFrames) {
                    this.frameCount = 0;
                }
            }
         

            // horizontal movement
            if ( input.keys.indexOf('d') > -1) {
                this.speed = 5;
                if (this.direction != 1){
                    this.directionChange(1);
                 
                }
              
                           
            } else if (input.keys.indexOf('a') > -1) {
                this.speed = -5;
                if (this.direction != 0){
                    this.directionChange(0);
                }
            } else {
                this.speed = 0;
                this.frameX = 0
                this.frameY = 0;
            }
            this.x += this.speed;
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
        }



    
    }

    class Background {

    }

    class Enemy {

    }

    function handleEnemies() {

    }

    function displayStatusText() {

    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);


    function animate() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw(ctx);
        player.update();
    
        requestAnimationFrame(animate);
    }
    animate()
    

})