//* Enventos en Submit
const formulario = document.querySelector('#formulario');

// Validacion del formulario
formulario.addEventListener('submit',(e) => 
{
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    
    nombre === '' || password === '' ? console.log('todos los campos son obligatorios') : console.log('Iniciando sesion');

});