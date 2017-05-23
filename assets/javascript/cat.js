var cats = [],
    catsTotal = 6;

// Create cheese object
var cat = function(width, height, posX, posY, speed)
{
    // Properties
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;

    this.div;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('cat');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }
    this.direction = function()
    {
        var _this = this;
        var dirX, dirY;
        position = setInterval(function()
        {
            var newPos = [
                [-1, 0, 1],
                [-1, 0, 1]
            ]
            dirX = newPos[0][ choosePos(newPos.length) ];
            dirY = newPos[1][ choosePos(newPos.length) ];
        },1000)
        move = setInterval(function()
        {
            if (_this.posX <= 0)
                _this.posX = 0;
            else if (_this.posX >= canvas1.width-_this.width)
                _this.posX = canvas1.width - _this.width;
            else
            {
                switch (dirX)
                {
                    case -1:
                        _this.posX -= 1;
                        _this.div.classList.remove('dir270', 'dir90', 'dir0', 'dir180');
                        _this.div.classList.add('dir270');
                        break;
                    case 0:
                        _this.posX = _this.posX;
                        break;
                    case 1:
                        _this.posX += 1;
                        _this.div.classList.remove('dir270', 'dir90', 'dir0', 'dir180');
                        _this.div.classList.add('dir90');
                        break;
                    default:
                }
            }

            if (_this.posY <= 0)
                _this.posY = canvas1.height- _this.height - 1;
            else if (_this.posY >= canvas1.height-_this.height)
                _this.posY = 1;
            else
            {
                switch (dirY)
                {
                    case -1:
                        _this.posY -= 1;
                        _this.div.classList.remove('dir270', 'dir90', 'dir0', 'dir180');
                        _this.div.classList.add('dir0');
                        break;
                    case 0:
                        _this.posY = _this.posY;
                        break;
                    case 1:
                        _this.posY += 1;
                        _this.div.classList.remove('dir270', 'dir90', 'dir0', 'dir180');
                        _this.div.classList.add('dir180');
                        break;
                    default:
                }
            }

            _this.div.style.left = _this.posX + 'px';
            _this.div.style.top = _this.posY + 'px';
        }, 10)
    }
}
function choosePos(number) { return Math.round(Math.random() * number) }

for (var i = 0; i < catsTotal; i++)
{
    var cat1 = new cat ( 50, 50, canvas1.width/2, canvas1.height/2, 10 );
    cats.push(cat1);
    cat1.create();
    cat1.direction();
}
