
$('.btn, .modal__close').click(function() {
	$('.modal').fadeToggle('modal--active');
});

$("#modal").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		});
		return false;
	});
//page-header switch
var mobSwitch = document.querySelector('.page-header__mobile-switch');
var list = document.querySelector('.page-header__nav');

mobSwitch.addEventListener('click', function() {
	list.classList.toggle('page-header__nav--active');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2RhbC9tb2RhbC5qcyIsInBhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiQoJy5idG4sIC5tb2RhbF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKCcubW9kYWwnKS5mYWRlVG9nZ2xlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJChcIiNtb2RhbFwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcIm1haWwucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pOyIsIi8vcGFnZS1oZWFkZXIgc3dpdGNoXHJcbnZhciBtb2JTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX21vYmlsZS1zd2l0Y2gnKTtcclxudmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX25hdicpO1xyXG5cclxubW9iU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0bGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLWhlYWRlcl9fbmF2LS1hY3RpdmUnKTtcclxufSk7Il19
