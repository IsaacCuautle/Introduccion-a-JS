//* Manipular elementos
const heading = document.querySelector('.heading');
const links = document.querySelectorAll('.navegacion a');

// heading.textContent = 'Nuevo Heading';
// heading.id = 'nuevoID';
// heading.removeAttribute('class');

const inputNombre = document.querySelector('#nombre');
// inputNombre.value = 'Nuevo valor';
// console.log(inputNombre.classList);

links[0].textContent = 'Nuevo enlace';
links.forEach(enlace => enlace.textContent = 'Nuevo enlace');