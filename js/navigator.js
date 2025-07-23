//https://coolors.co/palette/05668d-028090-00a896-02c39a-f0f3bd
import {updatePattern , addPattern} from "./bganimation.js";
import {updatePosition} from "./picanimation.js"
addPattern('intro',"url('./pictures/backgrounds/introbg.jpg')");
addPattern('resume',"url('./pictures/backgrounds/educationbg.jpg')");
addPattern('professional',"url('./pictures/backgrounds/professional.jpg')");
addPattern('portifolio',"url('./pictures/backgrounds/portifolio.jpg')");
addPattern('contact',"url('./pictures/backgrounds/contact.jpg')");
const options = [
	{value:'intro',text:'Intro',bg:'url("./pictures/profile.png")'},
	{value:'resume',text:'Formação e Certificados',bg:'url("./pictures/education.png")'},
	{value:'professional',text:'Experiência',bg:'url("./pictures/professional.png")'},
	{value:'portifolio',text:'Portifólio',bg:'url("./pictures/portifolio.png")'},
	{value:'contact',text:'Contato',bg:'url("./pictures/contact.png")'}
];
const secselector = document.querySelector('#secselector');
const prevbutton = document.querySelector('button#prevbtn');
const nextbutton = document.querySelector('button#nextbtn');
options.forEach( (item) => {
	const option = document.createElement('option');
	option.value = item.value;
	option.text = item.text;
	secselector.appendChild(option);
});
secselector.addEventListener('change', (e) => {
	const pattern  = e.target.value;
	const position = options.findIndex( (item) => item.value == e.target.value );
	updatePattern(pattern);
	updatePosition(position,options.length-1,options[position].bg);
});
nextbutton.addEventListener('click',(e) => {
	//e.preventDefault();
	const current = secselector.value;
	let position = options.findIndex( (item) => item.value == current );
	position = position < options.length ? position + 1 : position;
	updatePattern(options[position].value);
	updatePosition(position,options.length-1,options[position].bg);
	secselector.value = options[position].value;
});
prevbutton.addEventListener('click',(e) => {
	//e.pŕeventDefault();
	const current = secselector.value;
	let position = options.findIndex( (item) => item.value == current );
	position = position > 0 ? position - 1 : position;
	updatePattern(options[position].value);
	updatePosition(position,options.length-1,options[position].bg);
	secselector.value = options[position].value;
});
updatePattern("intro");
updatePosition(0,options.length-1,options[0].bg);

