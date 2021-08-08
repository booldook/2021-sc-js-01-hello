/*
for(var i=0; i<lists.length; i++) { // 순수 for
	console.log(lists[i]);
}

for(var i in lists) { // for ~ in
	console.log(lists[i]);
}

for(var v of lists) { // for ~ of
	console.log(v);
}


var arr = ['A', 'B', 'C'];
for(var index in arr) {
	console.log( index );
}
for(var value of arr) { // 얘는 아직 쓸 수 없다. ? ie11 미지원
	console.log( value );
}
arr.forEach(function(v, i) {
	console.log(v, i);
});

console.clear();
*/


var lists = [
	{ name: 'Good Product01', src: '../img/p1.jpg' },
	{ name: 'Good Product02', src: '../img/p2.jpg' },
	{ name: 'Good Product03', src: '../img/p3.jpg' },
	{ name: 'Good Product04', src: '../img/p4.jpg' },
	{ name: 'Good Product05', src: '../img/p5.jpg' },
	{ name: 'Good Product06', src: '../img/p6.jpg' },
	{ name: 'Good Product07', src: '../img/p7.jpg' },
	{ name: 'Good Product08', src: '../img/p8.jpg' },
];

var html = '';
for(var i in lists) {
	html = '<li class="thumb"><img src="'+lists[i].src+'" class="w100"></li>'; 
	// document.querySelector('.thumb-wrap').innerHTML += html;
	// console.log( $('.thumb-wrap').append(html) );
	// console.log( $(html).appendTo('.thumb-wrap') );
	// $('.thumb-wrap').append(html);
	$(html).appendTo('.thumb-wrap').click(onThumbClick);
}
// $('.thumb').click(function() { console.log(this) })

function onThumbClick() {
	$('.img-wrap img').attr('src', $(this).find('img').attr('src'));
}
