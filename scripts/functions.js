
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
	// nameLabel = document.createElement("label");
	// nameLabel.innerText = "Via Image Url"
	// nameInput = document.createElement("input");
	// nameInput.setAttribute("type","text");
	// nameInput.setAttribute("placeholder", "Put the Image Url")



	nameLabel2 = document.createElement("label");
	nameLabel2.innerText = "Via Name"
	nameInput2 = document.createElement("input");
	nameInput2.setAttribute("type","text");
	nameInput2.setAttribute("placeholder", "Put the Image Name")
	
	nameLabel1 = document.createElement("label");
	nameLabel1.innerText = "Photo Name"
	nameInput1 = document.createElement("input");
	nameInput1.setAttribute("type","text");
	nameInput1.setAttribute("placeholder", "Type a name for the image")


	nameLabel3 = document.createElement("label");
	nameLabel3.innerHTML = `
	  Via File <br>
	  <input type="file" accept="image/*" class="ImageInput" id="ImageInput" style="margin:5px 0px;display:none;"><br>
	  <span class="ImageButton">Choose a Image File</span>
	`
	// nameInput3 = document.createElement("input");
	// nameInput3.setAttribute("type","file");
	// nameInput3.setAttribute("accept", "image/*")
	// nameInput3.setAttribute("placeholder", "Select a Img File")

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

	btnsCont.appendChild(vBtn);
	btnsCont.appendChild(ccBtn);
	// form.appendChild(nameLabel);
	// form.appendChild(nameInput);
	form.appendChild(nameLabel2);
	form.appendChild(nameInput2);
	form.appendChild(nameLabel1);
	form.appendChild(nameInput1);
	form.appendChild(nameLabel3);
	form.appendChild(btnsCont);
	//Juntando objetos en el form
	formCards.appendChild(imageCont);
	formCards.appendChild(form);
	
}

function validarCampos(){
	ImageName = nameInput1.value//Nombrar la imagen
	ViaName = nameInput2.value//Elegir la imagen por un nombre guardado
	ImageInput = document.getElementById('ImageInput')
	

	//Via name guardado
	if (mangaBook.length == 0 && ImageName.length == 0) {
		for (const image in images) {
		  if (image == ViaName) {
		  	src = images[image]
		  	break
		  }
    	}
     //Via Url
	}else{
		images[ImageName] = src
	}

	imageBg.setAttribute("src",`${src}`);
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
	eraseButton[i].addEventListener("click", ()=>{
	  carta[i].remove();
	});
};
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