// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celsiusToFahrenheitAndViceversa = (grados, unidad) => {
   let gradosNuevos;
    unidad.toLowerCase()
    if ((unidad === "celsius") || (unidad === "c")) {
        gradosNuevos = (grados * 1.8 +32).toFixed(2);
        console.log(`${grados}º grados en Celsius son ${gradosNuevos}º en Fahrenheit.`)
    }


    if ((unidad === "fahrenheit") || (unidad === "f")) {
        gradosNuevos = ((grados - 32) / 1.8).toFixed(2);
        console.log(`${grados}º grados en Fahrenheit son ${gradosNuevos}º en Celsius.`)
    }
}

celsiusToFahrenheitAndViceversa(12, "f")
