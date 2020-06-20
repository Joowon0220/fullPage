$(document).ready(function(){
	$('.burger').click(function(e){
		
		e.preventDefault();
		$('.bw').slideToggle();
	
		$(this).toggleClass('on');
		

	});
	
	
});

