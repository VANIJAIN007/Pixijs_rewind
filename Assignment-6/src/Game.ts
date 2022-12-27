import { Application, Sprite,LoaderResource } from 'pixi.js';
import { gsap } from "gsap";
const PIXI=require('pixi.js');
import { sound } from '@pixi/sound';
// import * as PIXI from "pixi.js";

export class Game extends Application {
  
  constructor(opts: any) {
    super(opts);
    this.onPlayButton();

  }
  protected onPlayButton():void{
    const playButton=PIXI.Sprite.from('assets/switch-off.png');
    playButton.height=100;
    playButton.x=500,
    playButton.y=300
    playButton.width=100;
    playButton.interactive=true;
    playButton.buttonMode=true;
    playButton.on('click',()=>{

      const onImage=PIXI.Sprite.from('assets/switch-on.png');

      // const sound=PIXI.Sprite.from('assets/sound1.mp3');
      sound.add("sound1","assets/sound1.mp3");
      sound.play("sound1");
      onImage.interactive=true;

      onImage.height=100;
      onImage.width=100;
      onImage.buttonMode=true;
      onImage.x=500;
      onImage.y=300;
      // sound.play();
      console.log("clicked");
      this.stage.addChild(onImage);
      onImage.on('click',()=>{this.stopButton();})
    });
    this.stage.addChild(playButton);
  

  }
  protected stopButton():void{
    const playButton1=PIXI.Sprite.from('assets/switch-off.png');
    // sound.add("sound1","assets/sound1.mp3");

      sound.stop("sound1");
    playButton1.height=100;
    playButton1.x=500,
    playButton1.y=300
    playButton1.width=100;
    playButton1.interactive=true;
    playButton1.buttonMode=true;
    this.stage.addChild(playButton1);
    playButton1.on('click',()=>{
      
      this.onPlayButton();
    })
  }
}
