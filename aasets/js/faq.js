//FAQ section
let cards=document.querySelectorAll(".Question .card");
let paragraphs=document.querySelectorAll(".Question p");
let icon=document.querySelectorAll(".Questionn span ");
let header=document.querySelectorAll(".Question h5");
let plusIcon=document.querySelectorAll(".Question .fa-plus");

for (let i = 0;i < cards.length; i++){
    cards[i].addEventListener("click",()=>{
        cards[i].classList.toggle("cardshow");
        header[i].classList.toggle("headerbg");
        if(plusIcon[i].classList.contains("fa-plus")){
            plusIcon[i].classList.remove("fa-plus");
            plusIcon[i].classList.add("fa-minus");
        }
        else{
            plusIcon[i].classList.add("fa-plus");
            plusIcon[i].classList.remove("fa-minus");
        }
    });
}