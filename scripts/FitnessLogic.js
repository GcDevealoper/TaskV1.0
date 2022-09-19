let routineBtn = document.querySelectorAll('.RoutineButton')
let routineCont = document.querySelectorAll('.Routine')
let routineHead = document.querySelectorAll('.RoutineHeader')

for (let i=0;i<routineBtn.length;i++){
	routineBtn[i].addEventListener("click", ()=>{
		routineBtn[i].classList.toggle('Open')
		routineCont[i].classList.toggle('Open')
		routineHead[i].classList.toggle('Open')
	})
}
