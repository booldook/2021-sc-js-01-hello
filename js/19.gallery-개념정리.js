// document.getElementById("wrapper").style.border = '1px solid red';
// document.getElementsByClassName("thumb")[0].style.border = '1px solid blue';
// document.getElementsByClassName("thumb")[1].style.border = '1px solid blue';
// document.getElementsByTagName("ul")[0].style.border = '1px solid green';

// for(var i=0; i<document.getElementsByClassName('thumb').length; i++) {
// 	document.getElementsByClassName("thumb")[i].style.border = '1px solid blue';
// }

// $('#wrapper').css('border', '1px solid red');
// $(".thumb").css('border', '1px solid blue');
// $("ul").eq(0).css('border', '1px solid green');

// console.log( $('.wrapper') );
// console.log( $('.wrapper')[0] );
// console.log( document.getElementById("wrapper") );
// console.log( $(document.getElementById("wrapper")) );
// console.log( $($($('.wrapper')[0])[0])[0] );

// console.log($('#wrapper'));

// $('#wrapper')[0].style.border = '10px solid red';

/*
$('#wrapper').addClass()
$('#wrapper').removeClass()
$('#wrapper').toggleClass()
$('#wrapper').animate()
$('#wrapper').show()
$('#wrapper').hide()
$('#wrapper').css()
*/

// console.log( document.getElementsByClassName('wrapper')[0].getElementsByClassName('thumb-wrap')[0].getElementsByClassName('thumb')[1] );
// console.log( document.getElementsByClassName('thumb')[1] );
// console.log( $('.wrapper .thumb-wrap .thumb').eq(1) );
// console.log( $('.wrapper').find('.thumb-wrap').find('.thumb').eq(1) );
// console.log( $('.wrapper').find('.thumb').eq(1) );
// console.log( $('.thumb').eq(1) );

// document.querySelector() // 객체
// document.querySelectorAll() // 배열

// console.log( document.querySelector('#wrapper') );
// console.log( document.querySelector('.wrapper') );
// console.log( document.querySelector('.thumb') );
// console.log( document.querySelectorAll('.thumb') );
// console.log( document.querySelectorAll('.thumb')[0] );
// console.log( document.querySelectorAll('.thumb')[1] );

/************* 용어정리 *************/
// Attribute(속성) - 태그의 속성

// Parameter(인자, 매개변수), Argument - 
function test(x, y) {
	// x, y : Parameter(인자, 매개변수), Argument
}

// function, method
function test2() {
	// function
}
var Man = {
	run: function() {
		// Method
	}
}
Man.run();

// variable, property(Member)
var a = 10; // variable
var Woman = {
	age : 20 // Property
}