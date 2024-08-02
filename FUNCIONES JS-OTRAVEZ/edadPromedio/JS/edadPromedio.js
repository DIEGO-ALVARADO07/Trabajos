/*
function edadPromedio() { //sin parametros
    let edadUno;
    let edadDos;
    let edadTres;
    let promedio;
    let actualAño;

    actualAño = 2024;
    añoNacimientoPersonaUno= 2007;
    añoNacimientoPersonaDos= 2006;
    añoNacimientoPersonaTres= 2003;
        edadUno= actualAño - añoNacimientoPersonaUno;
        edadDos= actualAño -añoNacimientoPersonaDos;
        edadTres= actualAño -añoNacimientoPersonaTres;  
        promedio= (edadUno + edadDos + edadTres)/3;
        console.log("Sin parametros")
        console.log("edad persona 1 = "+edadUno,"\n"+"edad persona 2 = "+edadDos,"\n"+"edad persona 3 = "+edadTres)
        return promedio;
}

function edadPromoParametro(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres) { //con parametros
    let actualAño = 2024;
    let añoNacimientoPersonaUno = pañoNacimientoPersonaUno;
    let añoNacimientoPersonaDos = pañoNacimientoPersonaDos;
    let añoNacimientoPersonaTres = pañoNacimientoPersonaTres;
    let edadUno;
    let edadDos;
    let edadTres;
    let promedio;

     edadUno= actualAño - añoNacimientoPersonaUno; 
     edadDos= actualAño - añoNacimientoPersonaDos; 
     edadTres= actualAño - añoNacimientoPersonaTres; 

     console.log("Con parametros");
     console.log("edad Uno:"+edadUno,"/"+"edad Dos:"+edadDos,"/"+"edad Tres:"+edadTres )
     promedio= ( edadUno + edadDos +edadTres)/3;
     console.log(promedio)
    return promedio;
}
*/

const primerPersona = function(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual){
    let actualAño = pañoactual;
    let yearBegin = pañoNacimientoPersonaUno;
    let edad1 = actualAño - yearBegin;
    return edad1;
}

const segundaPersona = function(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual){
    let actualAño = pañoactual;
    let yearBegin = pañoNacimientoPersonaDos;
    let edad2 = actualAño - yearBegin;
    return edad2;
}

const terceraPersona = function(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual){
    let actualAño = pañoactual;
    let yearBegin = pañoNacimientoPersonaTres;
    let edad3 = actualAño - yearBegin;
    return edad3;
}

const operacion = function (pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual){
    let edad1 = primerPersona(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual);
    let edad2 = segundaPersona(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual);
    let edad3 = terceraPersona(pañoNacimientoPersonaUno,pañoNacimientoPersonaDos,pañoNacimientoPersonaTres,pañoactual);
    let promedio = (edad1 + edad2 + edad3)/3;
    console.log("("+edad1+" + "+edad2+" + "+edad3+")/3: "+promedio);
    return promedio;
}