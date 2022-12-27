import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        // resizeTo: gameDiv,
        width : innerWidth,
        height : innerHeight,
        backgroundColor: 0xFFE476,
        sharedLoader: true,
        sharedTicker: true
    });
    gameDiv.appendChild(app.view);
}