// Destructuring de Arrays

const technologies =
[
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js"
]

// const react = technologies[3];
// console.log(react);

/*
Estraer valores con destructuring
Extrae los valores en base a su posicion
*/
// const [html,css] = technologies
// console.log(html,css);

const [, , js] = technologies
console.log(js);