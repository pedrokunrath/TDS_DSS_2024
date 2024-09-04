function encontrarMaior(numero) {
    return Math.max(...numero);
}

function encontrarMenor(numero) {
    return Math.min(...numero);
}


const lista = [10, 25, 8, 14, 37, 3];

const maior = encontrarMaior(lista);
const menor = encontrarMenor(lista);    

console.log("Maior numero: " + maior);
console.log("Menor número:" + menor);
