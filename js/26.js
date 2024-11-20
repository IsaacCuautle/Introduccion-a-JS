//* Fetch API con Async await

const url = 'https://jsonplaceholder.typicode.com/comments'; 

// const consultarAPI = () => 
// {
//     fetch(url)
//     .then(response => 
//         {
//             if(response.ok)
//             {
//                 return response.json();
//             }

//             throw new Error('Hubo un error...');
//         }
//     )
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))
// }

/*
    En async await no se pueden atrapar errores de forma nativa
*/
const consultarAPI = async() => 
{
    try 
    {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error('Hubo un error');
        }

        const data =  await response.json();
        console.log(data);
    } catch (error) 
    {
        console.log(error.message);
    }
}

consultarAPI();

// Async Await si requiere una funcion