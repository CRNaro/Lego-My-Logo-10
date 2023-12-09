// This file is the entry point for the application. It uses inquirer to prompt the user for input and then generates an SVG file based on the user's input. 
const inquirer = require('inquirer');
const fs = require('fs');               
const { logoPrompts } = require ("./lib/prompts.js");
const { Triangle, Circle, Square } = require('./lib/shapes.js');

(async() => {
    //const {default: inquirer} = await import('inquirer');
    //const {logoPrompts} = await import('./lib/prompts.js');    //, textColorPrompts, shapePrompts, shapeColorPrompts
   
    inquirer.prompt(logoPrompts)     //, textColorPrompts, shapePrompts, shapeColorPrompts
    .then(answers => {
       let shape = '';
        switch(answers.shape) {
            case 'Circle':
                shape = `<circle cx="50" cy="50" r="40" fill = "${answers.shapeColor}" />`;
                break;
            case 'Triangle':
                shape = `<polygon points = "50,15 100,100 0,100" fill = "${answers.shapeColor}" />`;
                break;
            case 'Square':
                shape = `<rect x="100" y="100" width="70" height="70" fill = "${answers.shapeColor}" />`;
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shape}
            <text x="50" y="55" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;

        fs.writeFile('./examples/logo.svg', svg, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('The file has been saved!');
        });
    })
    .catch(error => {
        if(error.isError) {
            console.log("Prompt couldn't be rendered in the current environment");
        }
    });
})();
//module.exports = {
    //logoPrompts
//}