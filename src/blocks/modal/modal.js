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