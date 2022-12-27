import { Application, Sprite,LoaderResource } from 'pixi.js';
import { gsap } from "gsap";
const PIXI=require('pixi.js');
import { sound } from '@pixi/sound';
// import * as PIXI from "pixi.js";

export class Game extends Application {
  
  constructor(opts: any) {
    super(opts);
    this.onClick();


  }
  protected onClick():void{
    const box=PIXI.Sprite.from("assets/box.png");
    const check=PIXI.Sprite.from("assets/check.png");
    box.height=120;
    check.visible=false;
    box.x=180;
    box.y=180;
    box.width=120;
    box.interactive=true;
    this.stage.addChild(box);
    
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


    const newText=new PIXI.Text("Language Not Selected",style);
    newText.x=250;
    newText.y=230;
    this.stage.addChild(newText);

    // if()
    // const check:any=document.getElementById("check") as HTMLInputElement | null;
    // this.stage.addChild(check);
    box.on("click",()=>{
      const box1=PIXI.Sprite.from("assets/box.png");

      check.interactive=true;
      check.visible=true;
      check.width=10;
      check.height=10;
      check.x=220;
      check.y=250;
      newText.visible=false;
      const newText1=new PIXI.Text("Language Selected",style);
      newText1.x=250;
    newText1.y=230;
    newText1.visible=true
      check.on("click",()=>{
        this.onClick();

      })
      this.stage.addChild(check);
      this.stage.addChild(newText1);


     


      


    })
    
  }
  // protected uncheck():void{
  //   const check=PIXI.Sprite.from("assets/check.png");
  //   check.visible=false;
  //   new
  // }
    // const ele=document.getElementById('check');
    // console.log(ele);
    // const flag=false;
    
  
  
}
