const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
export let resources;
function preload(e) {
  pBar.style.width = e.progress * 2 + "%";
  pText.innerText = e.progress + "%";
  if (e.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);
  }
  console.log(e.progress);
}

function setResources(loader, resList) {
    console.log('setting resources');
    resources = resList;
}

export function loadAssets(app, list, onLoadComplete) {
  app.loader.onProgress.add(preload);
  app.loader.onComplete.add(setResources)
  app.loader.add(list).load(onLoadComplete);
}

export function getResourceById(id) {
    return resources[id];
}

export function getTextureById(id) {
    return resources[id].texture;
}

