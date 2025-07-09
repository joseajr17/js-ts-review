function rand(min, max) {
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

// Promise.all => Retorna todas as promises em ordem
const promisesAll = [
    'First value',
    waitPlease('Promise 1', 3000),
    waitPlease('Promise 2', 500),
    waitPlease('Promise 3', 1000),
    'Other value'
];

Promise.all(promisesAll)
    .then((value) => console.log(value))
    .catch((e) => console.log);

// Promise.race => Retorna a primeira Promise resolvida
const promisesRace = [
    waitPlease(1, rand(1, 3)),
    waitPlease('Promise 1', rand(1, 3)),
    waitPlease('Promise 2', rand(1, 3)),
    waitPlease('Promise 3', rand(1, 3)),
];

Promise.race(promisesRace)
    .then((value) => console.log(value))
    .catch((e) => console.log(e));

// Promise.resolve
function pageDownload() {
    const inCache = false;

    if (inCache) {
        return Promise.resolve('Page in cache');
    }
    else {
        return waitPlease('Page downloaded', 3000);
    }
}

// Promise.reject
function pageDownload2() {
    const inCache = false;

    if (inCache) {
        return Promise.reject('Error');
    }
    else {
        return waitPlease('Page downloaded', 3000);
    }
}

pageDownload()
    .then((response) => console.log(response))
    .catch((e) => console.log(e));