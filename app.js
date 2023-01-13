const { crearArchivo } = require('./helpers/multiplicar');
const argv =require('./config/yargs');
require('colors');

console.clear();

// A mano
// const [,, arg3]= process.argv
// const [, base=5]= arg3.split('=');

//Con yargs
//console.log(process.argv);
//console.log(argv['base']);
//console.log(argv);
//console.log(argv.base);


//console.log(arg3);
//console.log(base);

// const base = 6;
crearArchivo(argv.base, argv.listar, argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));


