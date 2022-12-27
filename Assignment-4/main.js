// import * as particles from '@pixi/particle-emitter'
const game = new PIXI.Application({
  width: 1550,
  height: 720,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([

  // { name: "imageButton", url:"assets/forwardButton.png"},
  { name: "imageDisplay",url:"assets/imageDisplay.jpg"},
  // { name: "imageView",url:"assets/img5.png"},
  // { name: "image1",url:"assets/image1.png"},
  // { name: "image2",url:"assets/image2.png"},
  // { name: "image3",url:"assets/image3.png"},
  // { name: "closeButtonImage",url:"assets/backwardButton.png"}
  { name: "jackpotButton",url:"assets/jackpot1.png"},
  { name: "jackpotImage",url:"assets/jackpotImage.png"},
  { name: "coinImage",url:"assets/coinImage.png"}

], start);
//------------------------------


const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");


function preload(e) {
  pBar.style.width = e.progress * 2 + "%";
  pText.innerText = e.progress + "%";
  if (e.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);
  }
  console.log(e.progress);
}

function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
const sprites=new PIXI.PaticleContainer(10000,{
  scale:true,
  position:true,
  rotation:true,
  uvs: true,
    alpha: true,
});
// app.stage.addChild(sprites);
// const arr=[];
// const totalSprites=app.renderer instanceof PIXI.Renderer ? 10000 : 100;
function start(loader, resources) {

    const jackpotButton=PIXI.Sprite.from(resources['jackpotButton'].texture);

    jackpotButton.scale.set(0.5);
    jackpotButton.x=690
    jackpotButton.y=580;
    jackpotButton.buttonMode=true;
    jackpotButton.interactive=true;

    jackpotButton.on("click",()=>{
     const jackpotImage=PIXI.Sprite.from(resources['jackpotImage'].texture);
      // for(let i=0;i<totalSprites;i++){
        const coinImage=PIXI.Sprite.from(resources['coinImage'].texture);
        console.log("entered");
        // coinImage.scale.set(0.8+Math.random()*0.3);
        // coinImage.x=Math.random()*app.screen.width;
        // coinImage.direction=Math.random()*Math.PI*2;
        // coinImage.y=Math.random()*app.screen.height;
        coinImage.height=100;
        coinImage.width=100;
        // coinImage.anchor.set(0.5);
        // arr.push(coinImage);
        // sprites.addChild(coinImage);
 
      
      jackpotImage.scale.set(0.2);
      jackpotImage.x=100;
      jackpotImage.y=300;
      jackpotImage.height=100;
      jackpotImage.width=100;
      jackpotImage.buttonMode=true;
      jackpotImage.interactive=true;
      imageDisplay.visible=false;
      game.stage.addChild(jackpotImage);
      game.stage.addChild(coinImage);

      console.log("initialIndex"+index1)
      

    //   closeButton.on("click",()=>
    //   {
      
    //     if(index1==0){
    //       console.log("index0"+index1)
    //       index1=arr.length-1;
    //     }
    //     if(index1==arr.length){
    //       console.log("indexarr"+index1)
    //       index1--;;
    //     }
    //     if(index1==arr.length-1){
    //       index1--;
    //     }
    //     console.log("indexback"+index1)
    //     var imageBack=arr[index1];
    //     console.log(imageBack);
    //     console.log("closeButton");
    //     // imageDisplay.visible=true;
    //     // imageButton.visible=true;
    //     // imageView.visible=false;
    //     // closeButton.visible=false;
    //     const imageB=PIXI.Sprite.from(imageBack).texture;
    //     console.log("index"+index1);

    //     imageB.scale.set=0.5;
    //     imageB.x=200;
    //     imageB.y=50;
    //     imageB.width=1180;
    //     imageB.height=500;
    //     game.stage.addChild(imageB);

    //     // index1--;
    //     // console.log(index1);
        


    //   })



     })
    game.stage.addChild(jackpotButton);

    const imageDisplay=PIXI.Sprite.from(resources['imageDisplay'].texture);
    imageDisplay.scale.set(0.2);
    imageDisplay.width=1180
    imageDisplay.height=500
    imageDisplay.x=200;
    imageDisplay.y=50;
    game.stage.addChild(imageDisplay);

    
    }

