// const erklære en variabel med værdien burger, nav-links, nav-links li///
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  //Toggle Nav
  nav.classList.toggle("nav-active");

  //Animate Links (forEach går i gennem hvert link/Element)
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      //(hvis der allerede er en animation så fjernes den)
      link.style.animation = "";
    } else {
      //(hvis der ikke er en animation, så tilføjes den
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.4}s`;
    }
  });
  //Burger Animation (her fjernes eller påsættes toggle-klassen fra css)
  burger.classList.toggle("toggle");
});

// if/else gør hvad toggle gør behind the scenes //

// Index er en reference til rækkefølgen i en liste //

//${} når jeg brug for en variabel i en string. det tager værdien af index og dividerer det så jeg får aniamtioner med tidsforskel på .nav-links //

// () => er en funktion. //
