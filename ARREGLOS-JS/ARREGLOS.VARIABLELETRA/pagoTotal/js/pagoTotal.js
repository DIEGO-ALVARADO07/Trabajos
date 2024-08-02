 const salarioA = function ( pvalorDia, pdiasTrabajados){
    let valorDia = pvalorDia;
    let diasTrabajados = pdiasTrabajados;

    let resultado = valorDia * diasTrabajados;
    return resultado;
 }

 const saludA = function ( pvalorDia, pdiasTrabajados){
    let saludPersona;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    saludPersona = salarioPersona * 0.12;
    return saludPersona;
 }

 const arlA = function (pvalorDia,pdiasTrabajados){
    let karl;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    karl = salarioPersona * 0.052;
    return karl;
 }

 const pensionA = function (pvalorDia,pdiasTrabajados){
    let jpension;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    jpension = salarioPersona * 0.16;
    return jpension;
 }

 const subTransA = function (pvalorDia,pdiasTrabajados){
    let auxTrans;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    if(salarioPersona<(1300000*2)){
        auxTrans = 114000;
    }
    else{
        auxTrans = 0;
    }
    return auxTrans;
 }

 const retencionA = function (pvalorDia,pdiasTrabajados){
    let hretencion;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    if(salarioPersona>(1300000*4)){
        hretencion = salarioPersona * 0.02;
    }
    else if(salarioPersona>(1300000*6)){
      hretencion = salarioPersona * 0.04;
    }
    else{
      hretencion = salarioPersona * 0;
    }
    return hretencion;
 }

 const extraA = function (pvalorDia,pdiasTrabajados){
   let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
   let viejo;
   if(nomina[iteracion2].edad>40){
      viejo = salarioPersona * 0.06;
   }
   else if(nomina[iteracion2].edad>60){
      viejo = salarioPersona * 0.08;
   } 
   else {
      viejo = 0;
   }
   return viejo;
 }

 const descuento = function (pvalorDia,pdiasTrabajados){
    let fdescuento;
    let fsalud = saludA(pvalorDia,pdiasTrabajados);
    let farl = arlA(pvalorDia,pdiasTrabajados);
    let fpension = pensionA(pvalorDia,pdiasTrabajados);
    let fretencion = retencionA(pvalorDia,pdiasTrabajados);

    fdescuento = fsalud + farl + fpension + fretencion;

    return fdescuento;
 }

 const pagoTotalA = function (pvalorDia,pdiasTrabajados){
    let sueldo;
    let salarioPersona = salarioA(pvalorDia,pdiasTrabajados);
    let descuentoS = descuento(pvalorDia,pdiasTrabajados);
    let auxTrans = subTransA(pvalorDia,pdiasTrabajados);
    let viejo = extraA(pvalorDia,pdiasTrabajados);

    sueldo = (salarioPersona - descuentoS) + auxTrans + viejo;

    return sueldo;
 }


  
 