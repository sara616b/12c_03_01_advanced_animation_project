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

// PARTICLE ANIMATION
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let particleArray = [];
let factor = 10;
let heightOffset = 50;
let fontFactor = 60;
let radius = 150;

// HANDLE MOUSE
const mouse = {
  x: null,
  y: null,
  radius: radius
};

window.onresize = function () {
  initText();
};

function initText() {
  canvas.width = window.innerWidth;
  canvas.style.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.height = window.innerHeight;

  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = canvas.width / fontFactor + "px Verdana";
  ctx.fillText("SHIRT.IT", canvas.width / 2 / factor, heightOffset);
  textCoordinates = ctx.getImageData(0, 0, canvas.width / factor, canvas.height / factor);

  init();
  animate();
}

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particleArray = [];
  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 40) {
        let positionX = x;
        let positionY = y;
        particleArray.push(new Particle(positionX * factor, positionY * factor));
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  requestAnimationFrame(animate);
}

initText();