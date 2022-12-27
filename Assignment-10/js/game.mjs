import { Sprite, Texture, Rectangle, Text } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { FRAMES, getCard, HEIGHT, shuffle, WIDTH } from "./card.mjs";
import { getTextureById } from "./loader.mjs";

let cards;
let firstChoice;
let secondChoice;
export function start(app) {
  const { stage } = app;
  cards = drawCards(stage);
  stage.interactive = true;
  stage.on("pointerup", () => {
    if(cards.length == 0){
        stage.removeChildren();
        start(app);
    } else if (firstChoice === undefined) {
      firstChoice = cards.filter((v) => v.isOpen())[0];
      console.log("firstChoice", firstChoice);
    } else {
      stage.interactiveChildren = false;
      secondChoice = cards.filter((v) => v.isOpen());
      if (secondChoice[0].id === secondChoice[1].id) {
        setTimeout(() => {
          stage.removeChild(secondChoice[0].view);
          stage.removeChild(secondChoice[1].view);
          cards = cards.filter((c) => !c.isOpen());
          if (cards.length === 0) {
            let finalMessage = new Text('You cleared all cards in ##:##\nClick To Continue.');
            finalMessage.anchor.set(0.5);
            finalMessage.x = app.screen.width/2;
            finalMessage.y = app.screen.height/2;
            stage.addChild(finalMessage);
          }
          firstChoice = undefined;
          secondChoice = undefined;
          stage.interactiveChildren = true;
        }, 1000);
      } else {
        setTimeout(()=>{
        cards.forEach((c) => {
          c.reset();
        });
        firstChoice = undefined;
        secondChoice = undefined;
        stage.interactiveChildren = true;
    }, 500);
      }
    }
  });
}

function drawCards(stage) {
  let cardNum = 0;
  const cards = [];
  const offsetX = 10;
  const offsetXY = 10;
  const paddingX = 10;
  const paddingY = 10;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      for (let c = 0; c < 2; c++) {
        const card = getCard(cardNum, new Rectangle(...FRAMES[cardNum]));
        stage.addChild(card.view);
        cards.push(card);
      }
      cardNum++;
    }
  }
  shuffle(cards);
  let count = 0;
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      let card = cards[count];
      card.view.x = c * (WIDTH + paddingX) + offsetX;
      card.view.y = r * (HEIGHT + paddingY) + offsetXY;
      count++;
    }
  }
  return cards;
}
