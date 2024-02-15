const { crearArchivo } = require('./helpers/multiplicar');
const color = require('colors');
const  argv  = require('./config/yargs');


console.clear();

crearArchivo( argv.b , argv.h, argv.l)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'Creado' ))
    .catch(err => console.log( err ));