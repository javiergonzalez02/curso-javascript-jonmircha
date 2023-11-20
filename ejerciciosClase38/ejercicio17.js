//  Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const tiempoTranscurrido = (fecha) => {
    let diferenciaEnMs = new Date().getTime() - fecha.getTime();
    let aniosEnMs = 1000 * 60 * 60 * 24 * 365;
    let aniosHumanos = Math.floor(diferenciaEnMs / aniosEnMs);

    if (!fecha) console.log("Introduce una fecha.");

    if (!(fecha instanceof Date)) console.log("No ingresaste una fecha válida.");

    if (Math.sign(aniosHumanos) === -1) {
        console.log(`Faltan ${Math.abs(aniosHumanos)} años para ${fecha.getFullYear()}`)
    } else if (Math.sign(aniosHumanos) === 1) {
        console.log(`Han pasado ${Math.abs(aniosHumanos)} años desde ${fecha.getFullYear()}`)
    } else {
        console.log(`Estamos en el año ${fecha.getFullYear()}`)
    }

}

tiempoTranscurrido(new Date(2022, 2, 1))