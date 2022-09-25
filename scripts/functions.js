
function createForm(){
//Imagen de fondo
	src = `img/Cover/Manga/${doingStatus}.png`;
	imageCont = document.createElement("div");
	imageBg = document.createElement("img");
	imageBg.setAttribute("src",`${src}`);
	imageCont.appendChild(imageBg);

//Formulario
	form = document.createElement("form");
	form.setAttribute("id","Form");


//Contenedor de las Opciones
	Options = document.createElement("div")
	Options.setAttribute("id", "Options")

//Botones
	btnsCont = document.createElement("div");
	btnsCont.style.display = "flex";
	btnsCont.style.width = "auto";
	btnsCont.style.gap = "8px";
	vBtn = document.createElement("span");
	vBtn.setAttribute("id","Verificar");
	vBtn.innerText = "Verificar";
	ccBtn = document.createElement("span");
	ccBtn.setAttribute("id","CrearCarta");
	ccBtn.setAttribute("class","hidden");
	ccBtn.innerText = "Añadir";

	OptionsBtnContainer = document.createElement("div")
	OptionsBtnContainer.setAttribute("class", "OptionsBtnContainer")
	OptionsBtnContainer.innerHTML = `
	  <i class="fa-solid fa-laptop-file OptionsBtns Selected"></i>
	  <i class="fas fa-file-code OptionsBtns"></i>
	  </i><i class="fa-solid fa-file-pen OptionsBtns"></i>
	`

	btnsCont.appendChild(vBtn);
	btnsCont.appendChild(ccBtn);
	form.appendChild(OptionsBtnContainer)
	form.appendChild(Options)
	form.appendChild(btnsCont);
	//Juntando objetos en el form
	formCards.appendChild(imageCont);
	formCards.appendChild(form);
	ViaFile()
	
}

function ViaFile(){
let OptionsContainer = document.getElementById('Options')
OptionsContainer.innerHTML = ""

	Photoname = document.createElement("label");
	Photoname.innerText = "Photo Name"
	PhotonameInput = document.createElement("input");
	PhotonameInput.setAttribute("type","text");
	PhotonameInput.setAttribute("placeholder", "Type a name for the image")
	PhotonameInput.setAttribute("id", "Photoname")

	PhotoFile = document.createElement("label");
	PhotoFile.innerHTML = `
	  <input type="file" accept="image/*" class="ImageInput" id="ImageInput" style="margin:5px 0px;display:none;">
	  <i class="fa-solid fa-file-image ImageButton"></i>
	`

	OptionsContainer.appendChild(Photoname)
	OptionsContainer.appendChild(PhotonameInput)
	OptionsContainer.appendChild(PhotoFile)

	PhotonameInput.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			
			e.preventDefault();

		}
	});
}

function ViaUrl(){
let OptionsContainer = document.getElementById('Options')
OptionsContainer.innerHTML = ""

	PhotonameLabel = document.createElement("label");
	PhotonameLabel.innerText = "Photo Name"
	PhotonameInput = document.createElement("input");
	PhotonameInput.setAttribute("type","text");
	PhotonameInput.setAttribute("placeholder", "Type a name for the image")
	PhotonameInput.setAttribute("id", "Photoname2")

		
	PhotoUrlLabel = document.createElement("label");
	PhotoUrlLabel.innerText = "Via Image Url"
	PhotoUrlInput = document.createElement("input");
	PhotoUrlInput.setAttribute("type","text");
	PhotoUrlInput.setAttribute("placeholder", "Put the Image Url")
	PhotoUrlInput.setAttribute("id", "UrlInput")

	OptionsContainer.appendChild(PhotonameLabel)
	OptionsContainer.appendChild(PhotonameInput)
	OptionsContainer.appendChild(PhotoUrlLabel)
	OptionsContainer.appendChild(PhotoUrlInput)

	PhotonameInput.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			
			e.preventDefault();

		}
	});

	PhotoUrlInput.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			
			e.preventDefault();

		}
	});
}

function ViaName(){
let OptionsContainer = document.getElementById('Options')
OptionsContainer.innerHTML = ""

	VianameLabel = document.createElement("label");
	VianameLabel.innerText = "Via Name"
	VianameInput = document.createElement("input");
	VianameInput.setAttribute("type","text");
	VianameInput.setAttribute("placeholder", "Type the Image Name")
	VianameInput.setAttribute("id", "VianameInput")

	OptionsContainer.appendChild(VianameLabel)
	OptionsContainer.appendChild(VianameInput)
	
	VianameInput.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			
			e.preventDefault();

		}
	});
}

