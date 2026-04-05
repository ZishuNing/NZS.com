// import { CONFIG } from '../config.js';
// import { snowAnimation } from './animations.js';
// import { initTheme } from './theme.js';

if (CONFIG.effectsDisabledByDefault && !('effectsDisabled' in localStorage)) {
	localStorage.setItem('effectsDisabled', true);
}

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';

function updateEffectsState() {
    const toggleLink = document.getElementById('toggle-effects-link');
    if (toggleLink) {
        toggleLink.textContent = effectsDisabled ? 'on' : 'off';
    }

    if (effectsDisabled) {
        if (CONFIG.crtEffect) {
            document.getElementById('canvas').classList.remove('crt-effect');
        }
        document.getElementById('noise-overlay').style.display = 'none';
        document.getElementById('grunge-overlay').style.display = 'none';
        
        const rainVid = document.getElementById('rain-vid');
        if (rainVid) {
            rainVid.pause();
            rainVid.style.display = 'none';
        }
        const snowContainer = document.getElementById('snow-container');
        if (snowContainer) {
            snowContainer.innerHTML = '';
        }
    } else {
        if (CONFIG.crtEffect) {
            document.getElementById('canvas').classList.add('crt-effect');
        }
        if (CONFIG.noiseEffect) {
            document.getElementById('noise-overlay').style.display = 'block';
        }
        if (CONFIG.grungeOverlay) {
            document.getElementById('grunge-overlay').style.display = 'block';
        }
        
        if (typeof initTheme === 'function') {
            initTheme();
        }
    }
}

function toggleEffects() {
	effectsDisabled = !effectsDisabled;
	localStorage.setItem('effectsDisabled', effectsDisabled);
	updateEffectsState();
}

function getEffectsDisabledState() {
	return effectsDisabled;
}

function initEffectsToggle() {
	if (!CONFIG.displayEffectsSwitch) {
		document.getElementById('toggle-effects').style.display = 'none';
	} else {
		const nfbText = document.getElementById('toggle-effects');
        nfbText.innerHTML = 'Click <a id="toggle-effects-link" href="#">HERE</a> to turn effects ' + (effectsDisabled ? 'on' : 'off') + '.';

		document.getElementById('toggle-effects-link').addEventListener('click', (event) => {
			event.preventDefault();
			toggleEffects();
		});
        
        updateEffectsState();
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
