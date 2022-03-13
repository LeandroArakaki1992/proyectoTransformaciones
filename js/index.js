alert("Cuadros en stock 5");
let numero = parseInt(prompt("cuantos cuadros deseas comprar: "));

if( numero <= 5){
    alert("Usted ha seleccionado: " + numero + " muchas gracias");
}
else{
    alert("No contamos con stock")
}
let contador = 1;
while (contador <= 5){
    console.log("Cuadro " + contador + " en stock"); contador++;
}

