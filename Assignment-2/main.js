const game = new PIXI.Application({
  width: 1550,
  height: 720,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([

  { name: "imageButton", url:"assets/Stop_Down.png"},
  { name: "imageDisplay",url:"assets/imageDisplay.jpg"},
  { name: "imageView",url:"assets/img5.png"},
  { name: "closeButtonImage",url:"assets/closeButton.png"}
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
function start(loader, resources) {
    // console.log('params ', arguments);
    // const back = PIXI.Sprite.from(resources['back'].texture);
    // back.scale.set(0.2);
    // game.stage.addChild(back);
    // const smily = new PIXI.Texture(resources['front'].texture,
    // new PIXI.Rectangle(0,0,150,150));
    // const front = PIXI.Sprite.from(smily);
    // // front.scale.set(0.2);
    // game.stage.addChild(front);
    const imageButton=PIXI.Sprite.from(resources['imageButton'].texture);
    imageButton.scale.set(0.5);
    imageButton.x=720
    imageButton.y=550;
    imageButton.buttonMode=true;
    imageButton.interactive=true;
    
    imageButton.on("click",()=>{
      console.log("clicked");
      imageDisplay.visible=false;
      imageButton.visible=false;

      const imageView=PIXI.Sprite.from(resources['imageView'].texture);
      imageView.scale.set=0.5;
      imageView.x=50;
      imageView.y=50;
      imageView.width=1280;
      imageView.height=500;
      game.stage.addChild(imageView);

      const closeButton=PIXI.Sprite.from(resources['closeButtonImage'].texture);
      closeButton.scale.set(0.2);
      closeButton.x=1380;
      closeButton.y=30;
      closeButton.height=50;
      closeButton.width=50;
      closeButton.buttonMode=true;
      closeButton.interactive=true;
      game.stage.addChild(closeButton);

      closeButton.on("click",()=>
      {
        console.log("closeButton");
        imageDisplay.visible=true;
        imageButton.visible=true;
        imageView.visible=false;
        closeButton.visible=false;
      })



    })
    game.stage.addChild(imageButton);

    const imageDisplay=PIXI.Sprite.from(resources['imageDisplay'].texture);
    imageDisplay.scale.set(0.2);
    imageDisplay.width=1380
    imageDisplay.height=500
    imageDisplay.x=50;
    imageDisplay.y=50;
    game.stage.addChild(imageDisplay);

    
}