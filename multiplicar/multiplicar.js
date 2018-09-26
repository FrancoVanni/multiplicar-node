const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    for (i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`.green);
    }

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Los valores introducidos no son un número')
        } else {
            resolve()
        }

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducir ${base} no es un número`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}