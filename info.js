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
    },
  });
  gsap.from("#try_it .fromLeft", {
    xPercent: -10,
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease-in",
    scrollTrigger: {
      trigger: "#try_it .fromLeft",
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
      trigger: "#details .fromRight",
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

// the tshirt animation

// gsap.to("#the_shirt", {
//   y: "200vh",
//   scrollTrigger: {
//     trigger: "#the_shirt",
//     scrub: true,
//     markers: true,
//     pin: true,
//     start: "top 0%",
//     end: "bottom 200vh",
//   },
// });
