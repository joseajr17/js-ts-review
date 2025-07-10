// Array[T] || T[]

function multiplyArgs(...args: Array<number>): number {
    return args.reduce((ac, value) => {
        return ac * value;
    }, 1);
}

function concatenateArgs(...args: string[]): string {
    return args.reduce((ac, value) => {
        return ac + value;
    });
}

function toUpperCase2(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}
console.log(multiplyArgs(1, 2, 3));
console.log(concatenateArgs('1', '2', '3'));
console.log(toUpperCase2('a', 'b', 'c'));

