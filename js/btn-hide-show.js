window.onload = function () {
    
    document.getElementById("btn11").onclick = function (){
    hide();
    }
    document.getElementById("btn12").onclick = function (){
    show();
    }
    
    document.getElementById("btn21").onclick = function (){
    hide();
    }
    document.getElementById("btn22").onclick = function (){
    show();
    }
    
    document.getElementById("btn31").onclick = function (){
    hide();
    }
    document.getElementById("btn32").onclick = function (){
    show();
    }
    
    document.getElementById("btn41").onclick = function (){
    hide();
    }
    document.getElementById("btn42").onclick = function (){
    show();
    }
    
    document.getElementById("btn51").onclick = function (){
    hide();
    }
    document.getElementById("btn52").onclick = function (){
    show();
    }
    
    document.getElementById("btn61").onclick = function (){
    hide();
    }
    document.getElementById("btn62").onclick = function (){
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