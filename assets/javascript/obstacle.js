var obstacles = [],
    obstaclesTotal = 10;

// Create obstacle object
var obstacle = function(width, height, posX, posY)
{
    this.div;
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;

    this.create = function()
    {

        this.div = document.createElement('div');
        this.div.classList.add('obstacle');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
        obstacles.push(this);
    }
}

// Create obstacles
for (var i = 0; i < obstaclesTotal; i++) {
    var obstacle1 = new obstacle (50, 50, randomX(), randomY() );
    obstacle1.create();
}
