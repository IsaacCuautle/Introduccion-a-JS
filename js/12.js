// Recorriendo Arrays con For
const technologies =
[
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js"
]

// for loop
// for (i=0; i<technologies.length; i++){
//     console.log(technologies[i]);
// }

// foreach
// technologies.forEach(e => {
//     console.log(e);
// });


// Map - Crea un nuevo arreglo en base a las condiciones de la funcion
// technologies.map(t => {  
//     console.log(t);
// })

// for of
for( t of technologies)
{
    console.log(t);
}