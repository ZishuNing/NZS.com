// import { CONFIG } from '../config.js';

const EFFECTS_CSS_URL = '../../../assets/css/effects.css';

if (CONFIG.effectsDisabledByDefault && !('effectsDisabled' in localStorage)) {
	localStorage.setItem('effectsDisabled', true);
}

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';

let effectsStyle = document.createElement('link');
effectsStyle.rel = 'stylesheet';
effectsStyle.type = 'text/css';
effectsStyle.href = EFFECTS_CSS_URL;

function updateEffectsState() {
	if (!effectsDisabled) {
		document.head.appendChild(effectsStyle);
	}
}

function toggleEffects() {
	effectsDisabled = !effectsDisabled;
	localStorage.setItem('effectsDisabled', effectsDisabled);
	updateEffectsState();
	location.reload();
}

function getEffectsDisabledState() {
	return effectsDisabled;
}

function initEffectsToggle() {
	// Dynamic toggle link
	if (!CONFIG.displayEffectsSwitch) {
		document.getElementById('toggle-effects').style.display = 'none';
	} else {
		const nfbText = document.getElementById('toggle-effects');
		nfbText.innerHTML = `Click <a id="toggle-effects-link" href="#">HERE</a> to turn effects ${effectsDisabled ? 'on' : 'off'
			}.`;

		document.getElementById('toggle-effects-link').addEventListener('click', (event) => {
			event.preventDefault();
			toggleEffects();
		});
		
		if (effectsDisabled) 
		{
			if (CONFIG.crtEffect) {
				document.getElementById('canvas').classList.remove('crt-effect');
			}
			document.getElementById('noise-overlay').style.display = 'none';
			document.getElementById('grunge-overlay').style.display = 'none';
		}
		else{
			if (CONFIG.crtEffect) {
				document.getElementById('canvas').classList.add('crt-effect');
			}
			if (CONFIG.noiseEffect) {
				document.getElementById('noise-overlay').style.display = 'block';
			}
			if (CONFIG.grungeOverlay) {
				document.getElementById('grunge-overlay').style.display = 'block';
			}
		}
	}
}

function initEffects() {
	if (
		window.matchMedia('(max-width: 767px)').matches &&
		!('effectsDisabled' in localStorage) &&
		CONFIG.effectsDisabledByDefaultMobile
	) {
		effectsDisabled = true;
	}

	updateEffectsState();
}
