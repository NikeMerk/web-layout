

// Burger
const $burgerNavigation = document.getElementById('header-burger-nav')
const $burgerButton = document.getElementById('header-burger')
const $burgerSvg = document.getElementById('header-burger-nav__svg')
const $body = document.querySelector('.page')
$burgerButton.onclick = ()	=> {
	$burgerNavigation.classList.toggle('header-burger-nav-visibility');
	$body.classList.toggle('page-block');
};
$burgerSvg.onclick = ()	=> {
	$burgerNavigation.classList.toggle('header-burger-nav-visibility');
	$body.classList.toggle('page-block');
};
