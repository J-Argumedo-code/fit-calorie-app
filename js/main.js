const btn1 = document.getElementById("burger");
const btn2 = document.getElementById("soda");
const btn3 = document.getElementById("pizza");
const btn4 = document.getElementById("icecream");

const modo = document.getElementById("btnMode");
const txt = document.getElementById("calorias");

const main = document.querySelector("main");
const body = document.querySelector("body");

let valor = 0;
let mode = false;

modo.addEventListener("click", function () {
    if (mode) {
        modo.src="resources/luna.png";
        txt.parentElement.style.color = "black";
    } else {
        modo.src="resources/sol.png";
        txt.parentElement.style.color = "lightgray";
    }
    body.classList.toggle("body-dark-color");
    main.classList.toggle("main-dark-color");
    [btn1, btn2, btn3, btn4].forEach(element => {
        element.classList.toggle("product-shadow-dark-color");
    });
    mode = !mode;
});

btn1.addEventListener("click", function () {
    calorie(this, 300);
});

btn2.addEventListener("click", function () {
    calorie(btn2, 170);
});

btn3.addEventListener("click", function () {
    calorie(btn3, 350);
});

btn4.addEventListener("click", function () {
    calorie(btn4, 150);
});


function calorie(boton, comida){
    boton.classList.toggle("selected")
    if (boton.classList.contains("selected")){
        valor = valor + comida;
    }else{
        valor = valor - comida;
    }
    txt.innerHTML = valor; 
}