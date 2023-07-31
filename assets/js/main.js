
let text_typewriter = document.querySelector('#typewriter');

let typewriter = new Typewriter(text_typewriter, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('VGR')
  .pauseFor(2500)
  .deleteChars(10)
  .typeString('Tu mejor opción')
  .pauseFor(2500)
  .start();