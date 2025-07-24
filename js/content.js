const iframe = document.querySelector('iframe#content');
const pages = {};
const addPage = (key,src) => pages[key] = src;
const updatePage = (key) => iframe.src = pages[key];
export {addPage,updatePage};
