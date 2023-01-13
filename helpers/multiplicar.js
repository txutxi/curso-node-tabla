const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar = false, hasta = 10) => {
    //Como promesa
    //return new Promise( (resolve, reject) => {
    //    // codigo aquí
    // resolve(`tabla-${ base}.txt creado`);
    //});
    
    //Como async
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++){
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log('=================='.green);
            console.log('   Tabla del: '.green, colors.blue(base));
            console.log('=================='.green);
            console.log(consola);
            // fs.writeFile(`tabla-${ base}.txt`, salida, (err) => {
            //     if(err) throw err;
            //     console.log(`tabla-${ base}.txt creado`);
            // });
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${ base}.txt creado`;       
    } catch (err) {
        throw err;
    }
}



module.exports = {
    crearArchivo
}