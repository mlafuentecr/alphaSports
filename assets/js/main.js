/*--------------------------------------------------------------
Selects elements 
--------------------------------------------------------------*/
const preloader = document.querySelector('.preloader');
const sidebar = document.querySelector('.sidebar');
const sidebarCollapse = document.querySelector('#collapseBar');

const descTitle = document.querySelector('.descriptionBet');
const descMobileMenuParent = document.querySelector('#dropdownBetMobile');
const descMobileMenu = document.querySelector('.dropdownBetMobile');
const descMobileItem = descMobileMenu.querySelectorAll('a');
const descMobileContParent = document.querySelector('#pills-tabContent');
const descMobileContChild = descMobileContParent.querySelectorAll('.tab-pane');

const mobileLeftPanel = document.querySelector('#mod');
let intViewportHeight = document.body.offsetHeight;

document.querySelector('.navbarMobile').addEventListener('click', () => {
	console.log('click', navbarPrincipal);
	if ((mobileLeftPanel.classList.contains = 'show')) {
		console.log('si tienneee');
		mobileLeftPanel.style.background = `red`;
		mobileLeftPanel.setAttribute('style', `height:${intViewportHeight}px`);
	}
});

//Cambie el panel de bets
const showContent = function (itemCl) {
	descMobileContChild.forEach(item => {
		item.classList.remove('show');
		item.classList.remove('active');
	});
	const itemToChange = document.querySelector(`${itemCl}`);
	itemToChange.classList.add('show');
	itemToChange.classList.add('active');
};

//Cambie el panel al iniciar
const descInit = function () {
	descTitle.innerHTML = descMobileMenuParent.innerHTML;
	//Cuando Selecciono algo en el menu cambie el titulo y cambien el panel
	descMobileItem.forEach(item => {
		if (item.className === 'dropdown-item') {
			item.addEventListener('click', () => {
				const name = item.innerHTML.toLowerCase().replace(' ', '');
				showContent(`#pill-${name}`);
				descMobileMenuParent.innerHTML = descTitle.innerHTML = item.innerHTML;
			});
		}
	});
};
descInit();

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
