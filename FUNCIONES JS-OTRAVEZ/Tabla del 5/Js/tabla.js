const tabla = function (pnumeroL){
   let numero = pnumeroL;
   let contador = 0;
   let multiplicar;
   while( contador < 6){
    multiplicar = numero * contador;
    console.log(numero+" x "+contador+" = "+multiplicar);
    contador++;
   }
   return multiplicar;
}