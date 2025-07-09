function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) - min);
}

function waitPlease(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string')
            reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

waitPlease('Conexao com o BD', rand(1, 3))
    .then((response) => {
        console.log(response);
        return waitPlease(1, rand(1, 3));
    })
    .then((response) => {
        console.log(response)
        return waitPlease('Tratando os dados do BD', rand(1, 3));
    })
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log('Error:', e);
    });