window.addEventListener('load',() =>{
	document.querySelector('div#loading').style.opacity = 0;
});
document.querySelector('div#loading').addEventListener('transitionend',() => {
	document.querySelector('div#loading').style.display = 'none';
});
