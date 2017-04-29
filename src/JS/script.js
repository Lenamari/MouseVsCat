console.log('Yo');

var mouse = function(posY, posX, vitesse, couleur){
  //propriétés
  this.posY = posX;
  this.posX = posY;
  this.vitesse = vitesse;
  this.couleur = couleur;
  this.direction;
  this.queue = new Array();
  this.point;
  this.enVie = true;
  this.div;

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
