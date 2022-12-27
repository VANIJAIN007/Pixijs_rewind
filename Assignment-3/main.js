const game = new PIXI.Application({
  width: 1550,
  height: 720,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);
loadAssets([

  { name: "imageButton", url:"assets/forwardButton.png"},
  { name: "imageDisplay",url:"assets/imageDisplay.jpg"},
  { name: "imageView",url:"assets/img5.png"},
  { name: "image1",url:"assets/image1.png"},
  { name: "image2",url:"assets/image2.png"},
  { name: "image3",url:"assets/image3.png"},
  { name: "closeButtonImage",url:"assets/backwardButton.png"}
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

const arr=["image1","image2","image3"];
console.log(arr.length);
let x=new Array()
var index=0;
var index1=arr.length-1;
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
    imageButton.x=1380
    imageButton.y=300;
    imageButton.buttonMode=true;
    imageButton.interactive=true;

    imageButton.on("click",()=>{
      
        var images=arr[index];
        x.push(arr[index]);
        const image=PIXI.Sprite.from(resources[images].texture);
        imageDisplay.visible=false;
      imageButton.visible=true;
      image.scale.set=0.5;
      image.x=200;
      image.y=50;
      image.width=1180;
      image.height=500;
      game.stage.addChild(image);
      console.log(x);
      index++;
      if(index==arr.length){
        index=0;
      }
      console.log(index);
      
      // console.log("clicked");
      // const imageView=PIXI.Sprite.from(resources['imageView'].texture);

      // imageDisplay.visible=false;
      // imageButton.visible=true;
      // imageView.scale.set=0.5;
      // imageView.x=200;
      // imageView.y=50;
      // imageView.width=1180;
      // imageView.height=500;
      // game.stage.addChild(imageView);
      // if(index>arr.length){
      //   index=1;
      // }

      // const image=PIXI.Sprite.from(resources['image1'].texture);
        
      // index++;
      // image.scale.set=0.5;
      // image.x=200;
      // image.y=50;
      // image.width=1180;
      // image.height=500;
      // game.stage.addChild(image);

      

      


      const closeButton=PIXI.Sprite.from(resources['closeButtonImage'].texture);
      closeButton.scale.set(0.2);
      closeButton.x=100;
      closeButton.y=300;
      closeButton.height=100;
      closeButton.width=100;
      closeButton.buttonMode=true;
      closeButton.interactive=true;
      game.stage.addChild(closeButton);
      console.log("initialIndex"+index1)

      closeButton.on("click",()=>
      {
        
        x.pop();
        var index2=x.length;
        // if(index1==0){
        //   console.log("index0"+index1)
        //   index1=arr.length-1;
        // }
        // if(index1==arr.length){
        //   console.log("indexarr"+index1)
        //   index1--;;
        // }
        // if(index1==arr.length-1){
        //   index1--;
        // }
        // console.log("indexback"+index1)
        var imageBack=x.pop();
        console.log(imageBack);
        console.log("closeButton");
        // imageDisplay.visible=true;
        // imageButton.visible=true;
        // imageView.visible=false;
        // closeButton.visible=false;
        const imageB=PIXI.Sprite.from(imageBack).texture;
        // console.log("index"+index1);
        
        imageB.scale.set=0.5;
        imageB.x=200;
        imageB.y=50;
        imageB.width=1180;
        imageB.height=500;
        game.stage.addChild(imageB);

        // index1--;
        // console.log(index1);
        


      })



    })
    game.stage.addChild(imageButton);

    const imageDisplay=PIXI.Sprite.from(resources['imageDisplay'].texture);
    imageDisplay.scale.set(0.2);
    imageDisplay.width=1180
    imageDisplay.height=500
    imageDisplay.x=200;
    imageDisplay.y=50;
    game.stage.addChild(imageDisplay);

    
}