//https://coolors.co/palette/05668d-028090-00a896-02c39a-f0f3bd
import {updatePattern , addPattern} from "./bganimation.js";
import {updatePosition} from "./picanimation.js";
import {addPage,updatePage} from "./content.js";
const options = 
[
	{value:'intro',text:'Intro',icon:'url("./pictures/profile.png")',pattern:"url('./pictures/backgrounds/introbg.jpg')",page:'./html/intro.html'},
	{value:'resume',text:'Formação e Certificados',icon:'url("./pictures/education.png")',pattern:"url('./pictures/backgrounds/educationbg.jpg')",page:'./html/education.html'},
	{value:'professional',text:'Experiência',icon:'url("./pictures/professional.png")',pattern:"url('./pictures/backgrounds/professional.jpg')",page:'./html/professional.html'},
	{value:'portifolio',text:'Portifólio',icon:'url("./pictures/portifolio.png")',pattern:"url('./pictures/backgrounds/portifolio.jpg')",page:'./html/portifolio.html'},
	{value:'contact',text:'Contato',icon:'url("./pictures/contact.png")',pattern:"url('./pictures/backgrounds/contact.jpg')",page:'./html/contact.html'}
];
const secselector = document.querySelector('#secselector');
const prevbutton = document.querySelector('button#prevbtn');
const nextbutton = document.querySelector('button#nextbtn');
options.forEach( (item) => {
	const option = document.createElement('option');
	option.value = item.value;
	option.text = item.text;
	secselector.appendChild(option);
	addPattern(item.value,item.pattern);
	addPage(item.value,item.page);
});
secselector.addEventListener('change', (e) => {
	const pattern  = e.target.value;
	const position = options.findIndex( (item) => item.value == e.target.value );
	updatePattern(pattern);
	updatePosition(position,options.length-1,options[position].icon);
	updatePage(options[position].value);
});
nextbutton.addEventListener('click',(e) => {
	//e.preventDefault();
	const current = secselector.value;
	let position = options.findIndex( (item) => item.value == current );
	position = position < options.length ? position + 1 : position;
	updatePattern(options[position].value);
	updatePosition(position,options.length-1,options[position].icon);
	updatePage(options[position].value);
	secselector.value = options[position].value;
});
prevbutton.addEventListener('click',(e) => {
	//e.pŕeventDefault();
	const current = secselector.value;
	let position = options.findIndex( (item) => item.value == current );
	position = position > 0 ? position - 1 : position;
	updatePattern(options[position].value);
	updatePosition(position,options.length-1,options[position].icon);
	updatePage(options[position].value);
	secselector.value = options[position].value;
});
updatePattern('intro');
updatePosition(0,options.length-1,options[0].icon);
updatePage('intro');
