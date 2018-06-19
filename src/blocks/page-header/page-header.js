//page-header add fixed top position
window.onscroll = function() {scrollFunc()};

var header = document.querySelector('.page-header');
var sticky = header.offsetTop;

function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('page-header--fixed');
  } else {
    header.classList.remove('page-header--fixed');
  }
}


//page-header switch
var mobSwitch = document.querySelector('.page-header__mobile-switch');
var list = document.querySelector('.page-header__nav');

mobSwitch.addEventListener('click', function() {
	list.classList.toggle('page-header__nav--active');
});