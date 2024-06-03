function setup() {
    createCanvas(1000,1000);
    background("purple")
  }
  
  function draw() {
    stroke("black");
    fill (" pink");
    
    if (mouseIsPressed){
      circle (mouseX, mouseY, 25, 40)
    }
    
  }