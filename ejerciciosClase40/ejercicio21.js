// Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrCuadrado = (arr = []) => {
    let nuevoArray = [];

    if (!arr) {
        console.log("Introduce un array");
    } else if (arr.length === 0) {
        console.log("Introduce valores en tu array");
    } else {
        let condicionesCumplidas;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                condicionesCumplidas = true;
            } else {
                condicionesCumplidas = false;
            }

            if (condicionesCumplidas) {
                let value = arr[i];
                value **= 2;
                nuevoArray.push(value);
            }
        }
        if (condicionesCumplidas) {
            console.log(nuevoArray);
        } else {
            console.log("Introduce solamente valores numéricos.");
        }
    }
}
arrCuadrado([1,2,3,4])

