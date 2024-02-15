
const argv = require("yargs")
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la Base de la Tabla de Multiplicar'
            })
            .check(( argv, options) => {
                if( isNaN( argv.b )){
                    throw 'La base debe ser un Número.';
                }
                return true;
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Hasta donde va la Tabla de Multiplicar'
            })
            .check(( argv, options) => {
                if( isNaN( argv.h )){
                    throw 'Hasta debe ser un Número.';
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muesatra la tabla en la Consola'
            })            
            .argv;

module.exports =  argv ;