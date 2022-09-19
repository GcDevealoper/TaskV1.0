/*-------------------------*/
//Head
let AddTask = document.getElementById('AddTask')
let TodoList = document.getElementById('ListTDo')
const UserProfile = document.querySelector('.UserProfile')
const UserProfile2 = document.querySelector('.UserCard')
let UserImage
let UserName

//DoingCards
let mangasBtn = document.getElementById('MBtn');
let animeBtn = document.getElementById('AnBtn');
let gameBtn = document.getElementById('GaBtn');
let mangasCont = document.querySelectorAll('.Mangas');
let animeCont = document.querySelectorAll('.Animes-Series');
let gameCont = document.querySelectorAll('.Games');
let doingStatus = "manga";
let sectionBtn = document.querySelectorAll('.SectionBtn');

//CartasDinamicas
let doingCards = document.querySelectorAll('.DoingCard');
let addCardBtn = document.querySelectorAll('.Addbtn');
let mangasCont2 = document.getElementById('Mangas');
let animeCont2 = document.getElementById('Anime');
let gameCont2 = document.getElementById('Game');
let cardsForm = document.querySelectorAll('.CardFormBg');
let formCards = document.getElementById('CardsForm');
let closeBtn = document.getElementById('CloseForm');
let verifyBtn = document.getElementById('Verificar');
let manageCards = document.getElementById('manageCards');
let mangaBook = "";
let number = 0;
let src;

//Objetos
const images = {
	'defaulProfile': 'img/Profiles/Default.png',
}

const Colors ={
	'pink': '#e61c8c'
}


UserImage = images['defaulProfile']
UserName = 'Anonymous'

/*Fin de las variables*/

//SideBarItems
	UserProfile2.innerHTML = `
	  <img src="${UserImage}">

		<div id="Buttons">
		  <span id="TodoList" class="SideBtn Selected"><i class="fas fa-bookmark SideBarIcon Selected" id="Tareas" aria-hidden="true"></i>
		    To Do List </span>
		  
		  <span id="Accounts" class="SideBtn"><i class="fas fa-laptop SideBarIcon" id="Cuentas" aria-hidden="true"></i>
		    Account's </span>
		  
		  <span id="DoingBtn" class="SideBtn Buttons"><i class="fas fa-book SideBarIcon" id="Doing" aria-hidden="true"></i>
			Watching</span>

		  <span id="Fitness" class="SideBtn Buttons"><i class="fas fa-heartbeat SideBarIcon" id="Fitness2"></i> 
    		Fitness</span>
	  	</div>`

	UserProfile.innerHTML = `
	  <img src="${UserImage}">
	  <h3>${UserName}</h3>` 

/*---------------------------------------------*/
//Cambiando de Seccion en Watching

 mangasBtn.addEventListener("click", ()=>{
	if(doingStatus == "manga"){}
	else{
	 for(let index=0;index<mangasCont.length;index++){
		
			mangasCont[index].classList.toggle('open');
			animeCont[index].classList.remove('open');
			gameCont[index].classList.remove('open');
			sectionBtn[0].classList.toggle('Selected');
			sectionBtn[1].classList.remove('Selected');
			sectionBtn[2].classList.remove('Selected');
			doingStatus = "manga";
		};
	 }
 });

 animeBtn.addEventListener("click", ()=>{
 	if (doingStatus == "Anime-Series") {}
 	else{
	  for(let index=0;index<animeCont.length;index++){
		 	
		 		animeCont[index].classList.toggle('open');
		 		mangasCont[index].classList.remove('open');
		 		gameCont[index].classList.remove('open');
 				sectionBtn[1].classList.toggle('Selected');
 				sectionBtn[0].classList.remove('Selected');
 				sectionBtn[2].classList.remove('Selected');
		 		doingStatus = "Anime-Series";
		 	};
	   }
 });


 gameBtn.addEventListener("click", ()=>{
 	if (doingStatus == "games") {}
 	else{
      for(let index=0;index<gameCont.length;index++){
			gameCont[index].classList.toggle('open');
			animeCont[index].classList.remove('open');
			mangasCont[index].classList.remove('open');
			sectionBtn[2].classList.toggle('Selected');
			sectionBtn[1].classList.remove('Selected');
			sectionBtn[0].classList.remove('Selected');
			doingStatus = "games";
		 };
	   }
 });


/*---------------------------------------------*/
//Creando cartas


//Abriendo Formulario
for(let i=0;i<addCardBtn.length;i++){

	addCardBtn[i].addEventListener("click", ()=>{
		for(let i=0;i<mangasCont.length;i++){
			cardsForm[i].classList.add('open');
			createForm();
			resetManag();
			let verifyBtn = document.getElementById('Verificar');

			//Llamando Funcion para obtener la Url del archivo del Input File en Watching
			obtenerUrldelInput()

			//Validando Campos
			verifyBtn.addEventListener("click", ()=>{
				validarCampos();
				ccBtn.removeAttribute("class","hidden")

			//Creando las cartas
			ccBtn.addEventListener("click", ()=>{	
			    createCard();
			 	cardsForm[i].classList.remove('open');
				eraseForm();
			  });
			});
		}
	});
};

//Cerrar Form al tocar en cualquier otro lado
for (let i=0;i<cardsForm.length;i++){
  cardsForm[i].addEventListener("click", ()=>{

    cardsForm[i].classList.toggle('open')
    if (secStatus == 1) {
      eraseTaskForm()
    }else if (secStatus === 3) {
      eraseForm()
    }else if (secStatus === 2) {
      eraseAccountsForm()
    }

  })
}

//Cerrando Formulario
closeBtn.addEventListener("click", ()=>{
	for(let i=0;i<mangasCont.length;i++){
		cardsForm[i].classList.remove('open');
		if (secStatus == 1) {
     	  eraseTaskForm()
   		}else if (secStatus === 3) {
		  eraseForm();
		}else if (secStatus === 2) {
      	  eraseAccountsForm()
    	}
	};
});

formCards.addEventListener("click", (e)=>{
	e.stopPropagation()
}, false)

//Mostrar botones de cartas
manageCards.addEventListener("click", ()=>{
	managCards();
});



