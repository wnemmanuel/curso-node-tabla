const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, hasta = 10, listar = false ) => {

    try {
        
        let salida  = '',
            archivo = '';

        if ( listar ){

            console.log(colors.green('============================='));
            console.log('Tabla de Multiplicar del '.green,colors.red(base));
            console.log('============================='.green);
       
            for (let i = 1; i <= hasta; i++) {
                salida  += ` ${base} ${ 'x'.green} ${i}  ${'='.green} ${ base * i }\n`;
                archivo += ` ${base} X ${i}  = ${ base * i }\n`;
            } 

            console.log(salida);
        }
        
        // fs.writeFileSync( `tabla-${ base }.txt`,salida);
        fs.writeFileSync( `./storage/tabla-${ base }.txt`,archivo);
        
        return  `tabla-${ base }.txt Creada`;
    } catch (err) {
        throw err;
    }
   
}

module.exports = { crearArchivo }




