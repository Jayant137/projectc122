function preload(){

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(300, 300);
    webcam.hide();
  }
  
  function draw() {
    image(webcam, 70, 110, 380, 290);
    fill("red");
    circle(60, 100, 80);
    fill("lightgreen");
    rect(95, 90, 350, 20);
    fill("red");
    circle(450, 100, 80);
    fill("lightgreen");
    rect(50, 134, 20, 251);
    fill("lightgreen")
    rect(85, 390, 350, 20);
    fill("red");
    circle(60, 400, 80);
    fill("lightgreen")
    rect(440, 134, 20, 250);
    fill("red");
    circle(450, 400, 80);
  
  
  }
  
  function Snap() {
    save("selfie.png")
  }