function validarCampos(){
	let ImageInput = document.getElementById('ImageInput')
	

	//Via name guardado
	if (OptionStatus == 0) {
	  let Photoname = document.getElementById('Photoname')
	  let ImageName = Photoname.value
	  images[ImageName] = src

     //Via Url
	}else if (OptionStatus == 1){
	  let UrlInput = document.getElementById('UrlInput')
	  let Photoname = document.getElementById('Photoname2')
	  let ImageName = Photoname.value
	  mangaBook = UrlInput.value//Url
	  images[ImageName] = mangaBook
	  src = images[ImageName]
	 //Via File
	}else if (OptionStatus == 2) {
		let VianameInput = document.getElementById('VianameInput')
		ViaNames = VianameInput.value//Elegir la imagen por un nombre guardado
		for (const image in images) {
		  if (image == ViaNames) {
		  	src = images[image]
		  	break
		  }
    	}		
	}


	imageBg.setAttribute("src",`${src}`);
	Photoname.value = "";
	btnsCont.removeChild(vBtn)
}

function eraseForm(){
	src = `img/Cover/Manga/${doingStatus}.png`;
	formCards.removeChild(imageCont);
	formCards.removeChild(form);
	mangaBook = "";
	number = 0;
}



//Creando las Cards
function createCard(){

//Creando el div padre
	let div = document.createElement("div");
//Dandole la clase al div padre	
	div.setAttribute("class","DoingCard");
//creando el boton para borrar la carta	
	let eraseCardBtn = document.createElement("span");
//Dandole las clases al boton	
	eraseCardBtn.setAttribute("class","fa-solid fa-xmark eraseCard");
	//eraseCardBtn.setAttribute("id","eraseButton");
//Creando el img de la carta	
	let img = document.createElement("img");
//Dandole las clases al img	
	img.setAttribute("src",`${src}`);
	img.setAttribute("class", "image");
//Agregando el img y el boton de borrar al div padre	
	div.appendChild(img);
	div.appendChild(eraseCardBtn);
//Añadiendo la carta al contenedor en el que se está actualmente
	if (doingStatus === "manga") {
		mangasCont2.appendChild(div);
	}else if (doingStatus === "Anime-Series") {
		animeCont2.appendChild(div);
	}else if (doingStatus === "games") {
		gameCont2.appendChild(div);
	}
//Reseteando los valores de variables
	mangaBook = "";
	number = 0;

//Logica para borrar las cartas
//Borrar carta
let eraseButton = document.querySelectorAll('.eraseCard');
let carta = document.querySelectorAll('.DoingCard');
//listener borrar carta
for(let i=0;i<carta.length;i++){
	eraseButton[i].addEventListener("click", (e)=>{
	  carta[i].remove();
	  e.stopPropagation()
	}, false)
};

let Src

for(let i=0;i<carta.length;i++){
  carta[i].addEventListener("click", ObtenerUrldeLaCarta)
}

}

function ObtenerUrldeLaCarta(e) {
	let Carta = e.target
	url = Carta.src;
	//console.log(url)
	FormParaPreview(url)
}

function FormParaPreview(url) {
	let form = document.getElementById('CardsForm')
	form.setAttribute("style", "width:auto;height:inherit;max-height:80vh;")
	let PreviewImage = document.createElement('img')
	PreviewImage.setAttribute("src", `${url}`)
	PreviewImage.setAttribute("style", "width: 100%;height: 100%;object-fit: contain;object-position:top;")
	PreviewImage.setAttribute("id", "Preview")
	form.appendChild(PreviewImage)
  	cardsForm[0].classList.toggle('open')
    secStatus = "Preview"

}

function erasePreview(){
		let form = document.getElementById('CardsForm')
		let PreviewImage = document.getElementById('Preview')
		form.setAttribute("style", "width:60%;height:500px;top:0px")
		form.removeChild(PreviewImage)
		secStatus = 3
}


