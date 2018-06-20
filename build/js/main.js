
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwYWdlLWhlYWRlci9wYWdlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIvL3BhZ2UtaGVhZGVyIGFkZCBmaXhlZCB0b3AgcG9zaXRpb25cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c2Nyb2xsRnVuYygpfTtcclxuXHJcbnZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXInKTtcclxudmFyIHN0aWNreSA9IGhlYWRlci5vZmZzZXRUb3A7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxGdW5jKCkge1xyXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXItLWZpeGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWhlYWRlci0tZml4ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vL3BhZ2UtaGVhZGVyIHN3aXRjaFxyXG52YXIgbW9iU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX19tb2JpbGUtc3dpdGNoJyk7XHJcbnZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX19uYXYnKTtcclxuXHJcbm1vYlN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZS1oZWFkZXJfX25hdi0tYWN0aXZlJyk7XHJcbn0pOyJdfQ==