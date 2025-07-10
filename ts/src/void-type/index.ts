function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const person = {
    name: 'Maria',
    age: 30,

    showInfos(): void {
        console.log('My name is', this.name, 'and my age is', this.age);
    }
}

noReturn('José', 'Antonio');
person.showInfos();

export { person };