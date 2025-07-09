// Type Annotation é aquilo que vem depois dos dois pontos ':'

// Tipos básicos
let name: string = 'José'; // Qualquer tipo de strings: '' "" ``
let age: number = 1; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true ou false
let symbol: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays 
let numbers: Array<number> = [1, 2, 3];
let numbers2: number[] = [1, 2, 3];
let strings: Array<string> = ['One', 'Two', 'Three'];

// Objects
let person: { name: string, age: number, adult?: boolean } = {
    age: 30,
    name: 'Antonio',
};

// Functions
function sum(x: number, y: number): number {
    return x + y;
}

