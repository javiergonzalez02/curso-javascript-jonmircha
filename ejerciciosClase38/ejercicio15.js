//  Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//Introduce un numero y la base ACTUAL que tiene, para devolver el numero de base contraria
const conversorBinDec = (num, base) => {
    Math.ceil(num);
    let condicion1;

    let arrCociente= [];

    if (typeof num !== "number") {
        condicion1 = false;
        console.log("Introduce un número.");
    } else {
        condicion1 = true;
    }
    if ((base !== 2) && (base !== 10)) {
        console.log("Introduce una base de 2 o 10.");
    } else if (base === 2) {
        console.log(parseInt(num, base));
    } else if  (base === 10) {
        console.log(num.toString(2));
    }

}

conversorBinDec(10,2)