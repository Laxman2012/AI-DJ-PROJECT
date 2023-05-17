hope = "";
bones = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";
hope_status = "";
bones_status = "";
scoreLeftWrist = "";
scoreRightWrist = "";

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

   fill("#30D5C8");
   stroke("#30D5C8");

   hope_status = hope.isPlaying();
   bones_status = bones.isPlaying();

   if(scoreRightWrist > 0.2)
   {

      circle(rightWristx , rightWristy , 20)

      bones.stop();

      if(hope_status == false)
      {

        hope.play();
        document.getElementById("song").innerHTML = "Playing : Hope";

      }

   }


   if(scoreLeftWrist > 0.2)
   {

      circle(leftWristx , leftWristy , 20)

      hope.stop();

      if(bones_status == false)
      {

        bones.play();
        document.getElementById("song").innerHTML = "Playing : bones";

      }

   }

   
}

function play()
{
 
  song.play();
  song.setVolume(1);
  song.rate(1);

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

