document.querySelectorAll('ul#career-history li').forEach((item) => {
	const div = item.querySelector('div');
	const btn = item.querySelector('a');
	btn.addEventListener('click',(e) => 
	{
		e.preventDefault();
		console.log(div.style.display);
		if(div.style.display == 'block')
		{
			btn.text = '+';
			div.style.display = 'none';
		}
		else
		{
			btn.text = '-';
			div.style.display = 'block';
		}
	});	
});

