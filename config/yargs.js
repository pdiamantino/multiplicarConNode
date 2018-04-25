const opts ={
    base: {
        demand:true,
        alias: 'b'
    },
    limite:{
        alias : 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprimir la tabla de multiplicar en consola', opts)
                .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
                .help()
                .argv;

module.exports = {
    argv
}