// https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=ko&
// http://asq.kr/xc4QQe

/** 
 * ! 다중 for문
*/

/*
var i = 0;

function a() {
	var i = 1;
	console.log(i);
}
console.log(i);
a();
*/

for(var i=2; i<=9; i++) {
	for(var j=1; j<=9; j++) {
		console.log(i + ' * ' + j + ' = ' + i * j);
	}
}




/**
 * ! onclick으로 실행 
 */
function showImg(el) {
	// document.querySelector('.img-wrap img').src = el.src;
	// document.getElementsByClassName('img-wrap')[0].getElementsByTagName('img')[0].src = el.src;
	// $('.img-wrap img').attr('src', el.src);
	// $('.img-wrap img').attr('src', $(el).attr('src'));
	// $('.img-wrap').find('img').attr('src', $(el).attr('src'));
}



/**
 * ! 순수 자바스크립트로 갤러리 
 */
/* document.querySelector('.wrapper').addEventListener('click', function() {
	console.log('hi');
}); */
// console.log(document.querySelectorAll('.thumb img'));
/*
var thumbs = document.querySelectorAll('.thumb');
var imgs = document.querySelectorAll('.thumb img');
for(var i=0; i<imgs.length; i++) {
	imgs[i].addEventListener('click', function() {
		document.querySelector('.img-wrap img').src = this.src;
		for(var j=0; j<thumbs.length; j++) { // 모든 .thumb의 border값을 지운다
			thumbs[j].style.border = '';
		}
		this.parentNode.style.border = '1px solid blue';
	});
}
*/

/**
 * ! jQuery 갤러리 
 */
$('.thumb').click(function() {
	$('.img-wrap img').attr('src', $(this).find('img').attr('src') );
	$('.thumb').css('border', '');
	$(this).css('border', '1px solid blue');
})
