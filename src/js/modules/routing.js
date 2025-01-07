// import { openPost, initPosts } from './blog.js';
// import { changeTab } from './navigation.js';
// import { CONFIG } from '../config.js';

const DEFAULT_HASH = CONFIG.defaultHash;

function routing(hash) {
	const [route, query] = hash.slice(1).split('?');
	const params = new URLSearchParams(query || '');

	if (route === 'blog') {
		if (params.has('id')) {
			openPost(params.get('id'));
			document.getElementById('blog').classList.add('post-open');
		} else {
			initPosts();
		}
	} else {
		document.getElementById('blog').classList.remove('post-open');
	}

	changeTab(route);
}

function defaultHash() {
	location.hash = DEFAULT_HASH;
}

function removeIDFromHash() {
	location.hash = location.hash.split('?')[0];
}

function initRouting() {
	window.addEventListener('hashchange', function () {
		routing(location.hash);
	});
	routing(location.hash || '#' + DEFAULT_HASH);
}
