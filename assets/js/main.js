/*--------------------------------------------------------------
Selects elements 
--------------------------------------------------------------*/
const preloader = document.querySelector('.preloader');
const sidebar = document.querySelector('.sidebar');
const sidebarCollapse = document.querySelector('#collapseBar');

/*--------------------------------------------------------------
Remove Loading
--------------------------------------------------------------*/
let stop = false;
function loadingOff() {
	//1 set opacity and later will remove the loader
	if (!preloader.classList.contains('opacity') && !stop) {
		preloader.classList.add('opacity');
		setTimeout(loadingOff, 1000);
	} else {
		//2 remove or hide
		preloader.classList.add('hide');
	}
}
window.onload = () => {
	if (preloader !== null) setTimeout(loadingOff, 100);
};

/*--------------------------------------------------------------
sidebarCollapse
--------------------------------------------------------------*/
sidebarCollapse.style.cursor = 'pointer';
sidebarCollapse.addEventListener('click', () => {
	document.body.classList.toggle('sideBarcollapse');
});
