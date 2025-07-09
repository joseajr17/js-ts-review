function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min);
}

function waitPlease(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Error');
                return;
            }

            resolve(msg + ' - Passei na Promise');
        }, time);
    });
}

async function execute() {
    try {
        const fase1 = await waitPlease('Fase 1', rand());
        console.log(fase1);

        const fase2 = await waitPlease('Fase 2', rand());
        console.log(fase2);

        const fase3 = await waitPlease('Fase 3', rand());
        console.log(fase3);
    } catch (error) {
        console.log(error);
    }
}

execute();