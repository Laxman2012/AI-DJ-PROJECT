hope = "";
bones = "";

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


}

function draw()
{

   image(video , 0 , 0 , 600 , 500);

}

