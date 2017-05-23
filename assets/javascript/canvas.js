var body        = document.querySelector('body'),
    container   = document.querySelector('.container'),
    scoreDiv    = container.querySelector('.score > span'),
    score = 0;

// Create canvas object
var canvas = function(width, height)
{
    // Properties
    this.width = width;
    this.height = height;
    this.div;

    // Array that have every positions of every objects in the canvas
    this.positions = new Array();

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

// New canvas object
var canvas1 = new canvas (1200, 500);
canvas1.create();
