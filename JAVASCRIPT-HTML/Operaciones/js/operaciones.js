const sumar = function (){
    let numeroUno = document.getElementById('txtNumero1').value;
    let numeroDos = document.getElementById('txtNumero2').value;
    let suma = parseInt(numeroUno) + parseInt(numeroDos);

    document.getElementById('sumars').innerHTML=`<strong>El valor de la suma es: ${suma}</strong>`;
    return false;
}


const restar = function (){
    let numeroUno = document.getElementById('txtNumero1').value;
    let numeroDos = document.getElementById('txtNumero2').value;

    let resta = numeroUno - numeroDos;
    document.getElementById('restars').innerHTML=`<strong>El valor de la resta es: ${resta}</strong>`;
    return false;
}

const multiplicar = function (){
    let numeroUno = document.getElementById('txtNumero1').value;
    let numeroDos = document.getElementById('txtNumero2').value;

    let multi = numeroUno * numeroDos;
    document.getElementById('multiplicacion').innerHTML=`<strong>El valor de la multiplicación es: ${multi}</strong>`;
    return false;
}

const division = function (){
    let numeroUno = document.getElementById('txtNumero1').value;
    let numeroDos = document.getElementById('txtNumero2').value;

    let dividir = numeroUno/numeroDos;

    document.getElementById('division').innerHTML=`<strong>El valor de la division es: ${dividir}</strong>`;
    return false;
}

const promedios = function () { //con parametros
    let numeroUno = parseInt(document.getElementById('txtNumero1').value);
    let numeroDos = parseInt(document.getElementById('txtNumero2').value);
    let promedio;
    promedio = (numeroDos + numeroUno)/2;

    document.getElementById('promedio').innerHTML=`<strong>El valor del promedio es: ${promedio}</strong>`;
    return false;
}