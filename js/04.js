// Objetos y Destructuring
const product = {
    name : "tablet",
    price : "5000",
    available : false 
}

// console.log(product);
// console.log(typeof(product));
// console.table(product);

// console.log(product.price);

// Destructuring
// const {name,price,available} = product
// console.log({product});

// Object literal enhacement
const  autenticate = true;
const user = "Isaac";

const newUser = {
    autenticate,
    user
}

console.log(newUser);
