function hide() {
	var myClasses = document.querySelectorAll('.play-button'),
		i = 0,
		l = myClasses.length;

	for (i; i < l; i++) {
		myClasses[i].style.visibility = 'hidden';
	}
}
			
function show() {
	var myClasses = document.querySelectorAll('.play-button'),
		i = 0,
		l = myClasses.length;

	for (i; i < l; i++) {
		myClasses[i].style.visibility = 'visible';
	}
}