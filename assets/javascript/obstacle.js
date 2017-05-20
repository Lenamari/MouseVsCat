var obstacle = function(width, height, posX, posY)
{
    this.div;
    this.width = width;
    this.height = width;
    this.posX = randomX();
    this.posY = randomY();

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
    this.margin = function()
    {
        if (this.width ) {

        }
    }

}


for (var i = 0; i < 4; i++)
{
    var obstacle1 = new obstacle( 100, 100, randomX(), randomY() )
    obstacle1.create();
}
