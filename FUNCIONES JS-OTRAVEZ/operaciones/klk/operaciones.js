const sumar = function (pnumeroUno,pnumeroDos){
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    let suma = numeroUno + numeroDos;
    return suma;
}

const restar = function (pnumeroUno,pnumeroDos){
    let numeroUno = sumar(pnumeroUno,pnumeroDos);
    let numeroDos = sumar(pnumeroUno,pnumeroDos);

    let resta = numeroDos - numeroUno;
    return resta;
}

const multiplicar = function (pnumeroUno,pnumeroDos){
    let numeroUno = sumar(pnumeroUno,pnumeroDos);
    let numeroDos = pnumeroDos;

    let multi = numeroUno * numeroDos;
    return multi;
}

const division = function (pnumeroUno,pnumeroDos){
    let numeroUno = sumar(pnumeroUno,pnumeroDos);
    let numeroDos = multiplicar(pnumeroUno,pnumeroDos);

    let dividir = numeroDos/numeroUno;
    return dividir;
}