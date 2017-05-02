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
function randomX() { return Math.abs(Math.floor(Math.random() * canvas1.width - 50)); }
function randomY() { return Math.abs(Math.floor(Math.random() * canvas1.height - 50)); }


// Create cheese object
var cheese = function(width, height, posX, posY, size, addTime)
{
    // Proprieties
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
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

// Create cheeses on game
var cheeses = [];
for (var i = 0; i < 3; i++)
{
    var cheeseSmall = new cheese (50, 50, randomX(), randomY(), 1, 10);
    cheeseSmall.create();
    cheeses.push(cheeseSmall);
}


// Create mouse object
var mouse = function(width, height, posX, posY, speed)
{
    // Proprieties
    this.width = width;
    this.height = height;
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
        this.div.classList.add('mouse', 'dirRight');
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
            if (event.keyCode == _this.cross[0])
            {
                _this.posY -= _this.speed;
                _this.div.className="mouse dirTop";
            }

            else if (event.keyCode == _this.cross[1])
            {
                _this.posX += _this.speed;
                _this.div.className="mouse dirRight";
            }
            else if (event.keyCode == _this.cross[2])
            {
                _this.posY += _this.speed;
                _this.div.className="mouse dirBottom";
            }
            else if (event.keyCode == _this.cross[3])
            {
                _this.posX -= _this.speed;
                _this.div.className = "mouse dirLeft";
            }

            _this.div.style.left= _this.posX +"px";
            _this.div.style.top = _this.posY +"px";

        collision(mouse1.width/2,mouse1.height/2);
        }, false);

    }
}

// New mouse
var mouse1 = new mouse (100, 100, 10, 20, 10);
mouse1.cross = [38,39,40,37];

mouse1.create();
mouse1.move();

// Collision function
function collision(errorX, errorY)
{
    if (mouse1.posX - errorX <= cheeseSmall.posX &&
        mouse1.posX + errorX >= cheeseSmall.posX &&
        mouse1.posY - errorY <= cheeseSmall.posY &&
        mouse1.posY + errorY >= cheeseSmall.posY)
    {
        alert('eat !')
    }
}
