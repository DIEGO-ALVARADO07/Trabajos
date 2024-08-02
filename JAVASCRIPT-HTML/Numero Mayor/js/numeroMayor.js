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

const primerNumero = function (){
    let numeroUno = document.getElementById('numero1').value;
    return numeroUno;
}

const segundoNumero = function(){
    let numeroDos = document.getElementById('numero2').value;
    return numeroDos;
}

const tercerNumero = function(){
    let numeroTres = document.getElementById('numero3').value;
    return numeroTres;
}

const numeroMayor = function(){

    let impresion;
    let numeroUno = primerNumero();
    let numeroDos = segundoNumero();
    let numeroTres = tercerNumero();

    if(numeroUno === numeroDos & numeroUno === numeroTres){
        impresion = "Los numeros son iguales";
    } else{
        if(numeroUno>numeroDos & numeroUno>numeroTres){
            impresion = numeroUno+" es el mayor";
            document.getElementById('NUMEROmayor').innerHTML=`<strong> ${impresion} </strong>`;
        }
        else{
            if(numeroDos>numeroUno & numeroDos>numeroTres){
                impresion = numeroDos+" es el mayor";
                document.getElementById('NUMEROmayor').innerHTML=`<strong> ${impresion} </strong>`;
            }
            else{
                impresion = numeroTres+" es el mayor";
                document.getElementById('NUMEROmayor').innerHTML=`<strong> ${impresion} </strong>`;
            }
        }
    }
    return false;
}