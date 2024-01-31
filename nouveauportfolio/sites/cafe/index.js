var home = document.getElementById('home');
var about = document.getElementById('about');
var abouttexte = document.getElementById('abouttexte');
var x = document.getElementById('x');
var y = document.getElementById('y');
var menu = document.getElementById('menu');
var menutexte = document.getElementById('menutexte');
var themenu = document.getElementById('themenu');
var where = document.getElementById('where');
var wheretexte = document.getElementById("wheretexte");
var z = document.getElementById("z");


about.addEventListener("click", function () {
    abouttexte.classList.add("bigtexte");
    x.style.display = "block";
})

x.addEventListener("click", function () {
    abouttexte.classList.remove("bigtexte");
    x.style.display = "none";
})

menu.addEventListener("click", function () {
    menutexte.classList.add("bigmenu");
    menutexte.classList.remove("menu");
    y.style.display = "block";
    themenu.style.marginRight = "300px";
})

y.addEventListener("click", function () {
    menutexte.classList.remove("bigmenu");
    menutexte.classList.add("menu");
    y.style.display = "none";
})

where.addEventListener("click", function () {
    wheretexte.classList.add("bigwhere");
    wheretexte.classList.remove("where");
    z.style.display = "block";
    themenu.style.marginRight = "300px";
})

z.addEventListener("click", function () {
    wheretexte.classList.remove("bigwhere");
    wheretexte.classList.add("where");
    z.style.display = "none";
})

const firstbutton = document.getElementById("firstbutton");
const firstp = document.getElementById("firstp");

function toggleVisibility1() {
    if (firstbutton.innerText === "-") {
        firstbutton.innerText = "+";
        firstp.style.display = "none";
    } else {
        firstbutton.innerText = "-";
        firstp.style.display = "block";
    }
}

const secondbutton = document.getElementById("secondbutton");
const secondp = document.getElementById("secondp");
function toggleVisibility2() {
    if (secondbutton.innerText === "-") {
        secondbutton.innerText = "+";
        secondp.style.display = "none";
    } else {
        secondbutton.innerText = "-";
        secondp.style.display = "block";
    }
}

const thirdbutton = document.getElementById("thirdbutton");
const thirdp = document.getElementById("thirdp");
function toggleVisibility3() {
    if (thirdbutton.innerText === "-") {
        thirdbutton.innerText = "+";
        thirdp.style.display = "none";
    } else {
        thirdbutton.innerText = "-";
        thirdp.style.display = "block";
    }
}