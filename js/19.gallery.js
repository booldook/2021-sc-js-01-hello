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
