function media(numero1, numero2, numero3) {
    if (numero1 === undefined || numero2 === undefined) {
        return "os parametros são obrigatorios ";
    } else if (typeof numero1 !== "number") {
        return "os parametros 'A' não é numerico";
    } else if (typeof numero2 !== "number") {
        return "os parametros 'B' não é numerico";
    }

    const soma = numero1 + numero2 + numero3; 
    return soma / 3;
}

const resultado = media(10, 10, 10);
console.log(resultado);