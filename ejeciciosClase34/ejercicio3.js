//  Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const arraySeparado = (texto, i) => {
    console.log(texto.split(i))
}

arraySeparado("holacomo estas", "")

const arraySeparado2 = (texto, i) => (!texto) ? console.log("Ingresa un texto") : console.log(texto.split(i));

arraySeparado2()