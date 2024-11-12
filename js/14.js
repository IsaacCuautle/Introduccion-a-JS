//* Function expresions

const sum = function (arr)
{
    let i = 0;
    arr.forEach(element => {
        i+=element; 
    });

    return i;
}

console.log(sum([2,3,5]));