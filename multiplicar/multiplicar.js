//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) =>{
    console.log('*****************'.cyan);
    console.log(`tabla de ${base}`.cyan);
    console.log('*****************'.cyan);
    for(let i= 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}`.yellow);
    }
}

let crearArchivo = (base, limite=10) => {

    return new Promise ((resolve, reject) => {
        //validando que sea un numero
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número válido`);
            return;
        }

        let data ='';
        for(let i= 1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err)=>{
            if(err) reject(err)
            else
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}