// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arrParImpar = (arr) => {
    let arrPar = [];
    let arrImpar = [];

    if (!arr) {
        console.log("Introduce un array");
    } else if (arr.length === 0) {
        console.log("Introduce valores en tu array");
    } else {
        let condicionesCumplidas;
        for (let i = 0; i < arr.length; i++) {
            let valorNum;
            if(typeof arr[i] == "number"){
                valorNum = true;
            } else {
                valorNum = false;
                condicionesCumplidas = false;
            }


            if ((arr[i] % 2 === 0) && valorNum){
                condicionesCumplidas = true;
                arrPar.push(arr[i]);
            } else if (!(arr[i] % 2 === 0) && valorNum) {
                condicionesCumplidas = true;
                arrImpar.push(arr[i]);
            }
        }

        if (condicionesCumplidas) {
            console.log(`Numeros pares: ` + JSON.stringify(arrPar));
            console.log(`Numeros impares: ` + JSON.stringify(arrImpar));
        } else {
            console.log("Introduce solamente valores numéricos.")
        }
    }
}

arrParImpar([1,4,6,8,10,11,40])