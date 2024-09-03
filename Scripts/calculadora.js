function somar(numero1,numero2,resultado){
    if (numero1 == undefined || numero2 == undefined){
        return "os parametros são obrigatorios "
    }else if (typeof numero1 !== "NUMBER"){
        return "os parametros 'A' não é numerico"
    }else if(typeof numero2 !== "NUMBER"){
        return "os parametros 'B' não é numerico"
    }
   
    return numero1 + numero2;
}

const resultado = somar(1,2);
console.log(resultado);