var container = document.querySelector('.container');

// Create canvas object
var canvas = function(width, height)
{
    // Properties
    this.width = width;
    this.height = height;

    // Methods
    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.classList.add('canvas');
        container.appendChild(this.div);
    }
}
// New canvas
var canvas1 = new canvas (1200, 500);
canvas1.create();
