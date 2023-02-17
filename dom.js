console.log("Entramos");

var items = document.getElementsByClassName("item");
var cantidad = items.length;

console.log(cantidad);

console.log("Cantidad de listas " + cantidad);
var div = document.createElement("div");
div;

div.innerText = "Aprendiendo JavaScript";
var divUno = document.getElementById("uno");
divUno.appendChild(div);

// parrafo rojo - lista verde - div color azul (texto y lista dinamica)
var lista = document.getElementById("lista");
var elemento1 = document.createElement("li");

elemento1.innerText = "li dinamico";
lista.appendChild(elemento1);
var p = document.getElementById("tres").style.color = "red";
var listas = document.getElementById("lista").style.color = "green";