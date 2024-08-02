/* const buzzbassParametros =function (ptabla,pnumeroUno) {
        let tabla;
        tabla = ptabla;
        let multiplicar; 
        multiplicar = pnumeroUno;
        let par;
        let impar;
        let mod;
        let iTabla;
        let iMultiplicar;
        let resultado;
        par=0;
        impar=0;
        iTabla=0
        while(iTabla<tabla){
            iTabla++
            console.log("\n\n"+"Tabla del "+ iTabla+"\n\n")
            iMultiplicar=0

            while(iMultiplicar<multiplicar ){
                iMultiplicar++
                resultado=iTabla * iMultiplicar;
                if(resultado %2==0){
                    par++
                    mod= "buzz"
                }
                else{
                    impar++
                    mod= "bass"
                }
                console.log(iTabla+"x"+iMultiplicar+"="+resultado+" "+mod)
            }
        }
        console.log("\n\n"+"Total de pares: "+par)
        console.log("Total de impares: "+impar)
}*/


function contar5 (pcont1,pcont2){
    let cont1=pcont1;
    let cont2=pcont2;
    let contador=0;
    let resultado;
    let contadorPares=0;
    let contadorImpares=0;
    let multi;

    for(contador=1;contador<=cont1;contador++){
    

        for(multi=1;multi<=cont2; multi++){
            
            resultado=contador * multi;
            console.log(contador+ "x" +multi+ "=" + resultado);
            if(resultado%2==0){
                contadorPares++;
                console.log(resultado+ "buzz");
                console.log("par: "+contadorPares);
                
   
            }
            else {
                contadorImpares++;
                console.log(resultado+ "bass");
                console.log("Impar: "+contadorImpares);
                
               
            }
        }
        
        
    }console.log(resultado);

    
    
}

/*
const Tabla = function (ptabla,pnumeroUno){
    let tabla = ptabla;
    return tabla;
    
    
}

const numeroFinal = function (pnumeroUno){
    let numMulti = 9;
    return numMulti;
}

const Mtabla = function (ptabla,pnumeroUno){
    let tabla = Tabla(ptabla,pnumeroUno);
    let iTabla = 0;
    let valoresM = "";
    let resultado;
    while(iTabla<tabla){
        iTabla++;
        console.log("\n\n"+"Tabla del "+ iTabla+"\n\n");

    let multiplicar = numeroFinal(ptabla,pnumeroUno);
    let iMultiplicar = 0;
    while (iMultiplicar<multiplicar){
        resultado=iTabla * iMultiplicar;
        console.log(iTabla+"x"+iMultiplicar+"="+resultado);
        iMultiplicar++;
        
    }
    valoresM+=resultado;
}
    return valoresM;
}

const pregunta = function (ptabla,pnumeroUno){
    let resultado = Mtabla(ptabla,pnumeroUno);
    let mod;
    let par = 0;
    let impar = 0;
    if (resultado % 2 == 0){
        par ++;
        mod = "Buzz";
    }
    else{
        impar ++;
        mod = "Bass";
    }
    console.log("\n\n"+"Total de pares: "+par);
        console.log("Total de impares: "+impar);
} 
*/