//https://coolors.co/palette/05668d-028090-00a896-02c39a-f0f3bd
let covertoggler = 0;
const bgpatterns = {
	intro:'linear-gradient(45deg,rgba(5, 102, 141, 1) 50%, rgba(42, 144, 184, 1) 70%, rgba(5, 102, 141, 1) 90%)',
	resume:'linear-gradient(45deg,rgba(2, 128, 144, 1) 40%, rgba(31, 166, 184, 1) 60%, rgba(2, 128, 144, 1) 80%)',
	professional:'linear-gradient(45deg,rgba(2, 195, 154, 1) 30%, rgba(67, 230, 194, 1) 50%, rgba(2, 195, 154, 1) 70%)',
	portifolio:'linear-gradient(45deg,rgba(2, 195, 154, 1) 20%, rgba(48, 227, 188, 1) 40%, rgba(2, 195, 154, 1) 60%)'
};
const options = [
	{value:'intro',text:'Intro'},
	{value:'resume',text:'Formação e Certificados'},
	{value:'professional',text:'Experiência'},
	{value:'portifolio',text:'Portifólio'}
];
const secselector = document.querySelector('#secselector');
const updadetebgpattern = (pattern) => {
	const cover = [document.querySelector('div#cover1'),document.querySelector('div#cover2')];
	cover[1-covertoggler].style.background = bgpatterns[pattern];
	cover[covertoggler].style.opacity = '0';
	cover[1-covertoggler].style.opacity = '1';
	covertoggler = 1-covertoggler;
};
options.forEach( (item) => {
	const option = document.createElement('option');
	option.value = item.value;
	option.text = item.text;
	secselector.appendChild(option);
});
secselector.addEventListener('change', (e) =>{
	pattern  = e.target.value;
	updadetebgpattern(pattern);	
});
updadetebgpattern();
document.querySelector('div#cover1').style.transition = 'opacity 1s ease-in-out';
document.querySelector('div#cover2').style.transition = 'opacity 1s ease-in-out';


