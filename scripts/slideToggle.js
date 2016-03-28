$(document).ready(function(){ 
	$('#b1').on('click', function(event) {
		event.preventDefault();
		$('.one').slideToggle('slow');
	});

	$('#b2').on('click', function(event) {
		event.preventDefault();
		$('.two').slideToggle('slow');
	});

	$('#b3').on('click', function(event) {
		event.preventDefault();
		$('.three').slideToggle('slow');
	});

	$('#b4').on('click', function(event) {
		event.preventDefault();
		$('.four').slideToggle('slow');
	});
}); 

