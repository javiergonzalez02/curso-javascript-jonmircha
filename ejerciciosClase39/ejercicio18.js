//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contadorVocCons = texto => {
    let textoNuevo = texto.toLowerCase();
    let arrTexto = textoNuevo.split("");
    let contadorV = 0;
    let contadorC = 0;

    if (!texto || (typeof texto != "string")) console.log("Ingresa un texto válido.");

    for (let i = 0; i < arrTexto.length; i++) {
        if (arrTexto[i] === "a" || arrTexto[i] === "e" || arrTexto[i] === "i" || arrTexto[i] === "o" || arrTexto[i] === "u") {
            contadorV += 1;
        } else if (/[bcdfghjklmnñpqrstvwxyz]/.test(arrTexto[i])){
            contadorC += 1;
        }
    }
    console.log(`${texto} contiene ${contadorV} vocales y ${contadorC} consonantes`)
}

contadorVocCons("")

