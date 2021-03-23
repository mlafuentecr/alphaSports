/*--------------------------------------------------------------
Selects elements 
--------------------------------------------------------------*/
const preloader = document.querySelector('.preloader');

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
animate elements
--------------------------------------------------------------*/
