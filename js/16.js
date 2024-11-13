//* Funciones que retornan valores
const sum = (arr) => {
    let i = 0;

    arr.forEach(element => {
        i+=element; 
    });

    return i;
}

resultado = sum([2,3,5]);