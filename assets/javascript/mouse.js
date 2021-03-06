// Create mouse object
var mouse = function(width, height, posX, posY, speed, dirX, dirY)
{
    // Properties
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.dirX = 0;
    this.dirY = 0;

    this.div;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('mouse', 'dir90');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        // Add to canvas
        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }

    this.move = function()
    {
        var _this = this,
        leftPressed,
        upPressed,
        rightPressed,
        downPressed,
        isPressed;

        // keydown event
        document.addEventListener('keydown', function(e)
        {
            switch (e.keyCode)
            {
                case 37:
                    leftPressed = true;
                    _this.dirX = -_this.speed;
                    _this.div.className="mouse dir270";
                    break;
                case 38:
                    upPressed = true;
                    _this.dirY = -_this.speed;
                    _this.div.className="mouse dir0";
                    break;
                case 39:
                    rightPressed = true;
                    _this.dirX = _this.speed;
                    _this.div.className="mouse dir90";
                    break;
                case 40:
                    downPressed = true;
                    _this.dirY = _this.speed;
                    _this.div.className="mouse dir180";
                    break;
                default:
                    break;
            }

            if (isPressed == false)
            {
                isPressed = true;
                loop = setInterval( function()
                {
                    // Collision canvas
                    if (_this.posX <= 0)
                        _this.posX = 1;
                    else if (_this.posX >= canvas1.width-_this.width)
                        _this.posX = canvas1.width - _this.width - 1;
                    else
                        _this.posX += _this.dirX;

                    if (_this.posY <= 0)
                        _this.posY = 1;
                    else if (_this.posY >= canvas1.height-_this.height)
                        _this.posY = canvas1.height- _this.height - 1;
                    else
                        _this.posY += _this.dirY;

                    // Collision obstacle blocks
                    for (var i = 0; i <= obstacles.length - 1; i++)
                    {
                        if (
                            _this.posX >= obstacles[i].posX - obstacles[i].width/2 &&
                            _this.posX <= obstacles[i].posX + obstacles[i].width/2 &&
                            _this.posY >= obstacles[i].posY - obstacles[i].height/2 &&
                            _this.posY <= obstacles[i].posY + obstacles[i].height/2
                        )
                        {
                            switch (true)
                            {
                                case leftPressed:
                                    _this.posX = obstacles[i].posX + _this.width;
                                    break;
                                case upPressed:
                                    _this.posY = obstacles[i].posY + _this.height;
                                    break;
                                case rightPressed:
                                    _this.posX = obstacles[i].posX - _this.width;
                                    break;
                                case downPressed:
                                    _this.posY = obstacles[i].posY - _this.height;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }

                    // Eat cheese
                    for (var i = 0; i <= cheeses.length - 1; i++)
                    {
                        if (
                            _this.posY - _this.height/2 < cheeses[i].posY &&
                            _this.posY + _this.height/2 > cheeses[i].posY &&
                            _this.posX - _this.width/2 < cheeses[i].posX &&
                            _this.posX + _this.width/2 > cheeses[i].posX
                        )
                        {
                            cheeses[i].update();
                            score += 1;
                            scoreDiv.innerHTML = score;
                        }
                    }

                    // Eat rotten-cheese
                    for (var i = 0; i <= rottenCheeses.length - 1; i++)
                    {
                        if (
                            _this.posY - _this.height < rottenCheeses[i].posY &&
                            _this.posY + _this.height > rottenCheeses[i].posY &&
                            _this.posX - _this.width < rottenCheeses[i].posX &&
                            _this.posX + _this.width > rottenCheeses[i].posX
                        )
                        {
                            rottenCheeses[i].update();
                            score <= 0 ? score = 0 : score -= 1;
                            scoreDiv.innerHTML = score;

                            var blackOut1 = new blackOut();
                            blackOut1.create();
                            setTimeout(function()
                            {
                                blackOut1.remove();
                            }, 1000);
                        }
                    }

                    // Drink wine
                    for (var i = 0; i <= wines.length - 1; i++)
                    {
                        if (
                            _this.posY - _this.height < wines[i].posY &&
                            _this.posY + _this.height > wines[i].posY &&
                            _this.posX - _this.width < wines[i].posX &&
                            _this.posX + _this.width > wines[i].posX
                        )
                        {
                            wines[i].update();
                            score <= 0 ? score = 0 : score -= 1;
                            // Lower the speed for 5s
                            _this.speed -= 4;
                            var bite = setTimeout( function() { _this.speed += 4; }, 5000);
                            scoreDiv.innerHTML = score;
                        }
                    }

                    // Collision cat
                    for (var i = 0; i <= cats.length - 1; i++)
                    {
                        if (
                            _this.posY - _this.height/2 < cats[i].posY &&
                            _this.posY + _this.height/2 > cats[i].posY &&
                            _this.posX - _this.width/2 < cats[i].posX &&
                            _this.posX + _this.width/2 > cats[i].posX
                        )
                        {
                            location.reload();
                        }
                    }

                    // Update position
                    _this.div.style.left= _this.posX +"px";
                    _this.div.style.top = _this.posY +"px";
                }, 10 );
            }
        }, false);

        // Keyup event
        document.addEventListener('keyup', function(event)
        {
            leftPressed = false;
            upPressed = false;
            rightPressed = false;
            downPressed = false;
            isPressed = false;
            _this.dirX = 0;
            _this.dirY = 0;
            clearInterval(loop);
        }, false);
    }
}

// New mouse object
var mouse1 = new mouse (50, 50, 20, 200, 6, 0, 0);
mouse1.create();
mouse1.move();
