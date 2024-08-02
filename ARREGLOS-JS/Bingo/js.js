function crearBingoTablaDelDos() {
  const bingo = [];
  for (let i = 2; i <= 50; i += 2) {
    bingo.push(i);
  }

  // Crear una matriz 5x10 para el bingo
  const bingoMatriz = [];
  while (bingo.length) bingoMatriz.push(bingo.splice(0, 5));

  return bingoMatriz;
}

// Función para mostrar el bingo en la consola
function mostrarBingo(bingoMatriz) {
  console.log('BINGO DE LA TABLA DEL 2');
  bingoMatriz.forEach(fila => {
    console.log(fila.join('\t'));
  });
}

// Generar y mostrar el bingo
const bingoDelDos = crearBingoTablaDelDos();
mostrarBingo(bingoDelDos);

