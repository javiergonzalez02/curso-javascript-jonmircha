// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = num => {

    if((num % 2) === 0){
        console.log(`El número ${num} es par`)
    } else {
        console.log(`El número ${num} NO es par`)
    }
}

esPar(3)