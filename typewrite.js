"use strict";

document.addEventListener("DOMContentLoaded", init);

let text;
let showtext;
let container = document.querySelector(".typewritten");
let i = 1;
let done = false;

function init() {
  console.log("init");

  //get text
  text = container.textContent;

  //remove text
  container.innerHTML = "";
  i = 1;
  done = false;
  writetext();
}

function writetext() {
  console.log("writetext");

  //loop - show n'th letter, time, increment, more letters?
  showtext = text.substring(0, i);
  container.textContent = showtext;
  if (i < text.length) {
    i++;
    setTimeout(writetext, 300);
  } else if (i == text.length) {
    done = true;
  }
  if (done == true) {
    init();
  }
}
