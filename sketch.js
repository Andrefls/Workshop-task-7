let walkers = [];
let bus;
let caminante1;
let painting;
let camino;


function setup() {

  createCanvas(500,750);
  background (255);
  caminante1 = loadImage ("images/caminante1.png");
  camino = loadImage ("images/walking.png");
  bus = loadImage ("images/Bus.png");
  

  for (i = 0; i < 2; i++){
    if (i == 0){
    let x = -300;
    let y = 0;
    walkers [i] = new Walker (x,y, bus,-2)
    } else {
    let x = width;
    let y = 0;
    walkers [i] = new Walker (x, y,caminante1, 2);
  }
}
}
function draw() {
  image (camino,0,0);
  for (x = 0; x < walkers.length; x++){
    walkers [x].step ();
    walkers [x].show ();
  }
}

class Walker {

  constructor (x,y, image, speed){
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed= speed;
  }

  step (){
    this.x += this.speed;
    if (this.x > width){
      this.x = -300;
    }
    if (this.x <-300)
    {this.x = width;
    }
  }

  show (){
    image (this.image, this.x, this.y);
  }
}