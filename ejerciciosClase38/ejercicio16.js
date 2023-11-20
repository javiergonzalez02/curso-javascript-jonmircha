// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (cantidad, descuento) =>{
    let condicion1;
    let condicion2;

    if (typeof cantidad !== "number"){
        condicion1 = true;
        console.log("Introduce un número.");
    } else {
        condicion1 = false;
    }
    if ((descuento < 0) || (descuento > 100)){
        condicion2 = true;
        console.log("Introduce un % de descuento entre 0 y 100.");
    } else {
        condicion2 = false;
    }

    let cantidadFinal;
    if (!condicion1 && !condicion2){
        cantidadFinal = cantidad - ((descuento / 100) * cantidad);
        console.log(cantidadFinal)
    }
}

descuento(10000000,20)