//Show Hidden cardButton
function managCards(){
let eraseButton = document.querySelectorAll('.eraseCard')
let eraseTask = document.querySelectorAll('.EraseTask')
let checkTask = document.querySelectorAll('.CheckTask')

	if (secStatus == 1) {
	  for (let i=0;i<eraseTask.length;i++){
	  	eraseTask[i].classList.toggle('Open')
	  	checkTask[i].classList.toggle('Open')
	  }
	}else if (secStatus == 3) {
	  for(let i=0;i<eraseButton.length;i++){
	    eraseButton[i].classList.toggle('open');
 	  }
	}
};

function resetManag(){
	let eraseButton = document.querySelectorAll('.eraseCard')
	let eraseTask = document.querySelectorAll('.EraseTask')
	let checkTask = document.querySelectorAll('.CheckTask')
	
	if (secStatus == 1) {
	  for (let i=0;i<eraseTask.length;i++){
	  	eraseTask[i].classList.remove('Open')
	  	checkTask[i].classList.remove('Open')
	  }
	}else if (secStatus == 3) {
	  for(let i=0;i<eraseButton.length;i++){
	    eraseButton[i].classList.remove('open');
	  }
	}
};

function createAccountsForm(){
	formContainer = document.createElement("form")
	formContainer.setAttribute("id", "AccountsForm")
	firstLabel = document.createElement("label")
	firstLabel.innerText = "Account Name"
	firstInput = document.createElement("input")
	firstInput.setAttribute("type", "text")
	firstInput.setAttribute("placeholder", "Type your Name")

	secondLabel = document.createElement("label")
	secondLabel.innerText = "Mail"
	secondInput = document.createElement("input")
	secondInput.setAttribute("type", "email")
	secondInput.setAttribute("placeholder", "Type your Mail")

	thirdLabel = document.createElement("label")
	thirdLabel.innerText = "Password"
	thirdInput = document.createElement("input")
	thirdInput.setAttribute("type", "password")
	thirdInput.setAttribute("placeholder", "Type your Password")

	button = document.createElement("span")
	button.setAttribute("id", "AddAccount")
	button.innerText = "Add Account"

	formContainer.appendChild(firstLabel)
	formContainer.appendChild(firstInput)
	formContainer.appendChild(secondLabel)
	formContainer.appendChild(secondInput)
	formContainer.appendChild(thirdLabel)
	formContainer.appendChild(thirdInput)
	formContainer.appendChild(button)

	formCards.appendChild(formContainer)
}

function createTaskForm() {
  formContainer = document.createElement("form")
  formContainer.setAttribute("id", "TaskForm")
  formContainer.innerHTML = `
  <i class="fas fa-tasks"></i>
  <input type="text" placeholder="Type Your Task" id="TaskInput">
  <span id="AddTaskButton">Add Task</span>
  `
  formCards.appendChild(formContainer)
  let TaskInput = document.getElementById('TaskInput')
  TaskInput.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		
		e.preventDefault();
		cardsForm[0].classList.toggle('open')
		AddTaskToTheList()
	  	let eraseTaskBtn = document.getElementById('CloseForm')
	  	eraseTaskBtn.setAttribute("style", "top:4%")
		eraseTaskForm

	}
});
}

function  eraseTaskForm() {
	let TaskButton = document.getElementById('AddTaskButton')
	TaskButton.parentNode.remove()
}


function eraseAccountsForm() {
	formCards.removeChild(formContainer)
}

function obtenerUrldelInput(){

	let ImageInput = document.getElementById('ImageInput')
	ImageInput.addEventListener("change", function (){
		const file = this.files[0]

		if (file) {
			const reader = new FileReader()

			reader.addEventListener("load", function () {
				//console.log(this)
				src = this.result
				//console.log(src)
			})

			reader.readAsDataURL(file)
		}
	})

}

function AddTaskToTheList() {

let TodoList = document.getElementById('ListTDo')
let Input = document.getElementById('TaskInput')
	let li = document.createElement('li')
	li.setAttribute("class", "Task2")
	li.innerHTML = `
	  <span class="Task">-${Input.value}<span class="fa-solid fa-xmark EraseTask"></span><span class="fa-solid fa-circle-check CheckTask"></span></span>
	`

	TodoList.appendChild(li)
    eraseTaskForm()

}

function TacharTask(e) {
	let child = e.target
	let padre = child.parentNode
	padre.classList.toggle('Finished')
}

function resetearSeleccion() {
let OptionsBtns = document.querySelectorAll('.OptionsBtns')

for (let i=0;i<OptionsBtns.length;i++){
	OptionsBtns[i].classList.remove('Selected')
}

}