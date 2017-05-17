var obstacle = function(width, height, posX, posY)
{
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;

    this.div;

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
    }
}

var obstacle1 = new obstacle( 10, 10, randomX(), randomY() )
obstacle.create();
