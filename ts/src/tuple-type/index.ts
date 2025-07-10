const clientsData1: readonly [number, string] = [1, 'Maria'];
const clientsData2: [number, string, string] = [2, 'José', 'Antonio'];
const clientsData3: [number, string, string?] = [3, 'Pastel'];
const clientsData4: [number, string, ...string[]] = [4, 'Antonio'];

clientsData2[1] = 'Josué';

console.log(clientsData1);
console.log(clientsData2);
console.log(clientsData3);
console.log(clientsData4);

