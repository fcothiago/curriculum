window.addEventListener('load',() => {
	document.querySelectorAll('body > *').forEach( (item,index) => {
		item.style.transition = `opacity ${(index+1)*0.5}s ease-in-out`;
		item.style.opacity = '1';
	});
});
