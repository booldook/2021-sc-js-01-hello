$('.fade-type .slide').hide();
$('.fade-type .slide').eq(0).show();
var idx = 0;
var interval = window.setInterval(function() {
	idx = (idx === 4) ? 0 : idx + 1;
	$('.fade-type .slide').hide();
	$('.fade-type .slide').eq(idx).show();
}, 3000);