noseX = 0;
noseY = 0;
function preload(){
    imgNose = loadImage("https://static.vecteezy.com/system/resources/thumbnails/001/202/567/small/mustache.png");
}
function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 450, 450);
    image(imgNose, noseX, noseY, 65, 50);
    
}
function take_snapshot(){    
    save('myCanvas.png');
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 55;
        noseY = results[0].pose.nose.y - 30;
    }
}