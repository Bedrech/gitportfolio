function MenuLoad() {    
    var menu = document.getElementById("menu");
    var contact = document.getElementById("contact");
    contact.style.display = "none";
    menu.innerHTML = "";
    menu.style.display = "block";
    var MenuButtonElement = menu.appendChild(document.createElement("button"));
    MenuButtonElement.classList.add("btn");
    MenuButtonElement.innerText = "X";

    MenuButtonElement.addEventListener('click', function() {
        menu.innerHTML = "";
        menu.style.display = "none";
    });

    menu.appendChild(document.createElement("h2")).classList.add("starter");
    var starterElement = document.getElementsByClassName("starter");
    for (var i = 0; i < starterElement.length; i++) {
        starterElement[i].innerText = "Starters";
    }
    menu.appendChild(document.createElement("p")).classList.add("starterP");
    var starterPElement = document.getElementsByClassName("starterP");
    for (var i = 0; i < starterPElement.length; i++) {
        starterPElement[i].innerHTML = "Tomato Soup <b>$2.50</b><br>Chicken Salad <b>$3.50</b><br>Bread and Butter <b>$1.00</b>";
    }
    menu.appendChild(document.createElement("h2")).classList.add("MainCourse");
    var MainCourse = document.getElementsByClassName("MainCourse");
    for (var i = 0; i < MainCourse.length; i++) {
        MainCourse[i].innerText = "Main Courses";
    }
    menu.appendChild(document.createElement("p")).classList.add("MainCourseP");
    var MainCourseP = document.getElementsByClassName("MainCourseP");
    for (var i = 0; i < MainCourseP.length; i++) {
        MainCourseP[i].innerHTML = "Grilled Fish and Potatoes <b>$8.50</b><br>Italian Pizza <b>$5.50</b><br>Veggie Pasta <b>$4.00</b><br>Chicken and Potatoes <b>$6.50</b><br>Deluxe Burger <b>$5.00</b>";
    }
    menu.appendChild(document.createElement("h2")).classList.add("Desserts");
    var Desserts = document.getElementsByClassName("Desserts");
    for (var i = 0; i < Desserts.length; i++) {
        Desserts[i].innerText = "Desserts";
    }
    menu.appendChild(document.createElement("p")).classList.add("DessertsP");
    var DessertsP = document.getElementsByClassName("DessertsP");
    for (var i = 0; i < DessertsP.length; i++) {
        DessertsP[i].innerHTML = "Fruit Salad <b>$2.50</b><br>Ice Cream <b>$2.00</b><br>Chocolate Cake <b>$4.00</b><br>Cheese <b>$5.50</b>";
    }
}

function ContactLoad() {
    var menu = document.getElementById("menu");
    var contact = document.getElementById("contact");
    menu.style.display = "none";
    contact.innerHTML = "";
    contact.style.display = "block";
    var buttonElement = contact.appendChild(document.createElement("button"));
    buttonElement.classList.add("btn");
    buttonElement.innerText = "X";

    buttonElement.addEventListener('click', function() {
        contact.innerHTML = "";
        contact.style.display = "none";
    });
    
    contact.appendChild(document.createElement("h2")).classList.add("contacth2");
    var ContactElement = document.getElementsByClassName("contacth2");
    for (var i = 0; i < ContactElement.length; i++) {
        ContactElement[i].innerText = "Contact";
    }
    contact.appendChild(document.createElement("p")).classList.add("contactp");
    var ContactPElement = document.getElementsByClassName("contactp");
    for (var i = 0; i < ContactPElement.length; i++) {
        ContactPElement[i].innerHTML = "Reserve a table, ask for today's special or just send us a message.";
    }
    contact.appendChild(document.createElement("input")).setAttribute("id","name");
    var InputName = document.getElementById("name");
    //for (var i = 0; i < InputName.length; i++) {
        InputName/*[i]*/.setAttribute("placeholder","Nom");
    //}
    contact.appendChild(document.createElement("input")).setAttribute("id","number");
    var InputNumber = document.getElementById("number");
    //for (var i = 0; i < InputNumber.length; i++) {
        InputNumber/*[i]*/.setAttribute("placeholder","How many people");
        InputNumber/*[i]*/.setAttribute("type","number");
    //}
    contact.appendChild(document.createElement("input")).setAttribute("id","date");
    var InputDate = document.getElementById("date");
    //for (var i = 0; i < InputDate.length; i++) {
        InputDate/*[i]*/.setAttribute("type","datetime-local");
    //}
    contact.appendChild(document.createElement("input")).setAttribute("id","msg");
    var InputMessage = document.getElementById("msg");
    //for (var i = 0; i < InputMessage.length; i++) {
        InputMessage/*[i]*/.setAttribute("placeholder","Message, Special requirements");
    //}

    contact.appendChild(document.createElement("input")).setAttribute("id","send");
    var InputSend = document.getElementById("send");
    //for (var i = 0; i < InputDate.length; i++) {*/
        InputSend/*[i]*/.setAttribute("placeholder","SEND MESSAGE");
        InputSend/*[i]*/.setAttribute("type","submit");

        InputSend.addEventListener("click",function(){
            //On prend la confirmation qui apparaît et les éléments qui auront les valeurs du client
            var confirmation = document.getElementById("confirmation");
            var votrenom = document.getElementById("votrenom");
            var votrenombre = document.getElementById("votrenombre");
            var votredate = document.getElementById("votredate");
            var votremessage = document.getElementById("votremessage");
            var thanks = document.getElementById("thanks");
                confirmation.style.display = "block";
                contact.style.display = "none";
                //On met les informations récupéré pour faire une vérification
                    votrenom.innerText = "Nom : " + InputName.value;
                    votrenombre.innerText = "Nombre de personne : " + InputNumber.value;
                    votredate.innerText = "Date : " + InputDate.value;
                    votremessage.innerText = "Message : " + InputMessage.value;
        })
        //confirmation des informations
        var confirmdata = document.getElementById("confirmdata");
        confirmdata.addEventListener("click",function(){
            confirmation.style.display = "block";
            thanks.innerText = "Votre demande est accepté";
        })
}

