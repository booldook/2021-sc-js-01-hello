function showImg(el) {
	// document.querySelector('.img-wrap img').src = el.src;
	// document.getElementsByClassName('img-wrap')[0].getElementsByTagName('img')[0].src = el.src;
	// $('.img-wrap img').attr('src', el.src);
	// $('.img-wrap img').attr('src', $(el).attr('src'));
	// $('.img-wrap').find('img').attr('src', $(el).attr('src'));
}

/* document.querySelector('.wrapper').addEventListener('click', function() {
	console.log('hi');
}); */
// console.log(document.querySelectorAll('.thumb img'));
var imgs = document.querySelectorAll('.thumb img');
for(var i=0; i<imgs.length; i++) {
	imgs[i].addEventListener('click', function() {
		document.querySelector('.img-wrap img').src = this.src;
	});
}