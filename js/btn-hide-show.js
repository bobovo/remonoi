window.onload = function bs() {
    document.getElementById("btn21").onclick = function bs(){
    hide();
    }
}

/*window.onload = function bh() {
    document.getElementById("btn22").onclick = function bh(){
    show();
    }
}*/ /* only one function at the its working*/

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