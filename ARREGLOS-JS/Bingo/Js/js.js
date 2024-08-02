
let bingo = [/*['B','I','N','G','O']*/];

let iteracion1;
let iteracion2;
let tablaMulti;
let contador = 0;


/*
for(iteracion1=0; iteracion1<5; iteracion1++){
   
    let interno = [];
    for(iteracion2= 1 + iteracion1 * 5; iteracion2 <= (iteracion1+1)* 5; iteracion2++){
        tablaMulti = iteracion2 *2;

        interno.push(tablaMulti);

    }
    bingo.push(interno);

   
}
console.log(bingo);
*/

for(iteracion1=0;iteracion1<5;iteracion1++){

    let interno = [];
    for(iteracion2 = 0;iteracion2 < 5; iteracion2++){
        contador = contador + 1;
        tablaMulti = contador * 2;

        interno.push(tablaMulti);
    }
    bingo.push(interno);

    
}

console.log(bingo);


// lista B
console.log("B \n");
for (iteracion2=0; iteracion2<5; iteracion2++){
console.log(bingo[iteracion2][0]+" ");
}


console.log("I \n");
for (iteracion2=0; iteracion2<5; iteracion2++){
console.log(bingo[iteracion2][1]+" ");
}


console.log("N \n");
for (iteracion2=0; iteracion2<5; iteracion2++){
console.log(bingo[iteracion2][2]+" ");
}


console.log("G \n");
for (iteracion2=0; iteracion2<5; iteracion2++){
console.log(bingo[iteracion2][3]+" ");
}


console.log("O \n");
for (iteracion2=0; iteracion2<5; iteracion2++){
console.log(bingo[iteracion2][4]+" ");
}

console.log('/////////// X1 //////////////')
for (iteracion1=0; iteracion1<3;iteracion1++){
    for(iteracion2=0; iteracion2<3;iteracion2++){
        if(iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if(iteracion1%2==1 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else{
            console.log("-");
        }
   
    }
}
console.log('/////////// FIN X1 //////////////')

console.log('/////////// X2 //////////////')
for (iteracion1=0; iteracion1<3;iteracion1++){
    for(iteracion2=2; iteracion2<5;iteracion2++){
        if(iteracion1%2==0 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if(iteracion1%2==1 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else{
            console.log("-");
        }
   
    }
}
console.log('/////////// FIN X2 //////////////')



console.log('/////////// X3 //////////////')

for (iteracion1=2; iteracion1<5;iteracion1++){
    for(iteracion2=1; iteracion2<4;iteracion2++){
        if(iteracion1%2==0 && iteracion2%2==1){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if(iteracion1%2==1 && iteracion2%2==0){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else{
            console.log("-");
        }
   
    }
}

console.log('/////////// FIN X3 //////////////')


console.log('//////////// X GRANDEEEEEEEEE /////////////////')

let numero = 5;

for (iteracion1 = 0; iteracion1<numero; iteracion1++){
    for(iteracion2 = 0; iteracion2<numero; iteracion2++){
        if(iteracion1==iteracion2 || iteracion1 + iteracion2 == 4){
            console.log(bingo[iteracion1][iteracion2]);
        }
        }
    }

console.log('//////////// FIN X GRANDEEEEE ////////////////')