// Unir 2 o mas objetos
const product = {
    name : "tablet",
    price : "5000",
    available : false 
}

const client = 
{
    name : "Isaac",
    premium : true,
    address : {
        street: "México"
    }
}

// const shoppingCart = {
//     amount: 1,
//     ...product // Spread operator
// }

// console.log(shoppingCart.name);


// Unir 2 objetos
const newObject = 
{
    product,
    client
}
// console.log(newObject);

// Object assing
const newObject2 = Object.assign(product, client);
console.log(newObject2);
