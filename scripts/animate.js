$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
				$('#rocket').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
				$('#rocket').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
				$('#rocket').animate({left: "+=10px"}, 'fast');
				break;
			case 40:
				$('#rocket').animate({top: "+=10px"}, 'fast');
				break;
		}
});
