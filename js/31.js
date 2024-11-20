//* Eventos en Inputs
const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');

inputNombre.addEventListener('input',(e) => console.log(e.target.value));

inputPassword.addEventListener('dblclick',(e) => {
    inputPassword.type = 'text';

    // Espera 1.5seg y cambia el tipo de input
    setTimeout(() => {
        inputPassword.type = "password";
    },1500)
});