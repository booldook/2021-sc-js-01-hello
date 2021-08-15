$('.fade-type .slide').hide();
$('.fade-type .slide').eq(0).show();
var idx = 0;
var interval = window.setInterval(onInterval, 3000);
$('.fade-type .bt-prev').click(onPrev);
$('.fade-type .bt-next').click(onNext);
$('.fade-type .pager').click(onPager);
function onInterval() {
	idx = (idx === 4) ? 0 : idx + 1;
	chgSlide();
	chgPager();
}
function onPrev() {

}
function onNext() {

}
function onPager() {
	
}
function chgSlide() {
	$('.fade-type .slide').hide();
	$('.fade-type .slide').eq(idx).show();
}
function chgPager() {
	$('.fade-type .pager').removeClass('active');
	$('.fade-type .pager').eq(idx).addClass('active');
}