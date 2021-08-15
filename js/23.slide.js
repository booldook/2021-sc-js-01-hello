/* 
- Horizontal slide
1. pager, bt-prev, bt-next, interval
2. idx, interval
*/
/************** global init *************/
var $wrapper = $('.fade-type');
var $slide = $wrapper.find('.slide');
var $btPrev = $wrapper.find('.bt-prev');
var $btNext = $wrapper.find('.bt-next');
var $pager = $wrapper.find('.pager');
var idx = 0;												// 대상slide idx
var interval;												// interval 저장
var gap = 2000;											// interval 간격
var speed = 1000;										// animation 속도
var lastIdx = $slide.length - 1;		// 마지막 .slide의 index

/************* function init ************/
function chgSlide() {
	
}

function chgPager() {
	
}

/************* event callback ***********/
function onNext() {
	
}

function onPrev() {
	
}

function onPager() {
	
}

function onEnter() {
	
}

function onLeave() {
	
}

/*************** event init *************/
interval = setInterval(onNext, gap);
$wrapper.mouseenter(onEnter);
$wrapper.mouseleave(onLeave);
$btPrev.click(onPrev);
$btNext.click(onNext);
$pager.click(onPager);

/*************** start init *************/

