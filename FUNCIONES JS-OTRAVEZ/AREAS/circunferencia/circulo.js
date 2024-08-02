const valorPi = function (pPi,pRadio){
    let piB = pPi;
    return piB;
}

const valorRadio = function (pPi,pRadio){
    let radioS = pRadio;
    return radioS;
}

const areaCircunferencia = function (pPi,pRadio){
    let pi = valorPi(pPi,pRadio);
    let radio = valorRadio(pPi,pRadio);
    let area = pi * radio * radio;
    return area;
}
