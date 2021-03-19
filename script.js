"use strict";

// The model of all features
const features = {
  hoodie: false,
  text_1: false,
  text_2: false,
  long: false,
  half: false,
  onlyOne: false,
};

let paint;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  // register toggle-clicks
  document
    .querySelectorAll(".option")
    .forEach((option) => option.addEventListener("click", toggleOption));

  // register color input changes
  document
    .querySelector("input[type='color']")
    .addEventListener("input", clickColorInput);

  getSvgInfo();
}

function toggleOption(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;

  // Toggle feature in "model"
  features[feature] = !features[feature];

  // If long is on and half is already chosen, turn half off - same with half
  if (feature == "long" && features.half == true) {
    features.half = false;
    const targetForShort = document.querySelector(
      ".option[data-feature='half']"
    );
    turnFeatureOff(targetForShort, "half");
  } else if (feature == "half" && features.long == true) {
    features.long = false;
    const targetForShort = document.querySelector(
      ".option[data-feature='long']"
    );
    turnFeatureOff(targetForShort, "long");
  }
  // as above but with texts - so two cant be on at the same time
  if (feature == "text_1" && features.text_2 == true) {
    features.text_2 = false;
    const targetForShort = document.querySelector(
      ".option[data-feature='text_2']"
    );
    turnFeatureOff(targetForShort, "text_2");
  } else if (feature == "text_2" && features.text_1 == true) {
    features.text_1 = false;
    const targetForShort = document.querySelector(
      ".option[data-feature='text_1']"
    );
    turnFeatureOff(targetForShort, "text_1");
  }

  if (features[feature] === true) {
    turnFeatureOn(target, feature);
  } else if (features[feature] === false) {
    turnFeatureOff(target, feature);
  }
}

function turnFeatureOn(target, feature) {
  // Tried to make it so that user can only chouse one
  /*     if (features.long === true) {
        features.half = false;
    
    } else if (features.half === true) {
        features.long = false;
    
    } else if (features.text_1 === true) {
        features.text_2 = false;

    } else if (features.text_2 === true) {
        features.text_1 = false;

    } */

  //Select target and add chosen class
  target.classList.add("chosen");

  //Remove the hide class
  document.querySelector(`[data-feature="${feature}"`).classList.remove("hide");

  //Create new featureElement and add it to the list
  const newfeaturedElement = createFeatureElement(feature);
  document.querySelector("#selected ul").appendChild(newfeaturedElement);

  // feature added

  //FLIP
  const start = target.getBoundingClientRect();
  const end = newfeaturedElement.getBoundingClientRect();

  const diffx = start.x - end.x + "px";
  const diffy = start.y - end.y + "px";

  newfeaturedElement.style.setProperty("--diffx", diffx);
  newfeaturedElement.style.setProperty("--diffy", diffy);

  //Animation feature in
  newfeaturedElement.classList = "animate-feature-in";

  console.log(`Feature ${feature} is turned on!`);
}

function turnFeatureOff(target, feature) {
  target.classList.remove("chosen");

  const featuredElement = document.querySelector(
    `#selected [data-feature="${feature}"]`
  );

  const end = featuredElement.getBoundingClientRect();
  const start = target.getBoundingClientRect();

  const diffx = start.x - end.x + "px";
  const diffy = start.y - end.y + "px";

  featuredElement.style.setProperty("--diffx", diffx);
  featuredElement.style.setProperty("--diffy", diffy);

  featuredElement.offsetHeight;

  //Animation feature out
  featuredElement.classList = "animate-feature-out";

  //when animation is complete, remove featureElement from the DOM
  featuredElement.addEventListener("animationend", function () {
    featuredElement.remove();

    //Chose the feature element and hide it
    document.querySelector(`[data-feature=${feature}`).classList.add("hide");

    console.log(`Feature ${feature} is turned off!`);
  });
}

function clickColorInput() {
  if (paint !== undefined) {
    paint.style.fill = this.value;
    paint.style.stroke = "";
  }
}
// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  //Create an li element and add feature img into it
  const li = document.createElement("li");
  li.dataset.feature = feature;

  const img = document.createElement("img");
  img.src = `/images/feature_${feature}.png`;
  img.alt = capitalize(feature);

  //Add the li element
  li.append(img);

  return li;
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}

// All about color
function getSvgInfo() {
  interActivity();
}

function interActivity() {
  document.querySelectorAll(".interact").forEach((eachG) => {
    eachG.addEventListener("click", theClick);
    eachG.addEventListener("mouseover", theMouseover);
    eachG.addEventListener("mouseout", theMouseout);
  });

  document.querySelectorAll(".color_btn").forEach((each_BTN) => {
    each_BTN.addEventListener("click", colorClick);
  });
}

function theClick() {
  paint = this;

  this.style.fill = "grey";
}

function theMouseover() {
  this.style.stroke = "blue";
}

function theMouseout() {
  this.style.stroke = "none";
}

function colorClick() {
  if (paint != undefined) {
    paint.style.fill = this.getAttribute("fill");
  }
}