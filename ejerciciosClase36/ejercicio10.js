//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = num => {
    let numOriginal = num.toString();
    let reverseNum = num.toString().split("").reverse().join("");

    if (!num) {
        console.log("Ingresa un número")
    } else if (numOriginal === reverseNum) {
        console.log(`El número ${num} es capicúa`)
    } else {
        console.log(`El número ${num} NO es capicúa`)
    }
}

capicua(2002)