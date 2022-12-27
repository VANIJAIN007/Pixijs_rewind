import { Application, Sprite } from "pixi.js";
import { gsap } from "gsap";
import * as PIXI from "pixi.js";

export class Game extends Application {
  private spin: boolean;
  private sliceAngle = 360 / 7;
  loader: any;
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
        { name: "wheel", url: "assets/wheel.png" },
        { name: "pointer", url: "assets/pointerf1.png" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
//   var arr1=[100,200,300,400,500,600,700];

  onLoad(): void {
    const wheel = new Sprite(this.loader.resources["wheel"].texture);
    const pointer=new Sprite(this.loader.resources['pointer'].texture);
    wheel.anchor.set(0.5);
    pointer.anchor.set(0.5);
    // console.log("pointer"+pointer);
    pointer.pivot.x=-400;
    pointer.pivot.y=-20
    wheel.x = this.screen.width / 2;
    wheel.y = this.screen.height / 2;
    this.stage.addChild(wheel);
    this.stage.interactive = false;
    wheel.interactive = true;
    // wheel.buttonMode = true;
    // console.log(this.stage);
    this.stage.addChild(pointer);
    wheel.on("pointerup", () => {
      let random = Math.floor(Math.random() * 7);
      console.log(random);
      let stopAngle = random * this.sliceAngle;
      gsap.fromTo(
        wheel,
        { angle: 0 },
        { angle: 3600 + stopAngle, duration: 5, ease: "expo.out" }
        
      );

      const my_function_1 = setTimeout(myStfun.bind(this),5000);

      function myStfun():void{
        var arr:number[]=[400,300,200,600,700,100,500];
        let message = new PIXI.Text("You Won"+arr[random]);

        this.stage.addChild(message);

        setTimeout(display,3000);
        function display():void{
            message.visible=false;
        }
      }
    

    //   var arr=[100,200,300,400,500,600,700];
    //   var a=arr[Math.floor(Math.random()*arr.length)];
    // //   console.log(a);

    //   for(var i=0;i<arr.length;i++){
         
    //   }
      
    //   let prize=a-Math.floor(stopAngle/(360));
    //   console.log("My prize"+prize);
    //   console.log(stopAngle);
    //   winPrize();
    
    //   console.log(this.sliceAngle);
    });
    // function winPrize(){
    //   let a=document.getElementById("win").innerHTML="YOU WON";
    //   this.stage.addChild(a);
        
    // }
    var text = new PIXI.Text("100 coins", {
      // font : '12px Arial',
      fill: 0x77777,
      align: "left",

      // width: 82
      //   cacheAsBitmap: true, // for better performance
    });
    text.pivot.x=-100;
    text.pivot.y=0;
    wheel.addChild(text);


    var text1 = new PIXI.Text("200 coins", {
      
      fill: 0x77777,
      align: "center",
    });
    text1.pivot.x=200.7;
    text1.pivot.y=5.8;
    wheel.addChild(text1);


    var text2 = new PIXI.Text("300 coins", {
      
      fill: 0x77777,
      align: "center",
    });
    text2.pivot.x=200;
    text2.pivot.y=130;
    wheel.addChild(text2);

    var text3 = new PIXI.Text("400 coins", {
      
      fill: 0x76667,
      align: "center",
    });
    text3.pivot.x=50;
    text3.pivot.y=180;
    wheel.addChild(text3);

    var text4 = new PIXI.Text("500 coins", {
      
      fill: 0x76667,
      align: "center",
    });
    text4.pivot.x=-60;
    text4.pivot.y=120;
    wheel.addChild(text4);

    var text5 = new PIXI.Text("600 coins", {
      
        fill: 0x76667,
        align: "center",
      });
      text5.pivot.x=130;
      text5.pivot.y=-130;
      wheel.addChild(text5);

      var text6 = new PIXI.Text("700 coins", {
      
        fill: 0x76667,
        align: "center",
      });
      text6.pivot.x=-10;
      text6.pivot.y=-130;
      wheel.addChild(text6);
    
  }

  // stage(stage: any) {
  //     throw new Error('Method not implemented.');
  // }
}
