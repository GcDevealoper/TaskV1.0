
//TaskManagment
let TaskGear = document.getElementById('TaskGear')
let eraseTask = document.querySelectorAll('.EraseTask')



//Mostrar botones de las task
TaskGear.addEventListener("click", ()=>{
	managCards()

	let Task = document.querySelectorAll('.Task')
	for (let i=0;i<Task.length;i++){
		let checkTask = document.querySelectorAll('.CheckTask')
		checkTask[i].addEventListener("click", TacharTask)
	}

	let eraseTask = document.querySelectorAll('.EraseTask')
	for (let i=0;i<eraseTask.length;i++){
		eraseTask[i].addEventListener("click", ()=>{
			let padre = eraseTask[i].parentNode
			padre.parentNode.remove()
		})
	}

})

AddTask.addEventListener("click", ()=>{
	for (let i=0;i<cardsForm.length;i++){
	  cardsForm[i].classList.add('open');
	  createTaskForm()
	  resetManag()

		let TaskButton = document.getElementById('AddTaskButton')
		TaskButton.addEventListener("click", ()=>{
			AddTaskToTheList()
			for (let i=0;i<cardsForm.length;i++){
		      cardsForm[i].classList.remove('open');
		      eraseTaskForm
			}

		})
	}
})
