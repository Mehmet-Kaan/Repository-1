"use strict";

let mainDiv = document.createElement("div");
document.querySelector("#wrapper").prepend(mainDiv);
mainDiv.classList.add("schemas");

for (let ii = 1; ii < 5; ii++){
    let schema = document.createElement("div");
    document.querySelector("#wrapper > div:first-child").append(schema);
    schema.classList.add("schema"+ii);

    let p = document.createElement("p");
    schema.append(p); 
    p.classList.add("SchemaP" + ii);
    p.innerHTML = "Schema "+ii;
}

document.querySelector(".schema1").classList.add("active");

for ( let i = 1; i <= 5; i++){
    let colorBoxes = document.createElement("div");
    document.querySelector(".schema1").append(colorBoxes);

    colorBoxes.style.backgroundColor = getColor(1,i);
}

for ( let i = 1; i <= 5; i++){
    let colorBoxes = document.createElement("div");
    document.querySelector(".schema2").append(colorBoxes);

    colorBoxes.style.backgroundColor = getColor(2,i);
}

for ( let i = 1; i <= 5; i++){
    let colorBoxes = document.createElement("div");
    document.querySelector(".schema3").append(colorBoxes);

    colorBoxes.style.backgroundColor = getColor(3,i);
}

for ( let i = 1; i <= 5; i++){
    let colorBoxes = document.createElement("div");
    document.querySelector(".schema4").append(colorBoxes);

    colorBoxes.style.backgroundColor = getColor(4,i);
}


document.querySelector(".schema1").addEventListener("click", activateSchema1);

function activateSchema1(){
   
    document.querySelector("#shows").style.backgroundColor = getColor(1,5);
        document.querySelector("#kvadrat").style.backgroundColor = getColor(1,2);
        document.querySelector("#kvadrat2").style.backgroundColor = getColor(1,3);
        document.querySelector("#kvadrat3").style.backgroundColor = getColor(1,4);
        document.querySelector("#roteratKvadrat").style.backgroundColor = getColor(1,1);
        document.querySelector("#circle").style.backgroundColor = getColor(1,5);

    document.querySelector(".schema1").classList.toggle("active");
    document.querySelector(".schema2").classList.remove("active");
    document.querySelector(".schema3").classList.remove("active");
    document.querySelector(".schema4").classList.remove("active");

};


function activateSchema2(){
        document.querySelector("#shows").style.backgroundColor = getColor(2,5);
        document.querySelector("#kvadrat").style.backgroundColor = getColor(2,2);
        document.querySelector("#kvadrat2").style.backgroundColor = getColor(2,3);
        document.querySelector("#kvadrat3").style.backgroundColor = getColor(2,4);
        document.querySelector("#roteratKvadrat").style.backgroundColor = getColor(2,1);
        document.querySelector("#circle").style.backgroundColor = getColor(2,5);

        
        document.querySelector(".schema2").classList.toggle("active");
        document.querySelector(".schema1").classList.remove("active");
        document.querySelector(".schema3").classList.remove("active");
        document.querySelector(".schema4").classList.remove("active");
          
}


document.querySelector(".schema2").addEventListener("click", activateSchema2);

function activateSchema3(){
      
        document.querySelector("#shows").style.backgroundColor = getColor(3,5);
        document.querySelector("#kvadrat").style.backgroundColor = getColor(3,2);
        document.querySelector("#kvadrat2").style.backgroundColor = getColor(3,3);
        document.querySelector("#kvadrat3").style.backgroundColor = getColor(3,4);
        document.querySelector("#roteratKvadrat").style.backgroundColor = getColor(3,1);
        document.querySelector("#circle").style.backgroundColor = getColor(3,5);
        
        document.querySelector(".schema3").classList.toggle("active");
        document.querySelector(".schema1").classList.remove("active");
        document.querySelector(".schema2").classList.remove("active");
        document.querySelector(".schema4").classList.remove("active");
     
}


document.querySelector(".schema3").addEventListener("click", activateSchema3);


