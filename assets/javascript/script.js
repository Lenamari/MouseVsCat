var container = document.querySelector('.container');

var canvas = function(width, height, color)
{
    this.width = width;
    this.height = height;
    this.color = color;

    this.create = function()
    {
        this.div = document.createElement('div');
        this.div.style.width = this.width + '%';
        this.div.style.height = this.height + '%';
        this.div.style.backgroundColor = this.color;

        container.appendChild(this.div);
    }
}

var canvas = new canvas (100, 100,"white");
canvas.create();

var mouse = function(posX, posY, speed, color)
{
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.color = color;

    this.direction = new Array();
    this.cross = new Array();
    this.point;
    this.isAlive = true;
    this.div;

    this.display = function()
    {
        this.div = document.createElement('div');
        this.div = setAttribute('class', 'mouse');
        this.div.style.top = this.posY + 'px';
    }


}


  //méthodes
  this.cross = new Array();
  this.afficher = function(){
      this.div = document.createElement("div");
      this.div.setAttribute("class","mouse");
      this.div.style.top=this.posY + "px";
      this.div.style.left=this.posX + "px";
      this.div.style.background=this.couleur;
      var body = document.querySelector("body");
      body.appendChild(this.div);
  };

  this.deplacer = function()
  {
    var _this = this;

    window.addEventListener('keypress',function(e){
      if (e.keyCode == _this.cross[0] )
      {
        _this.posY -= 10;
      }
      else if (e.keyCode == _this.cross[1])
      {
        _this.posX +=10;
      }
      else if (e.keyCode == _this.cross[2])
      {
        _this.posY += 10;
      }
      else if (e.keyCode == _this.cross[3])
      {
        _this.posX -= 10;
      }
      _this.div.style.top = _this.posY + "px";
      _this.div.style.left = _this.posX + "px";

    },false);
  };
}


var mouse1 = new mouse (10, 20, 5, "red");

mouse1.cross = [122,100,115,113];
mouse1.deplacer();

mouse1.afficher();
