function tabla(pnumero,pvalor){
    let Tabla = pvalor;
    let multiplicacion;
    let par = 0;
    let impar = 0;
    for(let Numero = pnumero;Numero<11;Numero++){
        multiplicacion = Numero * Tabla;
        console.log(Numero+" x "+Tabla+" = "+ multiplicacion);
        
    if(multiplicacion %2==0){   
        par = par + multiplicacion;
        console.log("Suma de pares = "+par);
    }

    else{
        impar = impar + multiplicacion;
        console.log("Suma de impares = "+impar);
    }
    }

}
    
