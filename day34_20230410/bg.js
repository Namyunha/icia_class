const bg = ["ba.webp", "qa.webp", "za.webp", "ha.webp", "qq.png"];
const body = document.querySelector("body");
const img = document.createElement("img");
const bgImg = bg[Math.floor(Math.random() * bg.length)];

img.alt = "Background image";
img.src = `../images/${bgImg}`;

document.body.style.backgroundImage = `url('../images/${bgImg}')`;

document.body.style.backgroundSize = "cover";
document.body.style.position = "center center";
