//page-header switch
var mobSwitch = document.querySelector('.page-header__mobile-switch');
var list = document.querySelector('.page-header__nav');

mobSwitch.addEventListener('click', function() {
	list.classList.toggle('page-header__nav--active');
});