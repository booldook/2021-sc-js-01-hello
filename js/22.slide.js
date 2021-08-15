/* 
- fade slide
1. pager, bt-prev, bt-next, interval
2. idx, interval, depth
*/
/************** global init *************/
var $wrapper = $('.fade-type');
var $slide = $wrapper.find('.slide');
var $btPrev = $wrapper.find('.bt-prev');
var $btNext = $wrapper.find('.bt-next');
var $pager = $wrapper.find('.pager');
var depth = 1;											// z-index
var idx = 0;												// 대상slide idx
var interval;												// interval 저장
var gap = 2000;											// interval 간격
var speed = 1000;										// animation 속도
var lastIdx = $slide.length - 1;		// 마지막 .slide의 index

/************* function init ************/
function chgSlide() {
	// $slide.eq(idx).css('opacity', 0);
	// $slide.eq(idx).css('z-index', ++depth);
	$slide.eq(idx).css({'opacity': 0, 'z-index': ++depth});
	$slide.eq(idx).stop().animate({"opacity": 1}, speed);
}

function chgPager() {
	$pager.removeClass('active');
	$pager.eq(idx).addClass('active');
}

/************* event callback ***********/
function onNext() {
	idx = (idx === lastIdx) ? 0 : idx + 1;
	chgSlide();
	chgPager();
}

function onPrev() {
	idx = (idx === 0) ? lastIdx: idx - 1;
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
	interval = setInterval(onNext, gap);
}

/*************** event init *************/
interval = setInterval(onNext, gap);
$wrapper.mouseenter(onEnter);
$wrapper.mouseleave(onLeave);
$btPrev.click(onPrev);
$btNext.click(onNext);
$pager.click(onPager);

/*************** start init *************/
$('.fade-type .slide').eq(0).css('z-index', depth);
