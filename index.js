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
                shape = `<circle cx="150" cy="100" r="100" fill = "${answers.shapeColor}" />`;
                break;
            case 'Triangle':
                shape = `<polygon points = "150,0 300,200 0,200" fill = "${answers.shapeColor}" />`;
                break;
            case 'Square':
                shape = `<rect x="25" y="25" width="200" height="300" fill = "${answers.shapeColor}" />`;
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shape}
            <text x="145" y="110" text-anchor="middle" fill="${answers.textColor}" font-size="30">${answers.text}</text>
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