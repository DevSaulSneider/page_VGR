import { formulario_exitoso, formulario_error, formulario_errorEmailJS } from "./funciones.js";

// Navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav_menu");
// Video
let video = document.querySelectorAll("video");
//Form
const fomulario = document.querySelector("#formulario");
const btn_enviar = document.querySelector("#enviar");
const sendEmail = (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  btn_enviar.disabled = true;

  //Service ID - Template ID - Form ID - Public Key
  emailjs.sendForm('service_6tsvolc', 'template_stpr4ky', '#formulario', 'U4THGMO-OMu7Ju43i')
  .then((response) => {
    formulario_exitoso(nombre);
    formulario.reset();
  })
  .catch((error) => {
    formulario_errorEmailJS(nombre);
    console.log("Error al enviar mensaje de emailjs");
    console.log(error);
  })
  .finally(() => {
    btn_enviar.disabled = false;
  })
}

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

