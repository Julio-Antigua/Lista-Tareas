import colors from 'colors'
import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            // 'opt1','opt2','opt3'
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3 ',
                name: `${'3.'.green} Listar tarea completadas`
            },
            {
                value: '4 ',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

const pausa = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${ 'ENTER'.green } para continuar`
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('=============================='.green);
    console.log('   Seleccione una opcion   '.white);
    console.log('==============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;

};

const inquirerPausa = async() => {
    console.log('\n')
    await inquirer.prompt(pausa);
}

const leerInput = async(mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

export{
    inquirerMenu, inquirerPausa,leerInput
}