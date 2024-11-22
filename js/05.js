// Manipulacion de objetos

const product = {
    name : "tablet",
    price : "5000",
    available : false 
}

// Evita que se modifique el objeto
// Object.freeze(product);

/* 
    Permite modificar propiedades existentes, pero no añadir nuevas propiedades
*/
Object.seal(product)

// Reescribir un valor
product.available = true;
console.log(product);

// product.image = "image.jpg";
// console.log(product);

// Eliminar una propiedad
delete product.name;
console.log(product);
