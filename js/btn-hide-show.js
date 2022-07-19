window.onload = function () {
    
    document.getElementById("btn21").onclick = function (){
    hide();
    }
    document.getElementById("btn22").onclick = function (){
    show();
    }
}

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