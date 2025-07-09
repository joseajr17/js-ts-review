// Reduce Method => Retorna um acumulador

const numbers = [5, 50, 80, 1, 2, 3, 4, 6, 8, 7, 11, 15, 22, 27];

// Some todos os números (Reduce)
const total = numbers.reduce((acumulator, value, index, array) => {
    acumulator += value;
    return acumulator;
}, 0);

console.log(total);

// Retorne um array com os pares (Filter)
const pairs = numbers.reduce((acumulator, value) => {
    if (value % 2 === 0)
        acumulator.push(value);
    return acumulator;
}, []);

console.log(pairs);

// Retorne um array com o dobro dos valores (Map)
const doubles = numbers.reduce((acumulator, value) => {
    
        acumulator.push(value * 2);
    return acumulator;
}, []);

console.log(doubles);



const people = [
    { name: 'Antonio', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Luiz', age: 55 },
    { name: 'Pedro', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Ana', age: 47 },
];

// Retorne a pessoa mais velha
const older = people.reduce((acumulator, value) => {
    if(acumulator.age < value.age)
        acumulator.age = value.age;

    return acumulator;
});

console.log(older);