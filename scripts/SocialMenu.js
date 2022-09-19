
//MenuOpenonClick
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.MenuBtn');
var menuStatus = 1;

function openMenu(){
	if (menuStatus == 1){

		menu.classList.add('opened');
		menuStatus = 2;

	} else if (menuStatus == 2){
		
		menu.classList.remove('opened');
		menuStatus = 1;
	}
}

menuBtn.addEventListener("click", () => {
	openMenu();
});

