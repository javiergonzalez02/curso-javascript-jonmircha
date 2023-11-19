// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


function palindromo(palabra) {
   /* let arrPalabra = palabra.split("");
    let palabraInversa = arrPalabra.reverse().join("");*/

    let palabraInversa = palabra.split("").reverse().join("");

    console.log(palabra)
    console.log(palabraInversa)

    if (!palabra) {
        console.log("Introduce un texto o una palabra")
    } else if (palabra.toLowerCase() === palabraInversa.toLowerCase()) {
        console.log("La palabra/texto introducida es un palíndromo")
    } else {
        console.log("La palabra/texto introducida NO es un palíndromo")
    }
}

palindromo("Ala ala")

