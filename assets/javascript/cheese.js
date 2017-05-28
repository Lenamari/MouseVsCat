var cheeses = [],
    cheesesTotal = 100;

// Create cheese object
var cheese = function(width, height, posX, posY)
{

    // Properties
    this.div;
    this.width = width;
    this.height = height;

    this.posX = posX;
    this.posY = posY;

    // Array on every position of cheeses on canvas
    cheesePositions = [this.posX, this.posY, this.width, this.height];

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

        verification(this);

        canvas1.positions.push(cheesePositions);
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
for (var i = 0; i < cheesesTotal; i++)
{
    var cheese1 = new cheese (50, 50, randomX(), randomY());
    cheese1.create();
    cheeses.push(cheese1);
}
