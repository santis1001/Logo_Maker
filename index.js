const inquirer = require('inquirer');
const fs = require('fs');


const color = require('./lib/svg-colors.json');

const questions = [
    {
        type: 'input',
        name: 'L_text',
        message: 'Enter the text that will be displayed in the logo.',
    },
    {
        type: 'list',
        name: 'L_shape',
        message: 'Enter the shape of the logo.',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'list',
        name: 'L_ColorSelection',
        message: 'Select wich way to apply color youll like to use. ',
        choices: ['Predefined Color Keywords','Hexadecimal Color']
    },
    {
        type: 'input',
        name: 'L_ColorHex',
        message: 'Input the Hexadecimal Color without the #. (Ex: ADADAD)',
        when: (answers) => answers.L_ColorSelection === 'Hexadecimal Color',
    },
    {
        type: 'list',
        name: 'L_ColorPre',
        message: 'Select a color from the Predefine SVG Colors List',
        choices: color,
        when: (answers) => answers.L_ColorSelection === 'Predefined Color Keywords',
    },
]

function init() {
    inquirer.prompt(questions).then( (answers) =>{

    });
}

init();