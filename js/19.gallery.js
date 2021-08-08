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

var el = $('.img-wrap').css('border', '1px solid red'); // Setter
console.log(el);

var obj = {
	name: '홍길동',
	age: 24,
}
console.log(obj.age);
console.log(obj['age']);