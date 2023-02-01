

function suma(a,b){
    return a +  b;
}



document.getElementById("sumar").addEventListener("click",function(){

let numeroA = document.getElementById("numero1").value;
console.log("El valor del numero A es: "+numeroA);

let numeroB = document.getElementById("numero2").value;
console.log("El valor del numero B es: "+numeroB);

let resultado = suma(parseInt (numeroA),parseInt (numeroB));

document.getElementById("resultado").innerHTML = resultado;
document.getElementById("contenedorResultado").style.display = "block";
 

})


