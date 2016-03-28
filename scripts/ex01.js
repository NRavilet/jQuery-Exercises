$(document).ready(function (){

	$('.fadeitem').css({
		backgroundImage: 'url(images/vancouver4.jpg)', 
		backgroundSize: '100% auto',
		
	})
	.fadeTo('fast', 0.4, function() {
		
	})
	.on({
		mouseenter: function(e) {
			$(this).fadeTo('fast', 1);
		},
		mouseleave: function(e) {
			$(this).fadeTo('fast', 0.4);
		},
	});


});