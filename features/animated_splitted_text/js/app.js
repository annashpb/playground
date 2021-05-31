'use_strict';

const span = (text, index) => {
	const node = document.createElement('span');
	
	node.textContent = text;
	node.style.setProperty('--index', index);	
	
	return node;
}

const byLetter = text => {
	return [...text].map(span);
}

const byWord = text => {
	return text.split(' ').map(span);
}

const splitTargets = document.querySelectorAll('[split-by]');


splitTargets.forEach(node => {
	const type = node.getAttribute('split-by');
	let nodes = null;
	
	if (type === 'letter') {
		nodes = byLetter(node.innerText);
	}

	if (type === 'word') {
		nodes = byWord(node.innerText);
	}

	

	if (nodes) {
		node.firstChild.replaceWith(...nodes);
	}
})