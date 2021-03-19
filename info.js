"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  gsap.registerPlugin(ScrollTrigger);

  //animations for text in all sections
  gsap.from("#intro .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#intro",
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
      trigger: "#details",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
  gsap.from("#colors .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#colors",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
  gsap.from("#extras .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#extras ",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
  gsap.from("#edit_text .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#edit_text ",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
  gsap.from("#try_it .fromLeft", {
    duration: 1,
    keyframes: [
      {
        opacity: 0,
        xPercent: -10,
        yPercent: 100,
        offset: 0,
      },
      {
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        offset: 1,
      },
    ],
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#try_it ",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
  gsap.from("#details .fromRight", {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#details ",
      toggleActions: "restart none none reset",
      start: "center 90%",
    },
  });

  //   color dots animation
  gsap.from("#color_dots", {
    duration: 2,
    iterations: 1,
    ease: "cubic-bezier(.25,.12,.61,1.51)",
    keyframes: [
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
        offset: 0.95,
      },
      {
        transform: "rotate(0)",
        opacity: 1,
        offset: 1,
      },
    ],
    scrollTrigger: {
      trigger: "#color_dots",
      toggleActions: "restart none none reset",
      start: "center 70%",
    },
  });
}
