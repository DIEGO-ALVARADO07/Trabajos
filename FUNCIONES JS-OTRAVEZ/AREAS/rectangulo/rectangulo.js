const base1U = function (pBase1,pBase2,pAltura1,pAltura2){
    let base1 = pBase1;
    return base1;
}

const base2B = function (pBase1,pBase2,pAltura1,pAltura2){
    let base2 = pBase2;
    return base2;
}

const altura1U = function (pBase1,pBase2,pAltura1,pAltura2){
    let altura1 = pAltura1;
    return altura1;
}

const altura2B = function (pBase1,pBase2,pAltura1,pAltura2){
    let altura2 = pAltura2;
    return altura2;
}

const areaRectangulo1U = function (pBase1,pBase2,pAltura1,pAltura2){
    let base1 = base1U(pBase1,pBase2,pAltura1,pAltura2);
    let altura1 = altura1U(pBase1,pBase2,pAltura1,pAltura2);
    
    let area = base1*altura1;
    console.log("El area 1 es igual a: "+area+ " cm");
    return area;
}

const areaRectangulo2B = function (pBase1,pBase2,pAltura1,pAltura2){
    let base2 = base2B(pBase1,pBase2,pAltura1,pAltura2);
    let altura2 = altura2B(pBase1,pBase2,pAltura1,pAltura2);
    
    let area = base2*altura2;
    console.log("El area 2 es igual a: "+area+" cm");
    return area;
    
}

const areaMayor = function (pBase1,pBase2,pAltura1,pAltura2){
    let area1 = areaRectangulo1U(pBase1,pBase2,pAltura1,pAltura2);
    let area2 = areaRectangulo2B(pBase1,pBase2,pAltura1,pAltura2);
    let mayor;

    if(area1>area2){
        mayor = "El area 1 es mayor que el area 2";
    }
    else{
        mayor = "El area 2 es mayor que el area 1";
    }
    return mayor;
}
