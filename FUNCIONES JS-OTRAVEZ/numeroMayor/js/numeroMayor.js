/*
 const numeroMayorParametro = function (pnumeroUno,pnumeroDos,pnumeroTres) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let numeroTres = pnumeroTres;
    console.log("numero uno: "+numeroUno,"numero Dos: " +numeroDos,"nuemro tres: "+numeroTres);
    if (numeroUno === numeroDos && numeroUno === numeroTres) {
        console.log("Los numeros son iguales");
    } else {

    if (numeroUno>numeroDos & numeroUno>numeroTres) {
        console.log(numeroUno+" es mayor que "+numeroDos);
    } else {
        if (numeroDos>numeroUno & numeroDos>numeroTres) {
            console.log(" es mayor numero dos "+numeroDos);
        } else {
            console.log("Es mayor numero tres "+numeroTres);
        }
    }
}
} 
*/

const primerNumero = function (pnumeroUno,pnumeroDos,pnumeroTres){
    let numeroUno = pnumeroUno;
    return numeroUno;
}

const segundoNumero = function(pnumeroUno,pnumeroDos,pnumeroTres){
    let numeroDos = pnumeroDos;
    return numeroDos;
}

const tercerNumero = function(pnumeroUno,pnumeroDos,pnumeroTres){
    let numeroTres = pnumeroTres;
    return numeroTres;
}

const numeroMayor = function(pnumeroUno,pnumeroDos,pnumeroTres){

    let impresion;
    let numeroUno = primerNumero(pnumeroUno,pnumeroDos,pnumeroTres);
    let numeroDos = segundoNumero(pnumeroUno,pnumeroDos,pnumeroTres);
    let numeroTres = tercerNumero(pnumeroUno,pnumeroDos,pnumeroTres);

    if(numeroUno === numeroDos & numeroUno === numeroTres){
        impresion = "Los numeros son iguales";
    } else{
        if(numeroUno>numeroDos & numeroUno>numeroTres){
            impresion = "El numero: "+numeroUno+" es el mayor";
        }
        else{
            if(numeroDos>numeroUno & numeroDos>numeroTres){
                impresion = "El numero: "+numeroDos+" es el mayor";
            }
            else{
                impresion = "El numero: "+numeroTres+" es el mayor";
            }
        }
    }
    return impresion;
}