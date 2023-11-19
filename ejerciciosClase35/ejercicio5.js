// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function revertir(texto) {
    if(!texto){
        console.log("Introduce un texto")
    } else {
        arrTexto = texto.split("");
        arrTextoInvertido = arrTexto.reverse().join("")
        //textoInvertido = arrTextoInvertido.toString()
        console.log(arrTextoInvertido)
        // console.log(textoInvertido)
    }
}

revertir("aaq")