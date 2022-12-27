import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    // const check:HTMLInputElement=<HTMLInputElement>document.getElementById('check');
    const app:Application = new Game({
        // resizeTo: gameDiv,
        height:720,
        width:1520,
        backgroundColor: 0x996633,
        sharedLoader: true,
        sharedTicker: true
    });
    // gameDiv.appendChild(check);
    gameDiv.appendChild(app.view);
}
