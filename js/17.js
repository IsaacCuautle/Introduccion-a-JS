//* Array Methods
const numbers = [10,20,30];
const technologies = 
[
    'html',
    'css',
    'JavaScript',
    'React.js',
    'Node.js'
]; 

//* Filter 
// const newArray = technologies.filter((tech) => tech !== 'html');
// console.log(newArray);

// const result = numbers.filter(num => num !== 10)
// console.log(result);

//* Includes
// const result = technologies.includes("css");
// console.log(result);

//* Some - Devulve si almenos uno cumple la condicion 
// const result = numbers.some(num => num > 15);
// console.log(result);

//* Find - Devuelve el primer elemento que cumple una condicion
// const result = numbers.find(num => num >= 15);
// console.log(result);

//* Every - Retorna true o false si todos cumplen la condicion
// const result = numbers.every( num => num > 15)
// console.log(result);

//* Reduce - retorna un acumulado del total
// const result = numbers.reduce((total, num) => {
//     console.log(total);
//     console.log(num);

//     return total + num;
// },0);

const result = numbers.reduce((total,num) => total + num, 0);

console.log(result);
