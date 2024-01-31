// on prend tout les blocks noirs
var premierchemin = document.getElementById("premierchemin");
var deuxiemechemin = document.getElementById("deuxiemechemin");
var troisiemechemin = document.getElementById("troisiemechemin");
var quatriemechemin = document.getElementById("quatriemechemin");
var cinquiemechemin = document.getElementById("cinquiemechemin");
var sixiemechemin = document.getElementById("sixiemechemin");
var septiemechemin = document.getElementById("septiemechemin");
var huitiemechemin = document.getElementById("huitiemechemin");
var neuviemechemin = document.getElementById("neuviemechemin");
// on prend le labyrinthe entier
var labyrinthe = document.getElementById("labyrinthe");

// on cache le labyrinthe
labyrinthe.style.display = "none";

// on met une alerte pour faire perdre le joueur quand il passe sur les blocks noirs
premierchemin.addEventListener("mouseover",function(){
    alert("lose");
})
deuxiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
troisiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
quatriemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
cinquiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
sixiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
septiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
huitiemechemin.addEventListener("mouseover",function(){
    alert("lose");
})
neuviemechemin.addEventListener("mouseover",function(){
    alert("lose");
})

// on prend le block vert
var vert = document.getElementById("vert");

// on met une alerte pour faire gagner le joueur quand il passe sur le block vert
vert.addEventListener("mouseover",function(){
    alert("win");
    // si le premier niveau est fini , on lance le deuxieme
    if(bienvenue.innerText == "Niveau 1")
    {
    bienvenue.innerText = "Niveau 2";
    premierchemin.style.width = "20%";
    premierchemin.style.height = "100%";
    premierchemin.style.marginTop = "0";
    deuxiemechemin.style.width = "40%";
    deuxiemechemin.style.height = "40%";
    troisiemechemin.style.width = "50%";
    troisiemechemin.style.height = "80%";
    troisiemechemin.style.marginLeft = "50%";
    quatriemechemin.style.width = "100%";
    quatriemechemin.style.marginLeft = "0";
    quatriemechemin.style.height = "10%";
    quatriemechemin.style.marginTop = "90%";
    sixiemechemin.style.height = "70%";
    sixiemechemin.style.width = "20%";
    sixiemechemin.style.marginTop = "30%"
    sixiemechemin.style.marginLeft = "10%";
    septiemechemin.style.width = "40%";
    septiemechemin.style.height = "30%";
    septiemechemin.style.marginLeft = "30%";
    septiemechemin.style.marginTop = "50%";
    vert.style.marginTop = "0%";
    vert.style.marginLeft = "40%";
    }
    // si le deuxieme niveau est fini , on lance le troisieme
    else if (bienvenue.innerText == "Niveau 2"){
        bienvenue.innerText = "Niveau 3";
    premierchemin.style.width = "40%";
    premierchemin.style.height = "80%";
    premierchemin.style.marginTop = "0";
    premierchemin.style.backgroundColor = "black";
    deuxiemechemin.style.width = "40%";
    deuxiemechemin.style.height = "40%";
    deuxiemechemin.style.backgroundColor = "black";
    troisiemechemin.style.width = "20%";
    troisiemechemin.style.height = "80%";
    troisiemechemin.style.marginLeft = "80%";
    troisiemechemin.style.backgroundColor = "black";
    quatriemechemin.style.width = "100%";
    quatriemechemin.style.marginLeft = "0";
    quatriemechemin.style.height = "10%";
    quatriemechemin.style.marginTop = "90%";
    quatriemechemin.style.backgroundColor = "black";
    cinquiemechemin.style.marginLeft = "80%";
    cinquiemechemin.style.width = "20%";
    cinquiemechemin.style.backgroundColor = "black";
    sixiemechemin.style.height = "30%";
    sixiemechemin.style.width = "30%";
    sixiemechemin.style.marginTop = "20%"
    sixiemechemin.style.marginLeft = "30%";
    sixiemechemin.style.backgroundColor = "black";
    septiemechemin.style.width = "40%";
    septiemechemin.style.height = "50%";
    septiemechemin.style.marginLeft = "30%";
    septiemechemin.style.marginTop = "30%";
    septiemechemin.style.backgroundColor = "black";
    huitiemechemin.style.backgroundColor = "black";
    huitiemechemin.style.width = "30%";
    huitiemechemin.style.height = "20%";
    huitiemechemin.style.marginLeft = "70%";
    neuviemechemin.style.backgroundColor = "black";
    neuviemechemin.style.width = "30%";
    neuviemechemin.style.height = "10%";
    neuviemechemin.style.marginLeft = "50%";
    vert.style.marginTop = "80%";
    vert.style.marginLeft = "0%";
    }
    // sinon , on affiche le texte de fin
    else{
        bienvenue.innerText = "Bravo !"
        labyrinthe.style.display = "none";
        play.style.display = "block";
        play.style.marginLeft = "50%";
    }
})

// on prend le bouton pour jouer et le texte
var play = document.getElementById("button");
var bienvenue = document.getElementById("bienvenue");

// on lance le premier niveau quand on appui sur le bouton et on change le texte
play.addEventListener("click",function(){
    labyrinthe.style.display = "block";
    play.style.display = "none";
    bienvenue.innerText = "Niveau 1";
})




// labyrinthe.style.display = "block";