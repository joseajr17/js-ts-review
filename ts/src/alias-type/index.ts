type Age = number;
type Person = {
    name: string,
    age: Age,
    salary: number,
    favoriteColor?: string
};

type RGBColor = 'Vermelho' | 'Verde' | 'Azul';
type CMYKColor = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = RGBColor | CMYKColor;

const newPerson: Person = {
    name: 'Luiz',
    age: 15,
    salary: 20_000
};

console.log(newPerson);

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return {...person, favoriteColor: color}
}

console.log(setFavoriteColor(newPerson, 'Ciano'));
console.log(newPerson);
