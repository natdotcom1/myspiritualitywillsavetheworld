let bg;

//guys
let unloaded;
let shock;

let drk;
let lght;

let cash;
let shine;


let miku;
let shy;

let kitty;
let kitty3;

//text
let blnk;
let tc;
let hotb;
let puter;
let zak;

function setup() {
  createCanvas(1280, 700);
  
  bg = loadImage("pics/bg.jpg")
  
  //guys
  unloaded = loadImage("pics/unloaded.png")
  shock = loadImage("pics/shock.png")
  
  drk = loadImage("pics/medark.jpg")
  lght = loadImage("pics/melight.jpg")

  cash = loadImage("pics/cash.png")
  shine = loadImage("pics/shine.png")

  miku = loadImage("pics/miku.png")  
  shy = loadImage("pics/mikushy.png")


  kitty = loadImage("pics/kitty.png")
  kitty3 = loadImage("pics/kitty3.png")


  //text
  blnk = loadImage("text/textblank.png")
  tc = loadImage("text/textcash.png")
  hotb = loadImage("text/texthotbabes.png")
  puter = loadImage("text/textputer.png")
  zak = loadImage("text/textzak.png")
  
}

function draw() {
  imageMode(CENTER);

  image(bg,width/2, height/2)

 
  //me
  
  image(drk, 900, 170, 200, 300)
  if(mouseX < 1000 && mouseX > 800 && mouseY < 320 && mouseY > 20) 
   image(lght, 900, 170, 200, 300)
  

     //kitty 
  image(kitty, 175, 460, 406, 504)
  if(mouseX < 305 && mouseX > 35 && mouseY < 670 && mouseY > 255)
  image(kitty3, 175, 460, 406, 504)

    //unloaded
  image(unloaded, 400, 210, 312, 409)
  if(mouseX < 540 && mouseX > 260 && mouseY < 310 && mouseY > 15)
  image(shock, 400, 210, 312, 409)

       //miku
  image(miku, width/2, height/2, 602, 602)
       ///this is to make it blush when you hover but im not smart enough to figure it out i guess
  if(mouseX < 740 && mouseX > 550 && mouseY < 635 && mouseY > 60) 
  image(shy, width/2, height/2, 602, 602)

       //casheir 
  image(cash, 1100, 450, 409, 614)
  if(mouseX < 1280 && mouseX > 970 && mouseY < 700 && mouseY > 280)
  image(shine, 1100, 450, 409, 614)

  //

       //TEXT
       
       //kitty
  if(mouseX < 305 && mouseX > 35 && mouseY < 670 && mouseY > 255)
  image(hotb, width/2, 550, 750, 174)
       
       //blank
  if(mouseX < 540 && mouseX > 260 && mouseY < 310 && mouseY > 15)
  image(blnk, width/2, 550, 750, 174)
  
        //zak
  if(mouseX < 1000 && mouseX > 800 && mouseY < 320 && mouseY > 20) 
  image(zak, width/2, 550, 750, 174)

        //miku
  if(mouseX < 740 && mouseX > 550 && mouseY < 635 && mouseY > 60)
  image(puter, width/2, 550, 750, 174)


        //cahseir
if(mouseX < 1280 && mouseX > 970 && mouseY < 700 && mouseY > 280)
image(tc, width/2, 550, 750, 174)


}
