import Tone from "tone"

// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth();
const delay = new Tone.FeedbackDelay(
  {
    delayTime : 0.125 ,
    maxDelay : 1
    }
).toMaster();
const reverb = new Tone.Reverb().toMaster();
const gain = new Tone.Gain(0.5).toMaster();
// Set the tone to sine
synth.oscillator.type = "triangle";
// connect it to the master output (your speakers)
synth.chain(delay, reverb, gain).toMaster();


const piano = document.getElementById("piano");


piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
});

// handles keyboard events
document.addEventListener("keydown", e => {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "a":
      return synth.triggerAttack("A3");
    case "w":
      return synth.triggerAttack("A#3");
    case "s":
      return synth.triggerAttack("B3");
    case "d":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});
// when the key is released, audio is released as well
document.addEventListener("keyup", e => {
  switch (e.key) {
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       synth.triggerRelease(); 
  }
});


const powerButton = document.querySelector('.power-button');
const logo = document.querySelector(".logo");

powerButton.addEventListener('click', function() {
  powerButton.classList.toggle("power-on");
  logo.classList.toggle("glow");

});
