//  Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const highestNum = (arr = []) => {
    let nuevoArr = [];
    let mayorValor = arr[0];
    let menorValor = arr[0];
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
            if (arr[i] >= mayorValor) {
                mayorValor = arr[i];
            }
            if (arr[i] <= menorValor) {
                menorValor = arr[i];
            }
        }
        if (condicionesCumplidas) {
            nuevoArr.push(menorValor);
            nuevoArr.push(mayorValor);
            console.log(nuevoArr);
        } else {
            console.log("Introduce solamente valores numéricos.")
        }
    }
}

highestNum([])

