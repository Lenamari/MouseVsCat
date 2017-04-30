var container = document.querySelector('.container');

// Create canvas object
var canvas = function(width, height)
{
    // Proprieties
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
function random(posX) { return Math.floor(Math.random() * canvas1.width); }
function random(posY) { return Math.floor(Math.random() * canvas1.height); }


// Create cheese object
var cheese = function(width, height, posX, posY, size, addTime)
{
    // Proprieties
    this.width = width;
    this.height = height;
    this.posX = (posX);
    this.posY = (posY);
    this.size = size;
    this.addTime = addTime;


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
}

var cheeseSmall = new cheese (50, 50, 100,100, 1, 10);
cheeseSmall.create();
console.log(cheeseSmall.posX, cheeseSmall.posY);

// Create mouse object
var mouse = function(posX, posY, speed)
{
    // Proprieties
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;

    this.direction = new Array();
    this.cross = new Array();
    this.point;
    this.isAlive = true;
    this.div;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('mouse');
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
            if (event.keyCode == _this.cross[0])
                _this.posY -= _this.speed;
            else if (event.keyCode == _this.cross[1])
                _this.posX += _this.speed;
            else if (event.keyCode == _this.cross[2])
                _this.posY += _this.speed;
            else if (event.keyCode == _this.cross[3])
                _this.posX -= _this.speed;

            _this.div.style.left= _this.posX +"px";
            _this.div.style.top = _this.posY +"px";

            console.log(mouse1.posX, mouse1.posY);
            console.log(cheeseSmall.posX, cheeseSmall.posY);

            collision();
        }, false);
    }
}

// New mouse
var mouse1 = new mouse (0, 0, 10);
mouse1.cross = [38,39,40,37];
mouse1.create();
mouse1.move();

// Collision function

function collision()
{
    if (((mouse1.posX + (cheeseSmall.width/2)) == cheeseSmall.posX) &&
        ((mouse1.posY + (cheeseSmall.height/2)) == cheeseSmall.posY) &&
        ((mouse1.posX - (cheeseSmall.width/2)) == cheeseSmall.posX) &&
        ((mouse1.posY - (cheeseSmall.height/2)) == cheeseSmall.posY))
    {
        alert("ve");
    }
    console.log(cheeseSmall.width, cheeseSmall.height);
}
