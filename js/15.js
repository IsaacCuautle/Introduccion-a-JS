//* Arrow functions
const sum = (arr) => {
    let i = 0;

    arr.forEach(element => {
        i+=element; 
    });

    return i;
}

const msg = () => console.log("Hola");

console.log(sum([2,3,5]));
msg();