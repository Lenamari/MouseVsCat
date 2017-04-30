var container = document.querySelector('.container');

// Create canvas object
var canvas = function(width, height, color)
{
    // Proprieties
    this.width = width;
    this.height = height;
    this.color = color;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.backgroundColor = this.color;
        this.div.classList.add('canvas');
        container.appendChild(this.div);
    }
}
// New canvas
var canvas1 = new canvas (1200, 600,"white");
canvas1.create();


// Create mouse object
var mouse = function(posX, posY, speed, color)
{
    // Proprieties
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.color = color;

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
        this.div.style.backgroundColor = this.color;

        var canvas1 = container.querySelector('.canvas');
        canvas1.appendChild(this.div);
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

        }, false);
    }
}

var mouse1 = new mouse (0, 0, 20, "red");
mouse1.cross = [38,39,40,37];
mouse1.create();
mouse1.move();
