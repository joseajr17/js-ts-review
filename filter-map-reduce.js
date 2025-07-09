const numbers = [5, 50, 80, 1, 2, 3, 4, 6, 8, 7, 11, 15, 22, 27];

// Retorne a soma do dobro de todos os pares
//      => Filtrar pares
//      => Dobrar os valores
//      => Reduzir (Somar tudo)

const result = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((ac, value) => ac + value);

// [50, 80,  2, 4, 6,  8, 22]
// [100, 160,  4, 8, 12,  16, 44]
console.log(result)