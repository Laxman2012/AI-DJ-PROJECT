hope = "";
bones = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";
hope_status = "";
bones_status = "";

function preload()
{

  bones = loadSound("ImagineDragons-Bones.mp3");
  hope = loadSound("XXXTENTACION-Hope.mp3");

}

function setup()
{

   canvas = createCanvas(600 , 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   poseNet.on('pose' , gotPoses);


}

function draw()
{

   image(video , 0 , 0 , 600 , 500);

}

function modelLoaded()
{

  console.log('PoseNet is initialized');

}

function gotPoses(results)  
{

  if(results.length > 0)
  {

     console.log(results);
     scoreRightWrist = results[0].pose.keypoints[10].score;
     scoreLeftWrist = results[0].pose.keypoints[9].score;
     console.log("scoreRightWrist =" + scoreRightWrist +"scoreLeftWrist = " + scoreLeftWrist)

     leftWristx = results[0].pose.leftWrist.x;
     leftWristy = results[0].pose.leftWrist.y;
     console.log("leftWristX ="+leftWristx+"leftWristy ="+leftWristy);
     rightWristx = results[0].pose.rightWrist.x;
     rightWristy = results[0].pose.rightWrist.y;
     console.log("rightWristX ="+rightWristx+"rightWristy ="+rightWristy);

  }

}

