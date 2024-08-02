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

const numeroF = function(pnumeroUno,pcontador){
    let numero = pnumeroUno;
    return numero;
}

const contadorF = function(pnumeroUno,pcontador){
    let contadorÑ = pcontador;
    return contadorÑ;
}

const contar = function(pnumeroUno,pcontador){
    let numero = numeroF(pnumeroUno,pcontador);
    let contador = contadorF(pnumeroUno,pcontador);
    let resultContar="";
    while(contador<=numero){
        resultContar+=contador+"\n";
        contador ++;
        
    }
    return resultContar;
}


