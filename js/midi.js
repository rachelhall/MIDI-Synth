import Tone from 'tone';

// Tone.Synth is a basic synthesizer with a single oscillator
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
const gain = new Tone.Gain(0.5).toMaster();
// Set the tone to sine
synth.oscillator.type = 'triangle';
// connect it to the master output (your speakers)
synth.chain(delay, reverb, gain).toMaster();

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
			break;
		case 58:
			note = 'A#3';
			break;
		case 59:
			note = 'B3';
			break;
		case 60:
			note = 'C4';
			break;
		case 61:
			note = 'C#4';
			break;
		case 62:
			note = 'D4';
			break;
		case 63:
			note = 'D#4';
			break;
		case 64:
			note = 'E4';
			break;
		case 65:
			note = 'F4';
			break;
		case 66:
			note = 'F#4';
			break;
		case 67:
			note = 'G4';
			break;
		case 68:
			note = 'G#4';
			break;
		case 69:
			note = 'A4';
			break;
		case 70:
			note = 'A#4';
			break;
		case 71:
			note = 'B4';
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

	// if(note === 65){
	//     console.log("The note is F")
	//     note = "F4"
	//     console.log(note);
	// }

	if (message.data[0] === 144 && message.data[2] > 0) {
		playNote(note);
	}

	if (message.data[0] === 128 || message.data[2] === 0) {
		//console.log("stopNote")
		stopNote();
	}
}

function midiNoteToFrequency(note) {
	return Math.pow(2, (note - 69) / 12) * 440;
}

function playNote(note) {
	console.log('the note is ' + note);
	synth.triggerAttack(note);
}

function stopNote() {
	synth.triggerRelease();
}
