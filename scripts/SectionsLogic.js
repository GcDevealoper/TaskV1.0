
// let sideBtn = document.querySelectorAll('.SideBtn');
// let listCard = document.querySelectorAll('.ContentCard');
// let listCard2 = document.querySelectorAll('.ContentCard2');
// var acountCont = document.querySelectorAll('.container');
// let doingCont = document.querySelectorAll('.Doing');
// let fitCont = document.querySelectorAll('.FitCont');



let secStatus = 1;

let SideBarIcons = {
	Tareas: document.getElementById('Tareas'),
	Cuentas: document.getElementById('Cuentas'),
	Doing: document.getElementById('Doing'),
	Fitness: document.getElementById('Fitness2')
	
}

const Quitaricons = ()=>{
	for (const Icon in SideBarIcons){
		SideBarIcons[Icon].classList.remove('Selected')
	}
}


let Botones = {
	Tareas: document.getElementById('TodoList'),
	Cuentas: document.getElementById('Accounts'),
	Doing: document.getElementById('DoingBtn'),
	Fitness: document.getElementById('Fitness')
}

let ListasDeTareas = {
	Lista1: document.querySelectorAll('.ContentCard'),
	Lista2: document.querySelectorAll('.ContentCard2')
}

let Contenedores = {
	Cuentas: document.querySelectorAll('.container'),
	Doing: document.querySelectorAll('.Doing'),
	Fitness: document.querySelectorAll('.FitCont')
}

Botones.Tareas.addEventListener("click",()=>{
if (secStatus !== 1) {

	for(let index=0;index<ListasDeTareas.Lista1.length;index++){
		
			Botones.Tareas.classList.add('Selected')
			Quitaricons()
			SideBarIcons.Tareas.classList.add('Selected')
			Botones.Cuentas.classList.remove('Selected')
			Botones.Doing.classList.remove('Selected')
			Botones.Fitness.classList.remove('Selected')
			ListasDeTareas.Lista1[index].classList.toggle('open');
			ListasDeTareas.Lista2[index].classList.toggle('open');
			Contenedores.Cuentas[index].classList.remove('open');
			Contenedores.Doing[index].classList.remove('open');
			Contenedores.Fitness[index].classList.remove('open');
		  	formCards.setAttribute("style", "width:30%;height:84px;top:0")
		  	cardsForm[index].setAttribute("style", "align-items:center;")
			secStatus = 1;
		}
  	}
});

Botones.Cuentas.addEventListener("click",()=>{
	if (secStatus !== 2) {

		for(let index=0;index<Contenedores.Cuentas.length;index++){
			Botones.Cuentas.classList.add('Selected');
			Quitaricons()
			SideBarIcons.Cuentas.classList.add('Selected')
			Botones.Tareas.classList.remove('Selected');
			Botones.Doing.classList.remove('Selected');
			Botones.Fitness.classList.remove('Selected');
			ListasDeTareas.Lista1[index].classList.remove('open');
			ListasDeTareas.Lista2[index].classList.remove('open');
			Contenedores.Cuentas[index].classList.toggle('open');
			Contenedores.Doing[index].classList.remove('open');
			Contenedores.Fitness[index].classList.remove('open');
		  	formCards.setAttribute("style", "width:30%;height:500px;top:83px")
		  	cardsForm[index].setAttribute("style", "align-items:normal;")
			secStatus = 2;
		}
	}
});

Botones.Doing.addEventListener("click", ()=>{
	if (secStatus !== 3) {
		
		for(let index=0;index<Contenedores.Doing.length;index++){
			Botones.Doing.classList.add('Selected');
			Quitaricons()
			SideBarIcons.Doing.classList.add('Selected')
			Botones.Tareas.classList.remove('Selected');
			Botones.Cuentas.classList.remove('Selected');
			Botones.Fitness.classList.remove('Selected');
			ListasDeTareas.Lista1[index].classList.remove('open');
			ListasDeTareas.Lista2[index].classList.remove('open');
			Contenedores.Cuentas[index].classList.remove('open');
			Contenedores.Doing[index].classList.toggle('open');
			Contenedores.Fitness[index].classList.remove('open');
		  	formCards.setAttribute("style", "width:60%;height:500px;top:0px")
		  	cardsForm[index].setAttribute("style", "align-items:center;")
			secStatus = 3;
		}
	}
});

Botones.Fitness.addEventListener("click", ()=>{
	if (secStatus !== 4) {
		
		for(let index=0;index<Contenedores.Fitness.length;index++){
			Botones.Fitness.classList.add('Selected');
			Quitaricons()
			SideBarIcons.Fitness.classList.add('Selected')
			Botones.Tareas.classList.remove('Selected');
			Botones.Cuentas.classList.remove('Selected');
			Botones.Doing.classList.remove('Selected');
			Contenedores.Fitness[index].classList.toggle('open');
			ListasDeTareas.Lista1[index].classList.remove('open');
			ListasDeTareas.Lista2[index].classList.remove('open');
			Contenedores.Cuentas[index].classList.remove('open');
			Contenedores.Doing[index].classList.remove('open');
			secStatus = 4;
		}
	}
});
