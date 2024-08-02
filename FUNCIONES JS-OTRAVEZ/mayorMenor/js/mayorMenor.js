
const numeroUnoP = function(pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    return numeroUno;
}

const numeroDosP = function(pnumeroUno,pnumeroDos) { //con parametros
    let numeroDos = pnumeroDos;
    return numeroDos;
}


const preguntar = function (pnumeroUno,pnumeroDos){
    let numeroUno = numeroUnoP(pnumeroUno,pnumeroDos);
    let numeroDos = numeroDosP(pnumeroUno,pnumeroDos);
    let impresion;

    if (numeroUno>numeroDos) {
        impresion = numeroUno+" es mayor que "+numeroDos;
    } else {
        impresion = numeroDos+" es mayor que "+numeroUno;
    }
    return impresion;
}