let accountBtn = document.querySelectorAll(".Accountsbtn")


for(let i=0;i<accountBtn.length;i++){
  
  accountBtn[i].addEventListener("click",()=>{
  	createAccountsForm()
  	cardsForm[i].classList.add('open')
  })
}