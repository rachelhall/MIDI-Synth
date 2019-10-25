// Let's import everything we're gonna need
import Tone from 'tone';
import Nexus from "nexusui";

// Build the synth with Tone.js
const synth = new Tone.Synth();
const delay = new Tone.FeedbackDelay(
	{
	  delayTime : 0.125 ,
	  maxDelay : .5
	  }
  ).toMaster();
const reverb = new Tone.Reverb({
	decay : 1.5 ,
	preDelay : 0.01
	}).toMaster();
	let volumeLevel;
const gain = new Tone.Gain(10).toMaster();
let wave = "triangle";
synth.oscillator.type = wave;

// Some funcgtions that allow our buttons to change their wavetypes
function waveSine(){
	wave = "sine";
	synth.oscillator.type = wave;
};

function waveTriangle(){
	wave = "triangle";
	synth.oscillator.type = wave;
};
function waveSquare(){
	wave = "sawtooth";
}

const sineButton = document.querySelector(".wave-sine");
sineButton.addEventListener('click', function() {
	waveSine();
	console.log(wave);
	sineButton.classList.toggle("wavebutton-active");
	// squareButton.classList.remove("wavebutton-active")
	triangleButton.classList.remove("wavebutton-active");
})

const triangleButton = document.querySelector(".wave-triangle");
triangleButton.addEventListener('click', function() {
	waveTriangle();
	console.log(wave);
	sineButton.classList.remove("wavebutton-active")
	// squareButton.classList.remove("wavebutton-active")
	triangleButton.classList.toggle("wavebutton-active")
})

// const squareButton = document.querySelector(".wave-square");
// squareButton.addEventListener('click', function() {
// 	waveSquare();
// 	console.log(wave);
// 	sineButton.classList.remove("wavebutton-active")
// 	triangleButton.classList.remove("wavebutton-active")
// 	squareButton.classList.toggle("wavebutton-active")
// })

// toMaster() sends our chain to the speakers
synth.chain(delay, reverb, gain).toMaster();

//--------------------------------------------------------------------

//Get the broswer listening for MIDI
if (navigator.requestMIDIAccess) {
	navigator.requestMIDIAccess().then(success, failure);
}

function success(midi) {
	var inputs = midi.inputs.values();
	// inputs is an Iterator

	for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
		// each time there is a midi message call the onMIDIMessage function
		input.value.onmidimessage = onMIDIMessage;
	}
}

function failure() {
	console.error('No access to your midi devices.');
}

