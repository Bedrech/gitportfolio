// on prend toute les images normal et grande
var wedding = document.getElementById('wed');
var BigWedding = document.getElementById('wedding');
var rock = document.getElementById("rock");
var BigRock = document.getElementById("bigrock");
var sail = document.getElementById("sail");
var BigSail = document.getElementById("bigsail");
var underwater = document.getElementById('underwater');
var Bigunderwater = document.getElementById('bigunderwater');
var chef = document.getElementById('chef');
var Bigchef = document.getElementById('bigchef');
var wedding2 = document.getElementById('wedding2');
var Bigwedding2 = document.getElementById('bigwedding2');
var lastimage = document.getElementById('lastimage');
var Biglastimage = document.getElementById('biglastimage');

// quand on click sur une image , la grande s'affiche
wedding.addEventListener('click', function() {
    BigWedding.style.visibility = "visible";
});

rock.addEventListener('click', function() {
    BigRock.style.visibility = "visible";
});

sail.addEventListener('click', function() {
    BigSail.style.visibility = "visible";
});
underwater.addEventListener('click', function() {
    Bigunderwater.style.visibility = "visible";
});
chef.addEventListener('click', function() {
    Bigchef.style.visibility = "visible";
});
wedding2.addEventListener('click', function() {
    Bigwedding2.style.visibility = "visible";
});
lastimage.addEventListener('click', function() {
    Biglastimage.style.visibility = "visible";
});

// toute les images deviennent invisible
function Off() {
    BigWedding.style.visibility = "hidden";
    BigRock.style.visibility = "hidden";
    BigSail.style.visibility = "hidden";
    Bigunderwater.style.visibility = "hidden";
    Bigchef.style.visibility = "hidden";
    Bigwedding2.style.visibility = "hidden";
    Biglastimage.style.visibility = "hidden";
}

// on prend les deux images des commentaires
var rebecca = document.getElementById('rebecca');
var chris = document.getElementById('chris');

// on modifie la bordure quand on click dessus
rebecca.addEventListener('click', function() {
    rebecca.style.borderRadius = "25%";
})

chris.addEventListener('click', function() {
    chris.style.borderRadius = "25%";
})