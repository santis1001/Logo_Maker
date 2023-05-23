// Required Packages
const inquirer = require('inquirer');
const fs = require('fs');

// Returns the list containing all the predefined color keywords
const color = require('./assets/Json/svg-colors.json');

//Inquirer questions Object Array
const questions = [
    {
        type: 'input',
        name: 'L_Text',
        message: 'Enter the text that will be displayed in the logo.',
        validate: (input) => {
            if (input.length > 3 && input.length == 0) {
                return 'Please enter up to 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'L_TextColorSelection',
        message: 'Select the method you would like to use to apply color to the text.',
        choices: ['Predefined Color Keywords', 'Hexadecimal Color']
    },
    {
        type: 'input',
        name: 'L_TextColor',
        message: 'Input the Hexadecimal Color without the #. (Ex: ADADAD)',
        when: (answers) => answers.L_TextColorSelection === 'Hexadecimal Color',
        filter: (input) => `#${input}`,
        validate: (input) => {
            const colorReg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
            if (!colorReg.test(input)) {
                return 'Please enter a valid hexadecimal color.';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'L_TextColor',
        message: 'Select a text color from the Predefine SVG Colors List',
        choices: color,
        when: (answers) => answers.L_TextColorSelection === 'Predefined Color Keywords',
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
        message: 'Select the method you would like to use to apply color to the shape.',
        choices: ['Predefined Color Keywords', 'Hexadecimal Color']
    },
    {
        type: 'input',
        name: 'L_Color',
        message: 'Input the Hexadecimal Color without the #. (Ex: ADADAD)',
        when: (answers) => answers.L_ColorSelection === 'Hexadecimal Color',
        filter: (input) => `#${input}`,
        validate: (input) => {
            const colorReg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
            if (!colorReg.test(input)) {
                return 'Please enter a valid hexadecimal color.';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'L_Color',
        message: 'Select a color from the Predefine SVG Colors List',
        choices: color,
        when: (answers) => answers.L_ColorSelection === 'Predefined Color Keywords',
    },
]

// Make the question prompts
// Using the shape selected from the answers to import
// a module dynamically and instanciate the class, and 
// pass the answers to the class constructor 
// invoke the render() function and pass it to the SaveSVG() function
function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgShape = require(`./lib/${answers.L_shape}`);
        const SVGContent = new svgShape(answers);
        SaveSVG(SVGContent.render());
    });
}

// Gets the content for the SVG element and saves it as logo.svg
// then the callback function that will be executed once the writing
// operation is complete
function SaveSVG(content) {
    fs.writeFile('./examples/logo.svg', content, (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
}

// Function call to initialize app
init();