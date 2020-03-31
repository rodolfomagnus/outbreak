var socket;

function setup() {
  // put setup code here
  createCanvas(200,200);
//  socket = io.connect('http://localhost:3000');
  socket = io.connect('http://outbreakwarfare.com/p5:3000');
  socket.on('mouse',newDrawing);
  background(51);
}

function newDrawing(data){
  console.log('receiving',data);
  noStroke();
  fill(255,0,100);
  ellipse(data.x,data.y,36,36);
}

function mouseDragged(){
  console.log(mouseX+','+mouseY);
  var data = {
    x:mouseX,
    y:mouseY
    }
    socket.emit('mouse',data)
   noStroke();
   fill(255);
   ellipse(mouseX,mouseY,36,36);
}

function draw() {
  // put drawing code here
//  background(51);
  fill(255);
//  ellipse(mouseX,mouseY,60,60);
}

