let cache = {};
let calls = 0;

function userData(id) {
    if (cache[id]) {
        return cache[id];
    }
    return cache[id] = new Promise((resolve, reject) => { // Llamada a una API
        calls++;
        setTimeout(() => { // esto podría ser la consulta a la BD
            resolve({ id });
        }, 1000);
    });
}

for (let i = 0; i < 10; i++) {
    userData(i).then(console.log);
    userData(i).then(console.log);
    userData(i).then(console.log);
}

// Cuántas llamadas fueron realizadas? 

// Cómo podemos disponer del valor de 'calls' para cada llamada realizada?

// Cómo ejecutar una acción final cuando todas las llamadas hayan sido
// resueltas? -- hint: Promise.all

// async.js // callbacks
//    VS
// bluebird // promises