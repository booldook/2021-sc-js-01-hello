/************** global init *************/
var idx = 0;		// slide index
var interval;		// setInterval index
var lastIdx = $('.fade-type .slide').length - 1;

/************** function init *************/
function chgSlide() {
	$('.fade-type .slide').hide();
	$('.fade-type .slide').eq(idx).show();
}
function chgPager() {
	$('.fade-type .pager').removeClass('active');
	$('.fade-type .pager').eq(idx).addClass('active');
}

/************** event Callback *************/
function onPrev() {
	idx = (idx === 0) ? lastIdx : idx - 1;
	chgSlide();
	chgPager();
}
function onNext() {
	idx = (idx === lastIdx) ? 0 : idx + 1;
	chgSlide();
	chgPager();
}
function onPager() {
	idx = $(this).index();
	chgSlide();
	chgPager();
}
function onEnter() {
	clearInterval(interval);
}
function onLeave() {
	interval = setInterval(onNext, 3000);
}

/************** event init *************/
interval = setInterval(onNext, 3000);
$('.fade-type .bt-prev').click(onPrev);
$('.fade-type .bt-next').click(onNext);
$('.fade-type .pager').click(onPager);
$('.fade-type').mouseenter(onEnter);
$('.fade-type').mouseleave(onLeave);

/************** start *************/
$('.fade-type .slide').hide();
$('.fade-type .slide').eq(idx).show();