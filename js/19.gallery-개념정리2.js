// window.getComputedStyle( DOM객체 ) : 모든 style
// window.getComputedStyle( DOM객체 ).getPropertyValue('css명칭') : css값
// console.log( window.getComputedStyle( document.querySelector('.img-wrap') ).getPropertyValue('border') );
// console.log( document.querySelector('.wrapper').style.border = '1px solid red' );
// console.log( document.querySelector('.wrapper').style.border );

var border = $('.img-wrap').css('border'); // Getter
console.log(border); //문자열

var border = $('.img-wrap').css(['border', 'border-radius']); // Getter : Object
console.log(border);
// console.log(border.border-radius); // error
console.log(border['border-radius']); // success

var $el = $('.img-wrap').css('border', '1px solid red'); // Setter
console.log($el);

var obj = {
	name: '홍길동',
	age: 24,
}
console.log(obj.age);
console.log(obj['age']);


console.log( $('.thumb').attr('class') );
// $('.thumb').eq(0).attr('id', 'thumb0');
// $('.thumb').eq(1).attr('id', 'thumb1');

document.getElementsByClassName('thumb')[0].id = 'thumb0';
document.querySelectorAll('.thumb')[1].id = 'thumb1';

/** 
* ? 자바스크립트란?
*
* ! 1. DOM접근
* ? getElementByID() / getElementsByClassName() / getElementsByTagName()
* ? querySelector() / querySelectorAll()
* ? $('CSS접근제어자')
*
* ! 2. DOM속성
* ? document.querySelector('.wrapper').id
* ? document.querySelector('.wrapper').id = 'thumb';
* ? document.querySelector('.wrapper img').src;
* ? document.querySelector('.wrapper img').src = '../img/p1.jpg';
* ? $('.wrapper').attr('id');
* ? $('.wrapper').attr('id', 'thumb');
* ? $('.wrapper').attr('src');
* ? $('.wrapper').attr('src', '..img/p1.jpg');
*
* ! 3. CSS제어
*	? window.getComputedStyle(DOM).getPropertyValue('border')
*	? document.querySelector('.wrapper img').style.border = '1px solid red';
*	? $('.wrapper').css('border');
*	? $('.wrapper').css('border', '1px solid green');
*
* ! 4. DOM 수정, 삭제, 추가
* ? document.querySelector('.wrapper').innerHTML;
* ? document.querySelector('.wrapper').innerHTML = '<div>A</div>';
* ? document.querySelector('.wrapper').innerHTML += '<div>A</div>';
* ? document.querySelector('.wrapper').innerHTML = document.querySelector('.wrapper').innerHTML + '<div>A</div>';
* ? $('.wrapper').html(); // 58번라인
* ? $('.wrapper').html('<div>A</div>'); // 59번라인
* ? $('.wrapper').append('<div>A</div>'); // 60번라인
*/