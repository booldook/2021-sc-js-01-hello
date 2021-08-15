/* 
- Horizontal slide
1. pager, bt-prev, bt-next, interval
2. idx, interval
*/
/************** global init *************/
// json -> JSON.parse(json) -> slides
var slides = [
	{ src: '../img/p1.png', title: 'p1' },
	{ src: '../img/p2.png', title: 'p2' },
	{ src: '../img/p3.png', title: 'p3' },
	{ src: '../img/p4.png', title: 'p4' },
	{ src: '../img/p5.png', title: 'p5' },
];
var $wrapper = $('.hori-type');
var $wrap = $wrapper.find('.slide-wrap');
var $slide;
var $btPrev = $wrapper.find('.bt-prev');
var $btNext = $wrapper.find('.bt-next');
var $pagerWrap = $wrapper.find('.pager-wrap');
var idx = 0;												// 대상slide idx
var interval;												// interval 저장
var gap = 2000;											// interval 간격
var speed = 500;										// animation 속도
var lastIdx;												// 마지막 .slide의 index

/************* function init ************/
function createSlide() {
	var html = '';
	slides.forEach(function(v, i) {
		html  = '<div class="slide">';	
		html += '<img src="'+v.src+'" alt="'+v.title+'" class="w100">';	
		html += '</div>';
		$(html).appendTo($wrap);	
	});
	$( $wrapper.find('.slide').eq(0).clone() ).appendTo($wrap);
	$slide = $wrapper.find('.slide');
	$wrap.css('width', ($slide.length * 100)+'%');
	$slide.css('width', (100/$slide.length)+'%');
	lastIdx = $slide.length - 1;
}

function createPager() {
	slides.forEach(function(v, i) {
		$('<div class="pager">●</div>').appendTo($pagerWrap).click(onPager);
	});
	$pagerWrap.find('.pager').eq(0).addClass('active');
}

function chgSlide() {
	$wrap.stop().animate({'left': (-idx * 100) +'%'}, speed, function() {
		if(idx === lastIdx) {
			$wrap.css('left', 0);
			idx = 0;
		}
	});
}

function chgPager() {
	
}

/************* event callback ***********/
function onNext() {
	idx = (idx === lastIdx) ? 0 : idx + 1;
	chgSlide();
	chgPager();
}

function onPrev() {
	
}

function onPager() {
	
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

/*************** start init *************/
createSlide();
createPager();



/*************** 설명 *************/
/*
var arr = ['A', 'B', 'C'];
for(var i=0; i<arr.length; i++) console.log(arr[i]);
for(var i in arr) console.log(arr[i]);
for(var v of arr) console.log(v);
arr.forEach(function(v, i) {
	console.log(i, v);
});
*/
