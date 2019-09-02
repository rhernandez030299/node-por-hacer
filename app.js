const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let command = argv._[0];

switch (command) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        let listado = porHacer.listado();

        for (const tarea of listado) {
            console.log('========= Por Hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado) {
            console.log('Se actualizo correctamente');
        } else {
            console.log('No se actualizo');
        }

        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        if (borrar) {
            console.log('El registro se elimino correctamente');
        } else {
            console.log('El registro no se elimino');
        }
    default:
        console.log('Comando no encontrado');
        break;
}