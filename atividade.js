function shellSort(array) {
  var tamanho = array.length;
  var trocas = 0;

  for (var intervalo = Math.floor(tamanho / 2); intervalo > 0; intervalo = Math.floor(intervalo / 2)) {
    for (var i = intervalo; i < tamanho; i++) {
      var elementoAtual = array[i];
      var j;

      for (j = i; j >= intervalo && array[j - intervalo] > elementoAtual; j -= intervalo) {
        array[j] = array[j - intervalo];
        trocas++;
      }

      array[j] = elementoAtual;
    }
  }

  console.log("Número total de trocas: " + trocas);
}

// Vetor dado
var vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];

console.log(vetor);
shellSort(vetor);
console.log(vetor);
