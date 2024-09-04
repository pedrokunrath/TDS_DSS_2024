//
 //   const maiorValor = lista.reduce((maiorValor, elementoAtual) => {
 //       return maiorValor > elementoAtual ? maiorValor : elementoAtual;
 //     }, 0);
 //   
//
//
//unction encontrarMenor(numero) {
 //   return Math.min(...numero);
//
//
//
//
//console.log("maiorValor: " + maiorValor) 
//
//const maior = encontrarMaior(lista);
//const menor = encontrarMenor(lista);    
//
//console.log("Maior numero: " + maior);
//console.log("Menor número:" + menor);

const lista = [10, 25, 8, 14, 37, 3];

function encontrarMaior() {
  var maiornum = lista[0]
  for (var i = 1; i < lista.length; i++) {
    if (lista[i] > maiornum) {
      maiornum = lista[i]
    }
  }
  return maiornum
}

function encontrarMenor() {
    var menornum = lista[0]
    for (var i = 1; i < lista.length; i++) {
      if (lista[i] < menornum) {
        menornum = lista[i]
      }
    }
    return menornum;
}
var resultadoMin = encontrarMenor(lista)
var resultadoMax = encontrarMaior(lista)
console.log("o resultado max foi de:" + resultadoMax);
console.log("o resultado min foi de:" + resultadoMin);