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

const primerPersona = function(){
    let yearBegin = document.getElementById("fechaAñoNc").value;
    let actualAño = document.getElementById("fechaAñoAc").value;
    let edad = parseInt(actualAño) - parseInt(yearBegin);
    document.getElementById('edadP1 espacio').innerHTML=`<strong>La edad de la persona 1 es: ${edad}</strong>`;
    return false;
}

const segundaPersona = function(){
    let actualAño = document.getElementById("fechaAñoAc").value;
    let yearBegin = document.getElementById("fechaAñoNc2").value;
    let edad2 = parseInt(actualAño) - parseInt(yearBegin);
    document.getElementById('edadP2 espacio').innerHTML=`<strong>La edad de la persona 2 es: ${edad2}</strong>`;
    return false;
}

const terceraPersona = function(){
    let actualAño = document.getElementById("fechaAñoAc").value;
    let yearBegin = document.getElementById("fechaAñoNc3").value;
    let edad3 = parseInt(actualAño) - parseInt(yearBegin);
    document.getElementById('edadP3 espacio').innerHTML=`<strong>La edad de la persona 3 es: ${edad3}</strong>`;
    return false;
}


const Edad1 = function (){
    let añoActual = document.getElementById("fechaAñoAc").value;
    let añoNacimiento1 = document.getElementById("fechaAñoNc").value;
    let edad = parseInt(añoActual)-parseInt(añoNacimiento1);
    return edad;
}

const Edad2 = function(){
    let actualAño = document.getElementById("fechaAñoAc").value;
    let yearBegin = document.getElementById("fechaAñoNc2").value;
    let edad2 = parseInt(actualAño) - parseInt(yearBegin);
    return edad2;
}

const Edad3 = function(){
    let actualAño = document.getElementById("fechaAñoAc").value;
    let yearBegin = document.getElementById("fechaAñoNc3").value;
    let edad3 = parseInt(actualAño) - parseInt(yearBegin);
    return edad3;
}


const operacion = function (){
    let edad1 = Edad1();
    let edad2 = Edad2();
    let edad3 = Edad3();
    let promedio = (edad1 + edad2 + edad3)/3;
    document.getElementById('promediou espacio').innerHTML= `<strong>El promedio de las edades es: ${promedio}</strong>`;
    return false;
}