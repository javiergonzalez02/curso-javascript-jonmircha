//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = num => {

    if(((num % num) === 0) && ((num % 1) === 0) && ((num % 2) !== 0)){
        console.log(`El número ${num} es primo`)
    } else {
        console.log(`El número ${num} NO es primo`)
    }
}

esPrimo()