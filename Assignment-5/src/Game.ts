import { Application, Sprite,LoaderResource } from 'pixi.js';
import {Text,Graphics} from 'pixi.js';
import { gsap } from "gsap";
const PIXI=require('pixi.js');
// import * as PIXI from "pixi.js";

export class Game extends Application {
  
  constructor(opts: any) {
    super(opts);
    this.onText();

  }
  protected onText():void{
      const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
        lineJoin: 'round',
    });


    const newText=new PIXI.Text("Click Me",style);
    const newArrow=PIXI.Sprite.from('assets/rightArrowImage.png');
    const iconImage=PIXI.Sprite.from("assets/iconImage.png");
    const newArrow1=PIXI.Sprite.from('assets/rightArrow4.png');
    const background1=PIXI.Sprite.from('assets/gameImage1B.png');
    const background2=PIXI.Sprite.from('assets/gameImage2B.png');
    const background3=PIXI.Sprite.from('assets/gameImage3B.png');



    
    newText.x=70;
    newText.y=70;
    newArrow.x=220;
    newArrow.y=60;
    newArrow.height=70;
    newArrow.width=70;
    iconImage.height=100;
    iconImage.width=100;
    iconImage.y=200;
    iconImage.x=100;
    newArrow1.x=240;
    newArrow1.y=200;
    newArrow1.width=60;
      this.stage.addChild(newArrow);
      this.stage.addChild(newText);
      this.stage.addChild(iconImage);
      this.stage.addChild(newArrow1);
      newText.interactive=true;
      iconImage.interactive=true;
      
      newText.on('click',()=>{
        const style = new PIXI.TextStyle({
          fontFamily: 'Arial',
          fontSize: 36,
          fontStyle: 'italic',
          fontWeight: 'bold',
          fill: ['#FF0000', '#00ff99'], // gradient
          stroke: '#4a1850',
          strokeThickness: 5,
          dropShadow: true,
          dropShadowColor: '#000000',
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          wordWrap: true,
          wordWrapWidth: 440,
          lineJoin: 'round',
      });
      const newText1=new PIXI.Text("WELCOME TO GAME ZONE",style);

        console.log("up");
        background1.visible=true;
        background1.height=400;
        background1.x=250;
        background1.y=250;
        background1.width=1000;
        newText.visible=false;
        newArrow.visible=false;
        iconImage.visible=false;
        newArrow1.visible=false;
        newText1.x=600;
        newText1.y=70;
        this.stage.addChild(background1);
        this.stage.addChild(newText1);


      });

      iconImage.on("click",()=>{
        const style = new PIXI.TextStyle({
          fontFamily: 'Arial',
          fontSize: 36,
          fontStyle: 'italic',
          fontWeight: 'bold',
          fill: ['#FF0000', '#00ff99'], // gradient
          stroke: '#4a1850',
          strokeThickness: 5,
          dropShadow: true,
          dropShadowColor: '#000000',
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          wordWrap: true,
          wordWrapWidth: 440,
          lineJoin: 'round',
      });
      const newText2=new PIXI.Text("WELCOME TO NEW PAGE",style);

        background2.visible=true;
        background2.height=400;
        background2.x=250;
        background2.y=250;
        background2.width=1000;
        newText.visible=false;
        newArrow.visible=false;
        iconImage.visible=false;
        newArrow1.visible=false;
        newText2.x=600;
        newText2.y=70;
        this.stage.addChild(background2);
        this.stage.addChild(newText2);

      })

      
  }
}
