import { formulario_error,  sendEmail } from "./funciones.js";

// Navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav_menu");
// Video
let video = document.querySelectorAll("video");
//Form
const fomulario = document.querySelector("#formulario");


menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
})

// Typewriter
let text_typewriter = document.querySelector('#typewriter');

let typewriter = new Typewriter(text_typewriter, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('VGR')
  .pauseFor(2500)
  .deleteChars(3)
  .typeString('Tu mejor opcion')
  .pauseFor(2500)
  .start();


video.forEach(e => e.addEventListener("click", () => {
  e.classList.toggle("video-active");

  if (e.paused) {
    e.play();
  } else {
    e.pause();
    e.currentTime = 0;
  }
}));

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;
  let mensaje = document.querySelector("#mensaje").value;

  if (nombre == "" || email == "" || telefono == "" || mensaje == "") {
    formulario_error(nombre);
  } else {
    sendEmail(e)
  }
})

