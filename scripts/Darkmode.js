let head = document.getElementById('Si');//el boton para activar el darkmode
let body = document.querySelector('body');

load();

head.addEventListener("click", ()=>{

	body.classList.toggle('Lightmode');
	store(body.classList.contains('Lightmode'));
});


function load(){
	const Lightmode = localStorage.getItem('Lightmode');

	if (!Lightmode) {
		store('false');
	}else if (Lightmode == 'true') {
		body.classList.add('Lightmode');
	}
}

function store(value){
	localStorage.setItem('Lightmode', value);
}