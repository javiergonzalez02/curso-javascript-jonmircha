// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contador(texto, palabra) {
    if (!texto) {
        console.log("Introduce un texto")
    } else if (!palabra) {
        console.log("Introduce una palabra")
    } else {
        let busca = new RegExp(palabra, "g");
        let encontrados = texto.match(busca);
        let numEncontrados = encontrados.length;

        console.log(numEncontrados)
    }

}

contador("hola q tal hola", "ho")