import { Game } from './Game.mjs';

window.onload = () => {
    const app = new Game({
        width: 800,
        height: 600,
        backgroundColor:0x336699,
        resizeTo: window,
        sharedTicker: true,
        sharedLoader: true,
      });
    
      document.getElementById('game').appendChild(app.view);
    
    //   const ticker = Ticker.shared;
    //   ticker.add(app.update.bind(app));
}