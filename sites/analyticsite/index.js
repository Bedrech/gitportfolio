const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.getElementById("rightarrow");
const prevButton = document.getElementById("leftarrow");

const slidesSize = slides[0].getBoundingClientRect();
const slideWidth = slidesSize.width;

//Met toute les images du carousel l'une à côté de l'autre
slides.forEach((slide,index) => {
    slide.style.left = slideWidth * index + "px";
})


const movetoslide = (track,currentSlide,targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add("current_slide");
}

//bouton droit 
nextButton.addEventListener("click",e =>{
const currentSlide = track.querySelector(".current_slide");
const nextSlide = currentSlide.nextElementSibling;

movetoslide(track,currentSlide,nextSlide);
})

//bouton gauche
prevButton.addEventListener("click",e =>{
    const currentSlide = track.querySelector(".current_slide");
    const previousSlide = currentSlide.previousElementSibling;
    
movetoslide(track,currentSlide,previousSlide);
    })