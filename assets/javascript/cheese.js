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