const objA: {
     keyA: string,
    readonly keyB: string
} = {
    keyA: 'Valor A',
    keyB: 'Valor B'
}

objA.keyA = 'Outro valor';

console.log(objA.keyA);