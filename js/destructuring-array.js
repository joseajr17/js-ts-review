// Atribuição via Desestruturação com Array

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letters = [b, c, a];
[a, b, c] = letters;

console.log(a, b, c);

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Uso do operador Rest
const [firstValue, secondValue, ...rest] = numeros;
console.log('Primeiro valor:', firstValue, 'Segundo valor:', secondValue);
console.log('Resto do Array:', rest);

const [one, , three , , five, , seven] = numeros;
console.log(one, three, five, seven);
