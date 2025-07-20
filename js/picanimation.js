const picture = document.querySelector('div#picture');
const picturearea = document.querySelector('section#picture-area');
const main = document.querySelector('main');
const updatePosition = (current,items) => {
	const flexdirection = window.getComputedStyle(main)['flex-direction'];
	if(flexdirection == 'column')
	{
		const totalsize = picturearea.getBoundingClientRect().width;
		const picturesize = picture.getBoundingClientRect().width;
		const margin = (totalsize-picturesize)*(current/items);
		picturesize.style['margin-left'] = margin;
	}
	else
	{

	}
};
export{ updatePosition };
