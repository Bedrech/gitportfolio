// carousel
// on prend toute les variables pour le carousel
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.getElementById("rightarrow");
const prevButton = document.getElementById("leftarrow");

const slidesSize = slides[0].getBoundingClientRect();
const slideWidth = slidesSize.width;

//Met toute les images du carousel l'une à côté de l'autre
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
})

//quand on change de slide du carousel
const movetoslide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add("current_slide");
}

//bouton droit 
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling;

    movetoslide(track, currentSlide, nextSlide);
})

//bouton gauche
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current_slide");
    const previousSlide = currentSlide.previousElementSibling;

    movetoslide(track, currentSlide, previousSlide);
});

//mail
//on prend les éléments
var sendMail = document.getElementById("sendMail");
var nom = document.getElementById("nom");
var mail = document.getElementById("mail");
var message = document.getElementById("message");
var envoyer = document.getElementById("envoyer");

//On vérifie si l'email possède un @ ou pas
mail.addEventListener('input', function () {
    //On vérifie si le mail contient un @
    if (/@/.test(this.value)) {
        mailcheck = true;
    } else {
        mailcheck = false;
    }
});

// quand on appuie sur le bouton pour envoyer , envoi un message si il y a un problème , sinon envoie une alerte pour confirmer
envoyer.addEventListener("click", function () {
    if (mailcheck == false) {
        alert("le mail a besoin d'un @");
    } else if (nom.value == "") {
        alert("le nom est vide");
    } else if (message.value == "") {
        alert("le message vide");
    } else {
        alert("message bien envoyé");
    }
});

//on prend la balise p et les variable x et y
const mousePosText = document.getElementById('mouse-pos');
const mouseText = document.getElementById("mousetest");
let mousePos = { x: undefined, y: undefined };

// on fait en sorte que la balise p suive le curseur
window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.pageX, y: event.pageY };
    //   mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    mouseText.style.left = `${mousePos.x}` + "px";
    mouseText.style.top = `${mousePos.y}` + "px";
});