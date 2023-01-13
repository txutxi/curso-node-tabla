const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra por consola la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'LLímite hasta el que llegamos en la tabla'
                })
                .check((argv,options) =>{
                    if(isNaN(argv.base)){
                        throw 'ERROR!!! La base debe ser un numero y es requerida';
                    }
                    if(isNaN(argv.hasta)){
                        throw 'ERROR!!! El limite de la tabla debe ser un número';
                    }
                    console.log('yargs', argv);
                    return true;
                })
                .argv;


module.exports = argv;