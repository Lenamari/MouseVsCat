var rottenCheeses = [],
    rottenTotal = 7;

// Create cheese object
var rottenCheese = function(width, height, posX, posY)
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
        this.div = document.createElement('div');
        this.div.classList.add('rotten-cheese');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);
    }
    this.update = function()
    {
        this.posX = randomX();
        this.posY = randomY();

        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';
    }
}

for (var i = 0; i < rottenTotal; i++)
{
    var rottenCheese1 = new rottenCheese ( 50, 50, randomX(), randomY() );
    rottenCheeses.push(rottenCheese1);
    rottenCheese1.create();
}
