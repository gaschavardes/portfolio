$(document).ready(function() {
    $('#fullpage').fullpage();

    $('.project').mouseleave(function(){
    	$(this).find(".moreinfo").removeClass('visible');
    })
    $('.project').mouseenter(function(){
    	$(this).find(".moreinfo").addClass('visible');
    })

    $('.project a').click(function(){
    	$(this).children(".moreinfo").removeClass('visible');
    	$(this).children(".moreinfo").css('transform','scale(1.5)');
    	$(this).parent().children(".expl").toggleClass("visible");


    });
    $('.project').mouseleave(function(){
    	$(this).find(".moreinfo").css('transform','scale(1)');
    	if( $(this).children(".expl").hasClass('visible') )
    	{
    		$(this).children(".expl").removeClass('visible');

    	}

    });

});

