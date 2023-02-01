 /**  
document.getElementById ("boton").onclick=function(){
    console.log ("capturamso el evenyo click");
    document.getElementById("demo").innerHTML= "Estamos probamdo nuestro primer evento"

}
     
document.addEventListener("click", function() {
    console.log("hola mundo desde emvemtilistener");
    document.getElementById("demo").innerHTML= "Estamos probamdo nuestro primer evento"
});
*/

document.getElementById ("boton").addEventListener("click", function() {
    console.log("hola mundo desde emvemtilistener");
    document.getElementById("demo").innerHTML= "Estamos probamdo nuestro primer evento"
});

document.getElementById ("boton_Color").addEventListener("click", function() {
    
    document.body.style.backgroundColor = "#FF0000";
});

document.getElementById ("boton_restablecer").addEventListener("click", function() {
    
    document.body.style.backgroundColor = "Blue";

});

document.getElementById ("boton_ocultar").addEventListener("click", function() {
    
    document.getElementById("demo").style.display = "none";

})

const collection = document.getElementsByClassName(" prueba");
for ( let i = 0 ; i <collection.length; i++) {
collection[i].style.backgroundColor = "red";
}
