// Atribuição via Desestruturação com Objetos

const person = {
    name: 'Maria',
    age: 20,
    address: {
        road: 'Avenida Brasil',
        number: 120
    }
}

const { name, age } = person;
console.log("Nome:", name, 'Idade:', age);

const { address: { road: r, number}, address } = person;
console.log("Endereço:", r, 'Número:', number, 'Endereço Completo:', address);