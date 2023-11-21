//Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const nombreValido = (nombre = "") => {
    if (nombre === "") console.log("Introduce un nombre.");
    if (typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado, NO es una cadena de texto.`);
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
    expReg ? console.info(`${nombre} es un nombre válido.`) : console.warn(`${nombre} NO es un nombre válido.`);
}


nombreValido("Javier ahah")