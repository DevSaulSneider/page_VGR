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