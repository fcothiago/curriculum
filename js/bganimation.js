let covertoggler = 0;
let bgpatterns = {};
const cover = [document.querySelector('div#cover1'),document.querySelector('div#cover2')];
const updatePattern = (pattern) => {
	document.querySelector('body').style['background-image'] = bgpatterns[pattern];
        cover[1-covertoggler].style['background-image']  = bgpatterns[pattern];
        cover[covertoggler].style.opacity = '0';
        cover[1-covertoggler].style.opacity = '1';
        covertoggler = 1-covertoggler;
};
const addPattern = (key,style) =>{
	bgpatterns[key] = style;
};
export { updatePattern , addPattern };
