const dotSound = new Howl({ src: ['assets/dot.wav'] });
const dashSound = new Howl({ src: ['assets/dash.wav'] });

function playMorse(morseCode) {
	const characters = morseCode.trim().split(' ');
	let delay = 0; // Initial delay

	characters.forEach(character => {
		character.split('').forEach(symbol => {
			setTimeout(() => {
				switch (symbol) {
					case '.':
						dotSound.rate(2)
						dotSound.play();
						break;
					case '-':
						dashSound.rate(2)
						dashSound.play();
						break;
					default:
						break;
				}
			}, delay);
			delay += 250; // Add 500ms delay for the next symbol
		});
		delay += 500; // Add extra delay between characters
	});
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
	module.exports = { playMorse };
}
