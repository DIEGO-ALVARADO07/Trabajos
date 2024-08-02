/*
const factorialParametro = function (pnumeroUno) {
    let numero;
    numero = pnumeroUno;
    let contador;
    let factorial;

        contador=0;
        factorial=1;
        console.log("con parametros") 
        while (contador<numero) {
            contador=contador +1;
            factorial=factorial * contador;
            console.log(factorial) 
}
}       
*/

const numeroConstante = function (pnumeroUno){
    let numero = pnumeroUno;
    return numero;
}
const operar = function (pnumeroUno){
    let numero = numeroConstante(pnumeroUno);
    let contador = 0;
    let factorial = 1;
    while(contador<numero){
        contador = contador + 1;
        factorial = factorial * contador;
    }
return factorial;
}