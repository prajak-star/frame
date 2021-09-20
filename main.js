
function frame(){

}

function preload(){
   picto=document.getElementById("fracet");
   if (picto=="1"){
      egami=loadImage("frame1.png");
   }
   if (picto=="2"){
      egami=loadImage("frame2.png");
   }
   if (picto=="3"){
      egami=loadImage("frame3.png");
   }
   if (picto=="4"){
      egami=loadImage("frame4.png");
   }
   if (picto=="5"){
      egami=loadImage("frame5.png");
   }
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
 
}


function draw(){
   image(egami,0,0,600,400);
   image(video,40,20,520,350);
}


function take_snapshot(){
   save("freshlyframedimage.png");
}

//   if (picto=="1"){ image(ame1,0,0,600,400);}//
//if (picto=="2"){ image(ame2,0,0,600,400);} //