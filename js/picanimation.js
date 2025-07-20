let context = {current:0,items:0};
const picture = document.querySelector('div#picture');
const picturearea = document.querySelector('section#picture-area');
const main = document.querySelector('main');
const updatePosition = (current,items,bg) => {
	context.current = current;
	context.items = items;
	const flexdirection = window.getComputedStyle(main)['flex-direction'];
	if(flexdirection == 'column')
	{
		const totalsize = picturearea.getBoundingClientRect().width;
		const picturesize = picture.getBoundingClientRect().width;
		const margin = (totalsize-picturesize)*(current/items);
		picture.style['margin'] = `auto 0 auto ${margin}px`;
	}
	else
	{
		const totalsize = picturearea.getBoundingClientRect().height;
		const picturesize = picture.getBoundingClientRect().height;
		const margin = (totalsize-picturesize)*(current/items);
		picture.style['margin'] = `${margin}px 5px 0 0`;
	}
	if(bg)
	{
		picture.style['background'] = bg;
		picture.style['background-size'] = 'cover';

	}
};
window.addEventListener('resize', () => {
	updatePosition (context.current,context.items); 
});
export{ updatePosition };
