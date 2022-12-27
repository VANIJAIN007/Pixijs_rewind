import { BaseTexture, Loader, Rectangle, Texture } from "./lib/pixi.mjs";

export let resources;
export const assets = {
  baseUrl: "./assets",
  images: [
    {
      name: "goku_blue",
      url: "gokublue.jpg",
    },
    {
      name: "goku_ui",
      url: "ultraInstinct.jpg",
    },
    {
      name: "vegita_blue",
      url: "vegitaBlue.jpg",
    },
    {
      name: "vegita_super_blue",
      url: "vegitaSuperBlue.jpg",
    },
    {
      name: "ken",
      url: "kenMasters.png",
    },
    {
      name: "goku-ss",
      url: "ssgoku.png",
    },
    {
      name: "dino",
      url: "dino.json",
    },
  ],
};

const w = 52;
const h = 93;
export const animationsSS = {
  still: [[0, 0, w, h]],
  idle: [
    [0, 0, w, h],
    [w, 0, w, h],
    [w * 2, 0, w, h],
  ],
  punch: [
    [0, 90, 62, 85],
    [62, 90, 65, 85],
    [125, 90, 65, 85],
    [190, 90, 65, 85],
  ],
};

export const animationsKen = {
  fire: [
    [0, 0, w, 75],
    [70, 0, w, 75],
    [140, 0, w, 75],
    [210, 0, w, 75],
  ],
  idle: [
    [0, h + 1, w, h],
    [70, h + 1, w, h],
    [140, h + 1, w, h],
    [210, h + 1, w, h],
  ],
};

export const dinoAnimFrames = {
  idle: [
    "Idle (1).png",
    "Idle (2).png",
    "Idle (3).png",
    "Idle (4).png",
    "Idle (5).png",
    "Idle (6).png",
    "Idle (7).png",
    "Idle (8).png",
    "Idle (9).png",
    "Idle (10).png",
  ],
  walk: [
    "Walk (1).png",
    "Walk (2).png",
    "Walk (3).png",
    "Walk (4).png",
    "Walk (5).png",
    "Walk (6).png",
    "Walk (7).png",
    "Walk (8).png",
    "Walk (9).png",
    "Walk (10).png",
  ],
};

export function preload(assetsList, onComplete) {
  const loader = Loader.shared;
  if (assetsList.baseUrl) {
    loader.baseUrl = assetsList.baseUrl;
  }
  loader.onProgress.add(showProgress);
  loader.onComplete.add(setResources);
  loader.add(assetsList.images).load(onComplete);
  return loader;
}

export function getResourceById(id) {
  return resources[id];
}

export function getTextureById(id) {
  return resources[id].texture;
}

export function getSSAnimTextures(assetId, animId) {
  const baseTexture = new BaseTexture(resources[assetId].url);
  const textures = [];
  animationsSS[animId].forEach((frame) => {
    textures.push(new Texture(baseTexture, new Rectangle(...frame)));
  });
  return textures;
}

export function getDinoTextures(assetId, animId) {
  const textures = [];
  const atlas = resources[assetId];
  dinoAnimFrames[animId].forEach((frame) => {
    textures.push(atlas.textures[frame]);
  });
  return textures;
}

export function getTextures(id,  animId) {
  const atlas = app.loader.resources[id]
  const frames = atlas.data.animations[animId];
  const textures = [];
  frames.forEach(frame => {
      textures.push(atlas.textures[frame])
  });
  console.log(textures.length);
  return textures;
}

const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");

function showProgress(l) {
  pBar.style.width = l.progress * 2 + "%";
  pText.innerText = l.progress + "%";
  if (l.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);
  }
  console.log(l.progress);
}

function addAssets(loader, assets) {
  assets.forEach((asset) => {
    loader.add(asset);
  });
}

function setResources(loader, resList) {
  console.log("setting resources", resList);
  resources = resList;
}
