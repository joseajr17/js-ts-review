class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância
    volumeUp() {
        this.volume += 2;
    }

    volumeDown() {
        this.volume -= 2;
    }

    // Método estático
    static sum(x, y) {
        return x + y;
    }
}

const a1 = new RemoteControl('LG');
a1.volumeUp();
a1.volumeUp();
console.log(a1);

console.log(RemoteControl.sum(5, 7));

// o Math.random é um exemplo de Método Estático
console.log(Math.random());