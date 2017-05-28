var cats = [],
    catsTotal = 6;

// Create cat object
var cat = function(width, height, speed)
{
    // Properties
    this.width = width;
    this.height = height;
    this.posX = randomX();
    this.posY = randomY();

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

        // Add to canvas
        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
        cats.push(this);
    }
    this.direction = function()
    {
        var _this = this;
        var dirX, dirY;

        // Choose the direction of the cat every 2 seconds
        position = setInterval(function()
        {
            var newPos = [
                [-1, 0, 1],
                [-1, 0, 1]
            ]
            dirX = newPos[0][ choosePos(newPos.length) ];
            dirY = newPos[1][ choosePos(newPos.length) ];
        },2000)

        // Move the cat to the direction
        move = setInterval(function()
        {
            // Move on X axe
            if (_this.posX <= 0)
                _this.posX = canvas1.width - _this.width -1 ;
            else if (_this.posX >= canvas1.width-_this.width)
                _this.posX = 1;
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
            // Move on Y axe
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
            // Update position
            _this.div.style.left = _this.posX + 'px';
            _this.div.style.top = _this.posY + 'px';
        }, 10)
    }
}
function choosePos(number) { return Math.round(Math.random() * number) }

// Create cat objects
for (var i = 0; i < catsTotal; i++)
{
    var cat1 = new cat ( 50, 50, 10 );
    cat1.create();
    cat1.direction();
}
