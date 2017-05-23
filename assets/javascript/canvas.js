var body = document.querySelector('body');
var container = document.querySelector('.container');
var scoreDiv = container.querySelector('.score > span'),
    score = 0;

// Create canvas object
var canvas = function(width, height)
{
    // Properties
    this.width = width;
    this.height = height;
    this.div;
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
// New canvas
var canvas1 = new canvas (1200, 500);
canvas1.create();

// Blackout
var blackOut = function()
{
    this.div;

    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.classList.add('black-out');
        body.appendChild(this.div);
    }
    this.remove = function()
    {
        this.div.remove();
    }
}
