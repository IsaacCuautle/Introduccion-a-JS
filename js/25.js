//* Fetch API con Promises
/*
    Proporciona una interfaz para obtener datos a travez de la red
*/

const url = 'https://jsonplaceholder.typicode.com/comments'; 

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))