var container = document.querySelector('.container');

// Create canvas object
var canvas = function(width, height)
{
    // Properties
    this.width = width;
    this.height = height;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.classList.add('canvas');
        container.appendChild(this.div);
    }
}
// New canvas
var canvas1 = new canvas (1200, 500);
canvas1.create();

// Functions random
function randomX() { return Math.abs(Math.floor(Math.random() * canvas1.width - 50)); }
function randomY() { return Math.abs(Math.floor(Math.random() * canvas1.height - 50)); }
function random(number) { return Math.abs(Math.floor(Math.random() * number) + 1); }


// Create cheese object
var cheeseTotal = 5;
var cheese = function(width, height, posX, posY, size, addTime, speed)
{
    // Properties
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.addTime = addTime;
    this.dirX;
    this.speed = speed;
    this.div;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('cheese');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }
    this.direction= function()
    {
        var _this = this;

        setInterval(function()
        {
            if (_this.posX <= 0)
            {
                console.log(_this.posX, _this.posY);
                _this.posX = canvas1.width - _this.width;
                _this.posY = randomY();
            }
            else
            {
                _this.posX -= _this.speed;
                _this.div.style.left = _this.posX + 'px';
                _this.div.style.top = _this.posY + 'px';

            }
        }, 30)
    }
}

// Create cheeses array
function spoon()
{
    var cheeses=[];
    for (var i = 0; i < cheeseTotal; i++)
    {
        var cheese1 = new cheese(50,50,canvas1.width, randomY(), 1, 10, random(12) )
        cheese1.create();
        cheese1.direction();
        cheeses.push(cheese1);
    }
}
spoon()


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
                    else if (_this.posX >= canvas1.width-50) {
                        _this.posX = canvas1.width-51;
                    }
                    else {
                        _this.posX += _this.dirX;
                    }
                    if (_this.posY <= 0)
                    {
                        _this.posY = 1;
                    }
                    else if (_this.posY >= canvas1.height-100) {
                        _this.posY = canvas1.height-101;
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
var mouse1 = new mouse (100, 100, 20, 20, 2, 0, 0);
mouse1.cross = [38,39,40,37];

mouse1.create();
mouse1.move();


//
// // Collision function
// function collision(errorX, errorY)
// {
//     if (mouse1.posX - errorX <= cheeseSmall.posX &&
//         mouse1.posX + errorX >= cheeseSmall.posX &&
//         mouse1.posY - errorY <= cheeseSmall.posY &&
//         mouse1.posY + errorY >= cheeseSmall.posY)
//     {
//         alert('eat !')
//     }
// }
