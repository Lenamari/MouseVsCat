// Create cheese object
var cheeses = [];
var score = 0;
var cheese = function(width, height, posX, posY, speed)
{
    // Properties
    this.width = width;
    this.height = height;
    this.dirX;
    this.posX = posX;
    this.posY = posY;
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
    this.add = function()
    {
        var _this = this;

        var add = {};
        add.posY = _this.posY;
        cheeses.push(add);
    }
    this.direction = function()
    {
        var _this = this;

        setInterval(function()
        {
            if (_this.posX <= - 100)
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

            if (
                mouse1.posY - mouse1.height/2 < _this.posY &&
                mouse1.posY + mouse1.height/2 > _this.posY &&
                mouse1.posX - mouse1.width/2 < _this.posX &&
                mouse1.posX + mouse1.width/2 > _this.posX
            )
            {
                _this.posX = canvas1.width - _this.width;
                _this.posY = randomY();
                score += 1;
            }

        }, 30)
    }
}

// Create cheeses array

for (var i = 0; i < 10; i++)
{
    var cheese1 = new cheese ( 50, 50, canvas1.width, randomY(), random(12) );
    cheese1.create();
    cheese1.add();
    cheese1.direction();
}
// for (var i = 0; i < cheeses.length - 1; i++)
// {
//     if (cheeses[i].posY < (cheeses[i+1].posY + cheese1.height * 2))
//     {
//         cheeses[i].posY = randomY()
//         cheeses[i+1].posY = randomY()
//     }
//     else
//     {
//
//     }
// }
