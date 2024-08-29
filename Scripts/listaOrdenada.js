const list = [1,3,4,7,2,6,9,0,8,5];

function Odernalista(parametro){
    return parametro.sort();
} 

console.log('essa é a lista anterior : ' + list);
var oderna = Odernalista(list);
console.log('essa é a lista ordenada : ' + oderna);