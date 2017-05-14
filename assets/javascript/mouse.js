// Create mouse object
var mouse = function(width, height, posX, posY, speed, dirX, dirY)
{
    // Proprieties
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.dirX = 0;
    this.dirY = 0;

    this.cross = new Array();
    this.div;

    var isPressed = false;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('mouse', 'dir90');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }
    this.move = function()
    {
        var _this = this;

        document.addEventListener('keydown', function(event)
        {

            // if (event.keyCode == _this.cross[0] && _this.cross[1])
            // {
            //     _this.dirX = _this.speed;
            //     _this.dirY = -_this.speed;
            //     _this.div.className="mouse dir45";
            // }
            // else if (event.keyCode == _this.cross[1] && _this.cross[2])
            // {
            //     _this.dirX = _this.speed;
            //     _this.dirY = _this.speed;
            //     _this.div.className="mouse dir135";
            // }
            // else if (event.keyCode == _this.cross[2] && _this.cross[3])
            // {
            //     _this.dirX = -_this.speed;
            //     _this.dirY = _this.speed;
            //     _this.div.className="mouse dir225";
            // }
            // else if (event.keyCode == _this.cross[3] && _this.cross[4])
            // {
            //     _this.dirX = -_this.speed;
            //     _this.dirY = -_this.speed;
            //     _this.div.className = "mouse dir315";
            // }
            //
            if (event.keyCode == _this.cross[0])
            {
                _this.dirY = -_this.speed;
                _this.div.className="mouse dir0";
            }
            else if (event.keyCode == _this.cross[1])
            {
                _this.dirX = _this.speed;
                _this.div.className="mouse dir90";
            }
            else if (event.keyCode == _this.cross[2])
            {
                _this.dirY = _this.speed;
                _this.div.className="mouse dir180";
            }
            else if (event.keyCode == _this.cross[3])
            {
                _this.dirX = -_this.speed;
                _this.div.className = "mouse dir270";
            }

            if ( isPressed == false )
            {
                isPressed = true;
                loop = setInterval( function()
                {
                    if (_this.posX <= 0)
                    {
                        _this.posX = 1;
                    }
                    else if (_this.posX >= canvas1.width-_this.width) {
                        _this.posX = canvas1.width - _this.width - 1;
                    }
                    else {
                        _this.posX += _this.dirX;
                    }

                    if (_this.posY <= 0)
                    {
                        _this.posY = 1;
                    }
                    else if (_this.posY >= canvas1.height-_this.height) {
                        _this.posY = canvas1.height- _this.height - 1;
                    }
                    else {
                        _this.posY += _this.dirY;
                    }
                    _this.div.style.left= _this.posX +"px";
                    _this.div.style.top = _this.posY +"px";

                }, 10 );
            }
            document.addEventListener('keyup', function(event)
            {
                isPressed = false;
                _this.dirX = 0;
                _this.dirY = 0;
                clearInterval(loop);
            }, false);
        }, false);
    }
}

// New mouse
var mouse1 = new mouse (70, 70, 20, 20, 2, 0, 0);
mouse1.cross = [38,39,40,37];

mouse1.create();
mouse1.move();
