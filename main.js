song="";
leftWristX=0;
rightWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
song=loadSound("music.mp3");
console.log('poseNet is installized');
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("model loaded successfully");
}
function draw(){
image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);}
    function gotposes(results){
   if(results.length > 0)
   {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX ="+leftWristX +"leftWristY = "+leftWristY);

    rightWristX = results[0].pose.righttWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX ="+rightWristX +"rightWristY = "+rightWristY);
   }
    }