var Buttons = ["Travel", "New York", "Dinner", "Salmon", "France", "Drinks", "Ideas", "Flavors", "Cuisine", "Chickens", "Dressing", "Fried", "Fish", "Duck"];
var footer = document.getElementById("footerdiv");


var scaledButton = null; // Keep track of the currently scaled button

Buttons.forEach(function(Button) {
    var buttonElement = document.createElement("button");
    buttonElement.innerText = Button;
    footer.appendChild(buttonElement);

    buttonElement.addEventListener("click", function() {
       
        if (scaledButton) {
            // Reset the scale of the previously scaled button
            scaledButton.style.transform = "scale(1)";
            scaledButton.style.backgroundColor = "grey";
        }

        // Scale the clicked button
        buttonElement.style.transform = "scale(1.2)";
        buttonElement.style.backgroundColor = "black";

        // Update the currently scaled button
        scaledButton = buttonElement;
    });
});


var img1 = "myfood//images/sandwich.jpg";
var img2 = "myfood//images/steak.jpg";
var img3 = "myfood//images/cherries.jpg";
var img4 = "myfood//images/wine.jpg";
var img5 = "myfood//images/popsicle.jpg";
var img6 = "myfood//images/salmon.jpg";
var img7 = "myfood//images/sandwich.jpg";
var img8 = "myfood//images/croissant.jpg";
var imgItem = [
    {
        img : img1 ,
        titre : "The Perfect Sandwich, A Real NYC Classic",
        texte : "Just some random text, lorem ipsum text praesent tincidunt insum linsum",
    },
    {
        img : img2,
        titre : "Let Me Tell You About This Steak",
        texte : "Once again, some random text to lorem l orem lorem lorem ipsum text praesent tincidunt ipsum lipsum",
    
    },
    {
        img : img3 ,
        titre : "Cherries, interrupted",
        texte : "Lorem ipsum text praesent tincidunt ipsum lipsum.<br>What else?",
    },
    {
        img : img4 ,
        titre : "Once Again, Robust Wine and Vegetable Pasta",
        texte : "Lorem ipsum text praesent tincidunt ipsum lipsum",
    },
    {
        img : img5 ,
        titre : "All I Need is a Popsicle",
        texte : "Lorem ipsum text praesent tincidunt ipsum lipsum",
    },
    {
        img : img6 ,
        titre : "Salmon For Your Skin",
        texte : "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum",
    },
    {
        img : img7 ,
        titre : "The Perfect Sandwich,A Real Classic",
        texte : "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum",
    },
    {
        img : img8 ,
        titre : "Le French",
        texte : "Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum",
    },
    
]

var premier = document.getElementById("images"); // La div parent

imgItem.forEach(function(item, index) {
    // Création de la nouvelle div
    var premierchild = document.createElement("div");
    premierchild.setAttribute("id", "premier" + index); // Ajout d'un id unique
    premierchild.classList.add("premier"); // Ajout d'une classe

    // Création de l'image
    var imgElement = document.createElement("img"); 
    imgElement.setAttribute("src", item.img);
    premierchild.appendChild(imgElement);

    // Création du titre
    var titreElement = document.createElement("h3");
    titreElement.innerHTML = item.titre;
    premierchild.appendChild(titreElement);

    // Création du texte
    var texteElement = document.createElement("p");
    texteElement.innerHTML = item.texte;
    premierchild.appendChild(texteElement);

    premier.appendChild(premierchild); // Ajout de la nouvelle div a son parent
});

function createScrollbar() {
    var divi = document.createElement("div");
    divi.classList.add("scrollbar");

    //Création de la première image
    var backButton = document.createElement("img");
    backButton.classList.add("scrollimage");
    backButton.setAttribute("src", "back.png");

    // Création des boutons
    var button1 = document.createElement("button");
    button1.classList.add("scrolll");
    button1.innerText = '1';
    var button2 = document.createElement("button");
    button2.classList.add("scrolll");
    button2.innerText ="2";
    var button3 = document.createElement("button");
    button3.classList.add("scrolll");
    button3.innerText = "3";
    var button4 = document.createElement("button");
    button4.classList.add("scrolll");
    button4.innerText = "4";

    // Création de la deuxieme image
    var scrollImage = document.createElement("img");
    scrollImage.classList.add("scrollimg");
    scrollImage.setAttribute("src","right.png");

        var premier = document.getElementById("images");

    
    //Append les elements
    divi.appendChild(backButton);
    divi.appendChild(button1);
    divi.appendChild(button2);
    divi.appendChild(button3);
    divi.appendChild(button4);
    divi.appendChild(scrollImage);
    premier.appendChild(divi);
}

createScrollbar();

var xclose = document.getElementById("xclose");

xclose.addEventListener("click",function(){
    confirmation.style.display = "none";
})