var cheeses = [],
    cheesesTotal = 10;

// Create cheese object
var cheese = function(width, height, posX, posY)
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
        this.div.classList.add('cheese');
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

// Create 10 cheeses
for (var i = 0; i < cheesesTotal; i++) {
    var cheese1 = new cheese ( 50, 50, randomX(), randomY() );
    cheeses.push(cheese1);
    cheese1.create();
}
