document.getElementById("boton1").addEventListener("click", black);

function black(){
    document.getElementsByClassName("col-3")[0].style.color = "black";
    document.getElementsByClassName("col-9")[0].style.color = "black";
    document.getElementsByClassName("col-3")[0].style.backgroundColor = "#C4A484"
    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#ddcab8"
    document.getElementsByClassName("Header1")[0].style.backgroundColor = "#927A63"
    document.getElementsByClassName("Header2")[0].style.backgroundColor = "#C4A484"
    document.getElementsByClassName("Header3")[0].style.backgroundColor = "#C4A484"
    document.getElementsByClassName("Header4")[0].style.backgroundColor = "#C4A484"
    
}

document.getElementById("boton2").addEventListener("click", white);

function white(){
    document.getElementsByClassName("col-3")[0].style.color = "white";
    document.getElementsByClassName("col-9")[0].style.color = "white";
    document.getElementsByClassName("col-3")[0].style.backgroundColor = "#515A5A"
    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#212F3C"
    document.getElementsByClassName("Header1")[0].style.backgroundColor = "#5C5F5F"
    document.getElementsByClassName("Header2")[0].style.backgroundColor = "#7F8282"
    document.getElementsByClassName("Header3")[0].style.backgroundColor = "#7F8282"
    document.getElementsByClassName("Header4")[0].style.backgroundColor = "#7F8282"
}