// Navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav_menu");

menu.addEventListener("click", () =>{
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

// Video
let video = document.querySelectorAll("video");
video.forEach(e => e.addEventListener("click", () => {
  e.classList.toggle("video-active");

  if(e.paused){
    e.play();
  }else{
    e.pause();
    e.currentTime = 0;
  }
}));