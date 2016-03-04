
$(document).ready(function() {
	
// 	if ($('.projects').hasClass('active')) {
// 		console.log("tadar");
// 		TweenMax.staggerFrom(".project",0.5, {opacity:0, x:100},0.2)
// 	};
TweenMax.staggerFrom("h2",0.5, {opacity:0, x: 40},0.5);
TweenMax.staggerFrom(".links li",0.5, {opacity:0, delay:2},0.5);



$('.projects').on('classChange', function() {
     // do stuff
     TweenMax.staggerFrom(".project",0.5, {opacity:0, x: 70, delay:0.5},0.4);
});


 });
