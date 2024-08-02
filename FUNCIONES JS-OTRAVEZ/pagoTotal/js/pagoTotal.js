const salario = function ( pvalorDia, pdiasTrabajados){
    let valorDia = pvalorDia;
    let diasTrabajados = pdiasTrabajados;

    let resultado = valorDia * diasTrabajados;
    return resultado;
 }

 const salud = function ( pvalorDia, pdiasTrabajados){
    let saludPersona;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    saludPersona = salarioPersona * 0.12;
    return saludPersona;
 }

 const arl = function (pvalorDia,pdiasTrabajados){
    let karl;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    karl = salarioPersona * 0.052;
    return karl;
 }

 const pension = function (pvalorDia,pdiasTrabajados){
    let jpension;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    jpension = salarioPersona * 0.16;
    return jpension;
 }

 const subTrans = function (pvalorDia,pdiasTrabajados){
    let auxTrans;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    if(salarioPersona<(1300000*2)){
        auxTrans = 114000;
    }
    else{
        auxTrans = 0;
    }
    return auxTrans;
 }

 const retencion = function (pvalorDia,pdiasTrabajados){
    let hretencion;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    if(salarioPersona<(1300000*4)){
        hretencion = salarioPersona * 0;
    }
    else{
        hretencion = salarioPersona * 0.04;
    }
    return hretencion;
 }

 const descuento = function (pvalorDia,pdiasTrabajados){
    let fdescuento;
    let fsalud = salud(pvalorDia,pdiasTrabajados);
    let farl = arl(pvalorDia,pdiasTrabajados);
    let fpension = pension(pvalorDia,pdiasTrabajados);
    let fretencion = retencion(pvalorDia,pdiasTrabajados);

    fdescuento = fsalud + farl + fpension + fretencion;

    return fdescuento;
 }

 const pagoTotal = function (pvalorDia,pdiasTrabajados){
    let sueldo;
    let salarioPersona = salario(pvalorDia,pdiasTrabajados);
    let descuentoS = descuento(pvalorDia,pdiasTrabajados);
    let auxTrans = subTrans(pvalorDia,pdiasTrabajados);

    sueldo = (salarioPersona - descuentoS) + auxTrans;

    return sueldo;
 }