function addOrConcat(x: string | number, y: string | number): string | number {
  if (typeof x === 'number' && typeof y === 'number')
    return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(2, 5));
console.log(addOrConcat('2', '5'));