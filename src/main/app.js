import less from '~/less/styles.less';

window.onload = function() {
	var a = 'header--animated-one';
	var b = 'header--animted-two';
	var c = ['#DB5945', '#4DB6AC', '#BA68C8', '#F06292', '#9575CD', '#4DD0E1', '#FFD54F', '#90A4AE'];
	var random = Math.round(Math.random()*(c.length-1));
	var color = c[random];

	document.body.style.backgroundColor = color;
	document.getElementsByName('theme-color')[0].content = color;

	var classList = document.getElementById('header').classList;
	classList.add(a);

	window.setTimeout(function() {
		classList.add(b);
	}, 200);
};
