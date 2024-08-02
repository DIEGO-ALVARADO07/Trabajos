/*
function contadorParametros(pnumeroUno) {//Con parametros

    let numero;
    let contador;
  
    numero=pnumeroUno;
    contador=0;
    console.log("Con parametros");
    while (contador<numero) {
        contador=contador +1;
        console.log("resultado: "+contador);
    
    }
}
*/
let numeroFinal = 0;
let contadorActual = 0;


const numeroF = function() {
    numeroFinal = parseInt(document.getElementById('numero2').value);
}


const contadorF = function() {
    contadorActual = parseInt(document.getElementById('numero1').value);
}


const contar = function() {

    if (contadorActual === 0 && numeroFinal === 0) {
        numeroF();
        contadorF();
    }


    if (contadorActual <= numeroFinal) {
        document.getElementById('contador').innerHTML = `<strong> Contador: ${contadorActual} </strong>`;
        contadorActual++;
    } else {
        document.getElementById('contador').innerHTML = `<strong> Contador completado </strong>`;
    }
}