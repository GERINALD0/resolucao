const indice = 13
let soma = 0
let k = 0

for (let i = 0; i <indice; i++) {
    k++
    soma += k
}
console.log(`soma ${soma}`);



const fibonacci = numero => {
    let numeroAnterior = 0
    let numeroAtual = 1

    while (numeroAtual <= numero) {
        if (numeroAtual === numero) {
            return true
        } 
        
        let proximoNumero = numeroAnterior + numeroAtual;
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
    }
    
    return false    
}

const numeroInformado = 5

if (fibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence a sequência de Fibonacci`);
} else {
    console.log(`${numeroInformado} não pertence a sequência de Fibonacci`);
}


const inverterString = string => {
    let stringInvertida = ''

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i]
    }

    return stringInvertida;
}

const minhaString = "odlanireG"
const stringInvertida = inverterString(minhaString)

console.log(`String original: ${minhaString}`)
console.log(`String invertida: ${stringInvertida}`)
