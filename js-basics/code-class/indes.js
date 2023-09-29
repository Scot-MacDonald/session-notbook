// Let's keep learning
console.log("Hello Scot");

console.clear();

console.log("error");

const title = document.querySelector("h1");
console.log("title", title);

const paragraph = document.querySelector('[data-js="paragraph"]');
console.log("paragraph: ", paragraph);

title.classList.add("dark");
title.classList.remove("dark");

const alertButton = document.querySelector('[data-js="color-button"]');
console.log("alert button:", alertButton);

alertButton.addEventListener("click", () => {
  paragraph.classList.toggle("alert");
});

const secondParagraph = document.querySelector('[data-js="secondParagraph"]');
console.log("secondParagraph: ", secondParagraph);

const alertButton2 = document.querySelector('[data-js="color-bt"]');
console.log("alert button:", alertButton2);

alertButton2.addEventListener("click", () => {
  secondParagraph.classList.toggle("alert");
});
