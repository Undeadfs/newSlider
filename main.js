let btnRight = document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft")
let slides = document.querySelectorAll("img");
let i = 0;
 
btnRight.addEventListener("click",()=>{
    slides.forEach((item) => {
        item.classList.remove("active")
    });
    i++;
    if(i>(slides.length-1)){
        i=0;
    }
    slides[i].classList.add("active");
});

btnLeft.addEventListener("click",()=>{
    slides.forEach((item) => {
        item.classList.remove("active")
    });
    i--;
    if(i<0){
        i=slides.length-1;
    }
    slides[i].classList.add("active");
});