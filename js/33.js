//* Validando formularios y mostrando alertas
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e) => 
{
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    // Eivta alertas duplicadas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove();

    // Crea un espacio para las alertas
    const alerta = document.createElement('DIV');
    alerta.classList.add(
        'alerta',
        'text-sm',
        'text-center',
        'p-2',
        'text-white',
        'font-black'
    );
    console.log(alerta);
    
    // Validacion del formulario
    if ( nombre === '' || password === '' ) 
    {
        alerta.textContent = 'Todos Los Campos Son Obligatorios';
        alerta.classList.add('bg-red-500');
    } else
    {
        alerta.textContent = 'Iniciando Sesion...'; 
        alerta.classList.add('bg-green-500');
    }
    
    // Añade la alerta al formulario
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);

});