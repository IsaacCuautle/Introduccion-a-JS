// Destructuring de dos o mas objetos 
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

const {name} = product;
const {name: clientName, address : {street}} = client;

console.log(name);
console.log(clientName);
console.log(street);

