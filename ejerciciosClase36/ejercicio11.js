// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const numFactorial = n => {
    let numOperacion = 1
    if(n <= 0){
        console.log("Introduce un número positivo")
    } else if(n > 0){
        for (let i = 1; i <= n; i++){
        numOperacion *= 1
        console.log(numOperacion)
        }
    } else {
        console.log("Introduce un número positivo")
    }


}

numFactorial()
