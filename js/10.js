// Modificar Arrays

/* 
Pagina de apoyo para saber que metodos mutan un array
https://doesitmutate.xyz/
*/
const technologies =
[
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js"
]

// Agrega un valor al final del arreglo
// technologies.push("NEXT.JS");

console.table(technologies);

// Copia el contenido de otro array
// const newArray = [...technologies, "Nest.JS"];
// console.table(newArray);

// Elimina el primer contenido de un arreglo
// technologies.shift();
// console.log(technologies);

// Itera sobre los elementos del arreglo de forma individual
// const technologies2 = technologies.filter((tech) => {
//     if(tech !== "HTML")
//     {
//         return tech;
//     }
// })

// Permite acceder a los elementos del arreglo y modificarlo (pero itera sobre todos los elementos)
// const technologies2 = technologies.map((tech) => {
//     if ( tech === 'Node.js')
//     {
//         return "NEST.JS"
//     } else {
//         return tech;
//     }
// })

console.table(technologies2);
