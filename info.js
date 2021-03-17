"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#intro .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#intro .fromLeft",
      toggleActions: "restart none none reset",
    },
  });
  gsap.from("#details .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#details .fromLeft",
      toggleActions: "restart none none reset",
      start: "center 70%",
      markers: true,
    },
  });
  gsap.from("#colors .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#colors .fromLeft",
      toggleActions: "restart none none reset",
      start: "center 70%",
      markers: true,
    },
  });
  gsap.from("#extras .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#extras .fromLeft",
      toggleActions: "restart none none reset",
      start: "center 70%",
      markers: true,
    },
  });
  gsap.from("#edit_text .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#edit_text .fromLeft",
      toggleActions: "restart none none reset",
      start: "center 70%",
      markers: true,
    },
  });
  gsap.from("#details .fromRight", {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#details .fromRight",
      toggleActions: "restart none none reset",
      start: "center 90%",
      markers: true,
    },
  });

  //   color dots animation

  const properties = {
    duration: 1500,
    iterations: 1,
    easing: "cubic-bezier(.25,.12,.61,1.51)",
  };

  const keyframes = [
    {
      transform: "rotate(-90deg)",
      opacity: 0,
      offset: 0,
    },
    {
      transform: "rotate(0)",
      opacity: 1,
      offset: 0.8,
    },
    {
      transform: "rotate(2deg)",
      opacity: 1,
      offset: 0.9,
    },
    {
      transform: "rotate(0)",
      opacity: 1,
      offset: 1,
    },
  ];

  document.querySelector("#color_dots").animate(keyframes, properties);
}

// the tshirt animation

// gsap.to("#the_shirt", {
//   y: "0px",
//   easing: "ease-in-out",
//   scrollTrigger: {
//     trigger: "#the_shirt",
//     scrub: true,
//     markers: true,
//     start: "top 75%",
//     end: "bottom 25%",
//     pin: true,
//   },
// });
