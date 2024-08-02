/*
const promedioParametro = function (pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let promedio;
    promedio= (numeroDos + numeroUno)/2;
    return promedio;
    
}
*/

const numeroUnoS = function (pnumeroUno,pnumeroDos) {
    let numeroUno = pnumeroUno;
    return numeroUno;
}

const numeroDosD = function (pnumeroUno,pnumeroDos) {
    let numeroDos = pnumeroDos;
    return numeroDos;
}

const promedioÑ = function (pnumeroUno,pnumeroDos) {
    let numeroUno = numeroUnoS(pnumeroUno,pnumeroDos);
    let numeroDos = numeroDosD(pnumeroUno,pnumeroDos);
    let promedio = (numeroUno + numeroDos)/2;
    return promedio;
}