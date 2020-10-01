const btn1 = document.getElementById("burger");
const btn2 = document.getElementById("soda");
const btn3 = document.getElementById("pizza");
const btn4 = document.getElementById("icecream");
const modo = document.getElementById("luna");
const txt = document.getElementById("calorias");
const header = document.querySelector("header");
const section = document.querySelector("section");
const body = document.querySelector("body");

let valor;

//Imagenes:
const img1 = document.getElementById("burger2");
const img2 = document.getElementById("soda2");
const img3 = document.getElementById("pizza2");
const img4 = document.getElementById("icecream2");

modo.addEventListener("click", function () {
    modo1();
});

btn1.addEventListener("click", function () {
    calorie1();
});

btn2.addEventListener("click", function () {
    calorie2();
});

btn3.addEventListener("click", function () {
    calorie3();
});

btn4.addEventListener("click", function () {
    calorie4();
});

function calorie1(){
    valor = parseInt(txt.innerHTML)
    img1.classList.toggle("gris");

    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn1.classList.toggle("colordark");
    } else {
        btn1.classList.toggle("color");
    }
    //const valor2 = 300;
    if (btn1.classList.contains("color") || btn1.classList.contains("colordark")){
        txt.innerHTML = valor + 300; 
    }else{
        txt.innerHTML = valor - 300;
    }
}
function calorie2(){
    valor = parseInt(txt.innerHTML)
    img2.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn2.classList.toggle("colordark");
    } else {
        btn2.classList.toggle("color");
    }

    if (btn2.classList.contains("color") || btn2.classList.contains("colordark")){
        txt.innerHTML = valor + 170 
    }else{
        txt.innerHTML = valor-170
    }
}
function calorie3(){
    valor = parseInt(txt.innerHTML)
    img3.classList.toggle("gris");

    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn3.classList.toggle("colordark");
    } else {
        btn3.classList.toggle("color");
    }
    
    if (btn3.classList.contains("color") || btn3.classList.contains("colordark")){
        txt.innerHTML = valor + 350 
    }else{
        txt.innerHTML = valor-350
    }
}
function calorie4(){
    valor = parseInt(txt.innerHTML)
    img4.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn4.classList.toggle("colordark");
    } else {
        btn4.classList.toggle("color");
    }

    if (btn4.classList.contains("color") || btn4.classList.contains("colordark")){
        txt.innerHTML = valor + 150 
    }else{
        txt.innerHTML = valor-150
    }
}

function modo1(){
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
    modo.src="resources/luna.png"

    header.style.backgroundColor = "rgb(255, 153, 0)"
    body.style.backgroundColor = "white"
    section.style.color = "black"
    btn1.style.border = "2px inset gray"
    btn2.style.border = "2px inset gray"
    btn3.style.border = "2px inset gray"
    btn4.style.border = "2px inset gray"


    if (btn1.classList.contains("colordark")){
        btn1.classList.remove("colordark")
        btn1.classList.add("color")
    }
    if (btn2.classList.contains("colordark")){
        btn2.classList.remove("colordark")
        btn2.classList.add("color")
    }
    if (btn3.classList.contains("colordark")){
        btn3.classList.remove("colordark")
        btn3.classList.add("color")
    }
    if (btn4.classList.contains("colordark")){
        btn4.classList.remove("colordark")
        btn4.classList.add("color")
    }
    } else {
    modo.src="resources/sol.png"

    header.style.backgroundColor = "#C34C00"
    body.style.backgroundColor = "#242f40"
    section.style.color = "white"
    btn1.style.border = "2px inset white"
    btn2.style.border = "2px inset white"
    btn3.style.border = "2px inset white"
    btn4.style.border = "2px inset white"


    if (btn1.classList.contains("color")){
        btn1.classList.remove("color")
        btn1.classList.add("colordark")
    }
    if (btn2.classList.contains("color")){
        btn2.classList.remove("color")
        btn2.classList.add("colordark")
    }
    if (btn3.classList.contains("color")){
        btn3.classList.remove("color")
        btn3.classList.add("colordark")
    }
    if (btn4.classList.contains("color")){
        btn4.classList.remove("color")
        btn4.classList.add("colordark")
    }
    }
    
}