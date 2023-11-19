// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function textoRecortado(texto, num){
    console.log(texto.slice(0,num))
}

textoRecortado('joder', 2)

const textoRecortado2 = (texto, num = undefined) => (!texto) ? console.log("Ingresa un texto") : (num === undefined ) ? console.log("Ingresa un numero") : console.log(texto.slice(0,num));

textoRecortado2("123" , 2)