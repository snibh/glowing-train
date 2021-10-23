nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;


function preload() {



}
function setup() {

video = createCapture(VIDEO);
video.size(550,500);
Canvas = createCanvas(550,550);
Canvas.position(560,150);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);

}
function modelloaded() {

console.log("succes posenet");

}
function draw() {

background('#969A97');
fill('#FFC0CB');
stroke('#FFC0CB');
square(nosex,nosey,difference);


}
function gotPoses(results) {

if(results.length > 0)
{
  console.log(results);
  nosex = results[0].pose.nose.x;
  nosey = results[0].pose.nose.y;
  leftwristx = results[0].pose.leftWrist.x;
  rightwristx = results[0].pose.rightWrist.x;
  difference = floor(leftwristx - rightwristx);
}


}