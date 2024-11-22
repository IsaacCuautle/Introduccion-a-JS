//* Optional Chaining ?
const student =
{
    name : 'Isaac',
    subject : "programing1",
    aprove : true,
        exams : 
        {
            exam1 : 9
        }
}

console.log(student.exams?.exam1);

//* Nullish Coalescing operator ??
const page = null ?? 1;
console.log(page);
