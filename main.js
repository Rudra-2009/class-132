img="";
Status="";
function preload() {
  img=loadImage('dog_cat.jpg');
}
function setup() {
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting objects";
}
function modelLoaded() {
  console.log("modelLoaded");
  Status=true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}
function draw() {
  image(img,0,0,640,420);
  fill('#630303');
  text("Dog",45,75);
  noFill();
  stroke("#630303");
  rect(30,60,450,350);
  
  fill('#630303');
  text("Cat",320,120);
  noFill();
  stroke("#630303");
  rect(300,90,270,320);
}