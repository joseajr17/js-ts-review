// undefined

let x;

if (typeof x === 'undefined')
    x = 20;

console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): { firstName: string, lastName?: string } {
    return {
        firstName,
        lastName
    }
}

// null

export function squareOf(x: any) {
    if (typeof x === 'number')
        return x * x;

    return null;
}

const squareOfTwoNumbers = squareOf(2);

if (squareOfTwoNumbers === null) {
    console.log('Conta inválida');
} else {
    console.log(squareOfTwoNumbers * 4);
}

// never

function createError(): never {
    throw new Error('Any error');
}
createError();