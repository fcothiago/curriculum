//https://coolors.co/palette/05668d-028090-00a896-02c39a-f0f3bd
import {updatePattern , addPattern} from "./bganimation.js";
import {updatePosition} from "./picanimation.js"
addPattern('intro',"url('../pictures/backgrounds/introbg.jpg')");
addPattern('resume',"url('../pictures/backgrounds/educationbg.png')");
addPattern('professional','linear-gradient(45deg,rgba(2, 195, 154, 1) 30%, rgba(67, 230, 194, 1) 50%, rgba(2, 195, 154, 1) 70%)');
addPattern('portifolio','linear-gradient(45deg,rgba(2, 195, 154, 1) 20%, rgba(48, 227, 188, 1) 40%, rgba(2, 195, 154, 1) 60%)');
const options = [
	{value:'intro',text:'Intro',bg:'url("./pictures/profile.jpeg")'},
	{value:'resume',text:'Formação e Certificados',bg:'url("./pictures/education.png")'},
	{value:'professional',text:'Experiência',bg:'url("./pictures/professional.png")'},
	{value:'portifolio',text:'Portifólio',bg:'url("./pictures/portifolio.png")'}
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

