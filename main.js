function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(300, 300);
  video = createCapture(VIDEO);
  video.size(300, 300)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log('nose X =' +results[0].pose.nose.x);
        console.log('nose Y =' + results[0].pose.nose.y);
    }

}

function draw() {
  image(video, 0, 0, 300, 300);
}

function Take_Snapshot() {
  save('myFilterImage.png')
}