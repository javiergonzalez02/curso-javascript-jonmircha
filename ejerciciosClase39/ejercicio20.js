//Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const emailValido = (email = "") => {
    if (email === "") console.log("Introduce un nombre.");
    if (typeof email !== "string") return console.error(`El valor ${email} ingresado, NO es una cadena de texto.`);
    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    expReg ? console.info(`${email} es un email válido.`) : console.warn(`${email} NO es un email válido.`);
}


emailValido("Javier@gmai.com")