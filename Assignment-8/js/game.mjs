import { AnimatedSprite, Application, Container } from "./lib/pixi.mjs";
import { assets, getDinoTextures, getSSAnimTextures, preload } from "./Preloader.mjs";

export class Game extends Application {
    constructor(options) {
        super(options);
        this.background = new Container();
        this.animations = new Container();
        this.stage.addChild(this.background);
        this.stage.addChild(this.animations);

        preload(assets, this.onLoadComplete.bind(this));
    }

    onLoadComplete() {
        console.log('loading complete');
        const goku = new AnimatedSprite(getSSAnimTextures('goku-ss', 'punch'));
        goku.animationSpeed = 0.125;
        goku.play();
        this.animations.addChild(goku);

        const dino = new AnimatedSprite(getDinoTextures('dino', 'walk'));
        dino.play();
        dino.animationSpeed = 0.125;
        dino.anchor.y = 1;
        dino.y = this.screen.height;
        this.animations.addChild(dino);

    }
}