function activateSchema4(){
        document.querySelector("#shows").style.backgroundColor = getColor(4,5);
        document.querySelector("#kvadrat").style.backgroundColor = getColor(4,2);
        document.querySelector("#kvadrat2").style.backgroundColor = getColor(4,3);
        document.querySelector("#kvadrat3").style.backgroundColor = getColor(4,4);
        document.querySelector("#roteratKvadrat").style.backgroundColor = getColor(4,1);
        document.querySelector("#circle").style.backgroundColor = getColor(4,5);
        
        document.querySelector(".schema4").classList.toggle("active");
        document.querySelector(".schema1").classList.remove("active");
        document.querySelector(".schema2").classList.remove("active");
        document.querySelector(".schema3").classList.remove("active");
        
        
}

document.querySelector(".schema4").addEventListener("click", activateSchema4);


document.querySelector("#bigger").addEventListener("click", makeBigger);

function makeBigger (){
    document.querySelector("#circle").style.setProperty("height","370px");
    document.querySelector("#circle").style.setProperty("width","370px");

    document.querySelector("#kvadrat").style.setProperty("height","380px");
    document.querySelector("#kvadrat").style.setProperty("width","380px");

    document.querySelector("#kvadrat2").style.setProperty("height","365px");
    document.querySelector("#kvadrat2").style.setProperty("width","365px");

    document.querySelector("#kvadrat3").style.setProperty("height","320px");
    document.querySelector("#kvadrat3").style.setProperty("width","320px");

    document.querySelector("#roteratKvadrat").style.setProperty("height","380px");
    document.querySelector("#roteratKvadrat").style.setProperty("width","380px");
}


document.querySelector("#stop").addEventListener("click", makeStop);

function makeStop(){

    let circleHeights = getComputedStyle(document.getElementById("circle")).getPropertyValue("height")
    let circleWidths = getComputedStyle(document.getElementById("circle")).getPropertyValue("width");

    let kvadratsHeights = getComputedStyle(document.getElementById("kvadrat")).getPropertyValue("height");
    let kvadratWidths = getComputedStyle(document.getElementById("kvadrat")).getPropertyValue("width");

    let kvadrat2Heights = getComputedStyle(document.getElementById("kvadrat2")).getPropertyValue("height");
    let kvadrat2Widths = getComputedStyle(document.getElementById("kvadrat2")).getPropertyValue("width");

    let kvadrat3Heights = getComputedStyle(document.getElementById("kvadrat3")).getPropertyValue("height");
    let kvadrat3Widths = getComputedStyle(document.getElementById("kvadrat3")).getPropertyValue("width");

    let roteratKvadratHeights = getComputedStyle(document.getElementById("roteratKvadrat")).getPropertyValue("height");
    let roteratKvadratWidths = getComputedStyle(document.getElementById("roteratKvadrat")).getPropertyValue("width");

    document.querySelector("#circle").style.setProperty("height", circleHeights);
    document.querySelector("#circle").style.setProperty("width", circleWidths);

    document.querySelector("#kvadrat").style.setProperty("height",kvadratsHeights);
    document.querySelector("#kvadrat").style.setProperty("width",kvadratWidths);

    document.querySelector("#kvadrat2").style.setProperty("height",kvadrat2Heights);
    document.querySelector("#kvadrat2").style.setProperty("width",kvadrat2Widths);

    document.querySelector("#kvadrat3").style.setProperty("height",kvadrat3Heights);
    document.querySelector("#kvadrat3").style.setProperty("width",kvadrat3Widths);

    document.querySelector("#roteratKvadrat").style.setProperty("height",roteratKvadratHeights);
    document.querySelector("#roteratKvadrat").style.setProperty("width",roteratKvadratWidths);
}


document.querySelector("#smaller").addEventListener("click", makeSmaller);

function makeSmaller (){
    document.querySelector("#circle").style.setProperty("height","70px");
    document.querySelector("#circle").style.setProperty("width","70px");

    document.querySelector("#kvadrat").style.setProperty("height","80px");
    document.querySelector("#kvadrat").style.setProperty("width","80px");

    document.querySelector("#kvadrat2").style.setProperty("height","65px");
    document.querySelector("#kvadrat2").style.setProperty("width","65px");

    document.querySelector("#kvadrat3").style.setProperty("height","55px");
    document.querySelector("#kvadrat3").style.setProperty("width","55px");

    document.querySelector("#roteratKvadrat").style.setProperty("height","80px");
    document.querySelector("#roteratKvadrat").style.setProperty("width","80px");
};



