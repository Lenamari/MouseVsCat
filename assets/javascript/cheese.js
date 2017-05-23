var cheeses = [],
    cheesesTotal = 5;

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

    // Methods
    this.verification = function()
    {
        do
        {
            var samePos = false;
            for (var i = 0; i <= canvas1.positions.length -1 ; i++)
            {
                if
                (
                    canvas1.positions[i][0] == this.posX || canvas1.positions[i][1] == this.posY
                )
                {
                    this.posX = randomX();
                    this.posY = randomY();
                    samePos = true;
                }
                else
                {
                    samePos = false;
                }
            }
        } while (samePos == true);
    }
    this.create = function()
    {
        this.verification();
        this.div = document.createElement('div');
        this.div.classList.add('cheese');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.top = this.posY + 'px';
        this.div.style.left = this.posX + 'px';

        var canvas = container.querySelector('.canvas');
        canvas.appendChild(this.div);

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
for (var i = 0; i < 20; i++)
{
    var cheese1 = new cheese ( 50, 50, 20, 20 );
    cheese1.create();
    cheeses.push(cheese1);
}
