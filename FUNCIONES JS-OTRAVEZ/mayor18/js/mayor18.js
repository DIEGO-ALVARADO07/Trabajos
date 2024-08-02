/*
const edadMayorParametros = function (pañoNacimiento) { //con parametros
    let actualAño = 2024;
    let añoNacimiento = pañoNacimiento;
   
    let edadUno;


     edadUno= actualAño - añoNacimiento; 

     if (edadUno>18) {
        console.log("es mayor edad: "+edadUno);
    } else {
        console.log("No es mayor de edad: "+edadUno); 
    }
}
*/
const edad = function (pañoNacimiento){
    let añoActual = 2024;
    let añoNacimiento = pañoNacimiento;
    let edadUno;
    edadUno = añoActual - añoNacimiento;
    return edadUno;
}

const mayor = function (pañoNacimiento){
    let impresion;
    let edadPersona = edad(pañoNacimiento);
    if( edadPersona>17 ){
       impresion = console.log("La persona es mayor de edad : "+edadPersona);
    }
    else{
        impresion = console.log("La persona es menor de edad : "+edadPersona);
    }
    return impresion;
}