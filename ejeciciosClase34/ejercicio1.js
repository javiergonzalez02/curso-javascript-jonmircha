// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10

function contadorCaracteres(cadena) {

    console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
}

contadorCaracteres("Hola Mundo");

const contadorCaracteres2 = cadena => (!cadena)  ? console.log(`La cadena no tiene caracteres`) : console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
contadorCaracteres2();
