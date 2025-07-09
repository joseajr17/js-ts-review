// Map Method => Retorna um array, com a mesma qntd. de elementos do array original

const numbers = [5, 50, 80, 1, 2, 3, 4, 6, 8, 7, 11, 15, 22, 27];

// Dobre os números
const newNumbers = numbers.map((value) => {
    return value * 2;
});

console.log(newNumbers);



const people = [
    { name: 'Antonio', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Luiz', age: 55 },
    { name: 'Pedro', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Ana', age: 47 },
];

// Para cada elemento, retorne apenas uma string com o nome da pessoa

const justName = people.map((value) => {
    return value.name;
});

console.log(justName);

// Para cada elemento, remova apenas a chave nome do objeto
const nameRemoved = people.map((value) => {
    const newObj = { ...value };
    delete newObj.name;
    return newObj;
});

console.log(nameRemoved);

// Adicione uma chave id em cada objeto
const withIds = people.map((value, index) => {
    const newObj = { ...value };
    newObj.id = index + 1;
    return newObj;
});

console.log(withIds);
console.log(people);