function onMIDIMessage(message) {
	let frequency = midiNoteToFrequency(message.data[1]);
	const command = message.data[0];
	let note = message.data[1];
	const velocity = message.data.length > 2 ? message.data[2] : 0; // a velocity value might not be included with a noteOff comman
	console.log('the note is ' + note);

	const A3 = document.querySelector(".A3");
	const ASharp3 = document.querySelector(".ASharp3");
	const B3 = document.querySelector(".B3");
	const C4 = document.querySelector(".C4");
	const CSharp4 = document.querySelector(".CSharp4");
	const D4 = document.querySelector(".D4");
	const DSharp4 = document.querySelector(".DSharp4");
	const E4 = document.querySelector(".E4");
	const F4 = document.querySelector(".F4");
	const FSharp4 = document.querySelector(".FSharp4");
	const G4 = document.querySelector(".G4");
	const GSharp4 = document.querySelector(".GSharp4");
	const A4 = document.querySelector(".A4");
	const ASharp4 = document.querySelector(".ASharp4");
	const B4 = document.querySelector(".B4");

	//map the midi value to note values
	switch (note) {
		case 28:
			note = 'E1';
			break;
		case 29:
			note = 'F1';
			break;
		case 30:
			note = 'F#1';
			break;
		case 31:
			note = 'G1';
			break;
		case 32:
			note = 'G#1';
			break;
		case 33:
			note = 'A1';
			break;
		case 34:
			note = 'A#1';
			break;
		case 35:
			note = 'B1';
			break;
		case 36:
			note = 'C2';
			break;
		case 37:
			note = 'C#2';
			break;
		case 38:
			note = 'D2';
			break;
		case 39:
			note = 'D#2';
			break;
		case 40:
			note = 'E2';
			break;
		case 41:
			note = 'F2';
			break;
		case 42:
			note = 'F#2';
			break;
		case 43:
			note = 'G2';
			break;
		case 44:
			note = 'G#2';
			break;
		case 45:
			note = 'A2';
			break;
		case 46:
			note = 'A#2';
			break;
		case 47:
			note = 'B2';
			break;
		case 48:
			note = 'C3';
			break;
		case 49:
			note = 'C#3';
			break;
		case 50:
			note = 'D3';
			break;
		case 51:
			note = 'D#3';
			break;
		case 52:
			note = 'E3';
			break;
		case 53:
			note = 'F3';
			break;
		case 54:
			note = 'F#3';
			break;
		case 55:
			note = 'G3';
			break;
		case 56:
			note = 'G#3';
			break;
		case 57:
			note = 'A3';
			A3.classList.toggle("active-white");
			break;
		case 58:
			note = 'A#3';
			ASharp3.classList.toggle("active-black");
			break;
		case 59:
			note = 'B3';
			B3.classList.toggle("active-white");
			break;
		case 60:
			note = 'C4';
			C4.classList.toggle("active-white");
			break;
		case 61:
			note = 'C#4';
			CSharp4.classList.toggle("active-black");
			break;
		case 62:
			note = 'D4';
			D4.classList.toggle("active-white");
			break;
		case 63:
			note = 'D#4';
			DSharp4.classList.toggle("active-black");
			break;
		case 64:
			note = 'E4';
			E4.classList.toggle("active-white");
			break;
		case 65:
			note = 'F4';
			F4.classList.toggle("active-white");
			break;
		case 66:
			note = 'F#4';
			FSharp4.classList.toggle("active-black");
			break;
		case 67:
			note = 'G4';
			G4.classList.toggle("active-white");
			break;
		case 68:
			note = 'G#4';
			GSharp4.classList.toggle("active-black");
			break;
		case 69:
			note = 'A4';
			A4.classList.toggle("active-white");
			break;
		case 70:
			note = 'A#4';
			ASharp4.classList.toggle("active-black");
			break;
		case 71:
			note = 'B4';
			B4.classList.toggle("active-white");
			break;
		case 72:
			note = 'C5';
			break;
		case 73:
			note = 'C#5';
			break;
		case 74:
			note = 'D5';
			break;
		case 75:
			note = 'D#5';
			break;
		case 76:
			note = 'E5';
			break;
		case 77:
			note = 'F5';
			break;
		case 78:
			note = 'F#5';
			break;
		case 79:
			note = 'G5';
			break;
		case 80:
			note = 'G#5';
			break;
		case 81:
			note = 'A5';
			break;
		case 82:
			note = 'A#5';
			break;
		case 83:
			note = 'B5';
			break;
		case 84:
			note = 'C6';
			break;
		case 85:
			note = 'C#6';
			break;
		case 86:
			note = 'D6';
			break;
		case 87:
			note = 'D#6';
			break;
		case 88:
			note = 'E6';
			break;
		case 89:
			note = 'F6';
			break;
		case 90:
			note = 'F#6';
			break;
		case 91:
			note = 'G6';
			break;
		case 92:
			note = 'G#6';
			break;
		case 93:
			note = 'A6';
			break;
		case 94:
			note = 'A#6';
			break;
		case 95:
			note = 'B6';
			break;
		case 96:
			note = 'C7';
			break;
		case 97:
			note = 'C#7';
			break;
		case 98:
			note = 'D7';
			break;
		case 99:
			note = 'D#7';
			break;
		case 100:
			note = 'E7';
			break;
		case 101:
			note = 'F7';
			break;
		case 102:
			note = 'F#7';
			break;
		case 103:
			note = 'G7';
			break;
	}

	//pass notes into the playNote() and stopNote() functions
	if (message.data[0] === 144 && message.data[2] > 0) {
		playNote(note);
	}

	if (message.data[0] === 128 || message.data[2] === 0) {
		stopNote();
	}
}

function playNote(note) {
	console.log('the note is ' + note);
	synth.triggerAttack(note);
}

function stopNote() {
	synth.triggerRelease();
	
}

// Not using this, but it's there in case I need to do some frequency conversion
function midiNoteToFrequency(note) {
	return Math.pow(2, (note - 69) / 12) * 440;
}

//-----------------------------------------------------------------------

//Now let's hook up our on-screen keyboard
const piano = document.getElementById("piano");

// Let's listen for the mouse events
piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
  console.log(e.target);
  e.target.classList.toggle("active-white");
});

piano.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
  e.target.classList.toggle("active-white");
});


// Now turn your ear to the keyboard events
document.addEventListener("keydown", e => {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "a":
       synth.triggerAttack("A3");
       //e.target.classList.toggle("active-white");
       console.log("the key is " + e.key)
       break;
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

//--------------------------------------------------------

// Now let's get some buttons cooking on the control panel
const powerButton = document.querySelector('.power-button');
const logo = document.querySelector(".logo");

powerButton.addEventListener('click', function() {
  powerButton.classList.toggle("power-on");
  logo.classList.toggle("glow");
});





