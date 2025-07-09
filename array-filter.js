// Filter Method => Sempre retorna um novo array, com a mesma qntd. de elementos do array original ou menos

const numbers = [5, 50, 80, 1, 2, 3, 4, 6, 8, 7, 11, 15, 22, 27];

const filteredNumbers = numbers.filter((value, index, array) => {
    // console.log(value, index, array);
    return value > 10;
});
console.log(filteredNumbers);



const people = [
    { name: 'Antonio', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Luiz', age: 55 },
    { name: 'Pedro', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Ana', age: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const peopleWithBigName = people.filter((value) => {
    return value.name.length > 4;
})
console.log(peopleWithBigName);

// Retorne as pessoas com mais de 50 anos
const olderPeople = people.filter((value) => {
    return value.age > 50;
})
console.log(olderPeople);

// Retorne as pessoas cujo nome termina com a
const NamesEndingWithA = people.filter((value) => {
    return value.name.toLowerCase().endsWith('a');
})
console.log(NamesEndingWithA);