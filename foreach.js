const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for (let i = 0; i < a1.length; i++) {
//     console.log(a1[i]);
// }

// for (const value of a1) {
//     console.log(value);
// }

a1.forEach((value, index, array) => console.log(value, index));