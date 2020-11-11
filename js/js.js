const btn1 = document.getElementById("burger");
const btn2 = document.getElementById("soda");
const btn3 = document.getElementById("pizza");
const btn4 = document.getElementById("icecream");
const modo = document.getElementById("luna");
const txt = document.getElementById("calorias");


const header = document.querySelector("header");
const main = document.querySelector("main");
const section = document.querySelector("section");
const body = document.querySelector("body");

//Seleccionar Hijos de un elemento
//console.log(section.children[0].children[0].style.border = "1px solid red")

let valor;
const calburger = 300;
const calsoda = 170;
const calpizza = 350;
const calicecream = 150;

modo.addEventListener("click", function () {
    modo1();
});

btn1.addEventListener("click", function () {
    calorie1(calburger);
});

btn2.addEventListener("click", function () {
    calorie2(calsoda);
});

btn3.addEventListener("click", function () {
    calorie3(calpizza);
});

btn4.addEventListener("click", function () {
    calorie4(calicecream);
});


function calorias(boton, comida){
    valor = parseInt(txt.innerHTML)

    if (!section.classList.contains("blanco")) {
        boton.classList.toggle("colordark");
    } else {
        boton.classList.toggle("color");
    }
    //const valor2 = 300;
    if (boton.classList.contains("color") || boton.classList.contains("colordark")){
        boton.classList.add("selected")
        boton.children[0].classList.add("quitgris")
        txt.innerHTML = valor + comida; 
    }else{
        boton.classList.remove("selected")
        boton.children[0].classList.remove("quitgris")
        txt.innerHTML = valor - comida;
    }
}


function calorie1(calburger){
    calorias(btn1, calburger)
}
function calorie2(calsoda){
    calorias(btn2, calsoda)
}
function calorie3(calpizza){
    calorias(btn3, calpizza)
}
function calorie4(calicecream){
    calorias(btn4, calicecream)
}



function cambiarColor(img, color1, color2, color3, color4, borde, mod1, mod2){
    modo.src=img

    header.style.backgroundColor = color1
    main.style.backgroundColor = color1
    body.classList.remove(color2)
    body.classList.add(color3)
    section.classList.remove(color2)
    section.classList.add(color3)
    section.style.color = color4
    btn1.style.border = borde
    btn2.style.border = borde
    btn3.style.border = borde
    btn4.style.border = borde

    if (btn1.classList.contains(mod1)){
        btn1.classList.remove(mod1)
        btn1.classList.add(mod2)
    }
    if (btn2.classList.contains(mod1)){
        btn2.classList.remove(mod1)
        btn2.classList.add(mod2)
    }
    if (btn3.classList.contains(mod1)){
        btn3.classList.remove(mod1)
        btn3.classList.add(mod2)
    }
    if (btn4.classList.contains(mod1)){
        btn4.classList.remove(mod1)
        btn4.classList.add(mod2)
    }
}

function modo1(){
    if (!section.classList.contains("blanco")) {
    
        cambiarColor("resources/luna.png", "rgb(255, 153, 0)", "negro", "blanco", "black", "2px inset gray", "colordark", "color")

    } else {

        cambiarColor("resources/sol.png", "#C34C00", "blanco", "negro", "white", "2px inset white", "color", "colordark")

    }
}