var wines = [];

// Create cheese object
var wine = function(width, height, posX, posY)
{
    // Properties
    this.width = width;
    this.height = height;
    this.dirX;
    this.posX = posX;
    this.posY = posY;
    this.div;

    // Methods
    this.create = function()
    {
        wines.push(this);

        this.div = document.createElement('div');
        this.div.classList.add('wine');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }
}

for (var i = 0; i <= 5; i++)
{
    var wine1 = new wine ( 50, 50, randomX(), randomY() );
    wine1.create();
}
