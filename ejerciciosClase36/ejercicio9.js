//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroRandom = num => {
    let numero = Math.round(Math.random() * (600 - 501) + 501);
    console.log(numero)
}

numeroRandom()