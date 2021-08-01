// 배열 - Array
var hongkd = {
	name: '홍길동',
	birth: '2010-11-15',
	gender: 'Man'
}
var hongks = {
	name: '홍길순',
	birth: '2010-05-15',
	gender: 'Woman'
}

var students = ['홍길동', '홍길순', '홍길만'];
console.log(students);
students[1] = '홍길희';
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

var fruits = ['banana', 'apple'];
var arr = ['A', 11, function() {}, {name: '홍길동'}, fruits];
console.log(arr);

var students = [{
	name: '홍길동',
	birth: '2010-11-15',
	gender: 'Man'
}, {
	name: '홍길순',
	birth: '2010-05-15',
	gender: 'Woman'
}];
console.log(students);

var prds = [
	{
		title: 'Good Products 01',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p1.jpg',
		price: '25.00'
	}, {
		title: 'Good Products 02',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p2.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 03',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p3.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 04',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p4.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 05',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p5.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 06',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p6.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 07',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p7.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 08',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p8.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 09',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p9.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 10',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p10.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 11',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p11.jpg',
		price: '28.00'
	}, {
		title: 'Good Products 12',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deleniti molestiae natus alias harum vero est delectus iure qui? Accusantium aspernatur saepe dolore neque cum incidunt fugit distinctio, culpa beatae.',
		src: '../img/p12.jpg',
		price: '28.00'
	}, 
]

console.log(prds);

function init() {
	for(var i=0; i<prds.length; i++) {
		var html = '';
		html += '<li class="prd">';
		html += '<div class="img-wp">';
		html += '<img src="'+prds[i].src+'" alt="상품" class="w-100">';
		html += '</div>';
		html += '<h2 class="title">'+prds[i].title+'</h2>';
		html += '<p class="content">'+prds[i].content+'</p>';
		html += '<h3 class="price">$'+prds[i].price+'</h3>';
		html += '</li>';
		document.getElementById('prdWrap').innerHTML += html;
	}
}
init();