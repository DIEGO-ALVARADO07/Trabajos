/**
 * Primer ejercisio de arreglos
 * Autor: Diego Alvarado 
 * Fecha: 26/04/24
 */

let arreglo = [];
let arregloFrutas = [];
arregloFrutas = ['banano','mora','maracuya','fresa','borojo','chontaduro'];
arreglo = [1,2,3,4,5,6,7,8,9];
let sizeArreglo = arreglo.length; 
let sizeArregloFruta = arregloFrutas.length;
 
console.log("Cantidad de frutas: "+sizeArregloFruta);
console.log ("Cantidad de numeros: "+sizeArreglo);

let matriz = [];
let iteracion1;
let iteracion2;

matriz = [
    ['Manzana','Pera','Cholupa','Mora','Uva','Guabana'],
    ['Cebolla larga','Acelga','Espinaca'],
    ['papa sabanera','Papa pastusa','Papa criolla'],
]
;

console.log(matriz);
console.log(matriz[2][2]);


for ( iteracion1 = 0; iteracion1 < matriz.length; iteracion1 ++){
    for(iteracion2=0; iteracion2 < matriz[iteracion1].length; iteracion2++){
        console.log(matriz[iteracion1][iteracion2])
    }
}