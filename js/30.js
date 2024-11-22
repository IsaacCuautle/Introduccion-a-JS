//* Enetos con Click
// https://developer.mozilla.org/en-US/docs/Web/API/Element

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');
// heading.addEventListener('dblclick', () => {
//     heading.textContent = "Nuevo heading";
// });

// heading.addEventListener('mouseenter', () => {
//     heading.textContent = "Nuevo heading";
// });

enlaces.forEach(enlace => enlace.addEventListener('click',(e) => 
{
    e.preventDefault();
    console.log('Hiciste clic');
}));