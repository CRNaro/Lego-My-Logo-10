//require = require("esm")(module/*, options*/);   
const inquirer = require('inquirer');
const fs = require('fs');               
//const {logoPrompts} = require('./lib/prompts.mjs');    //, textColorPrompts, shapePrompts, shapeColorPrompts
const { logoPrompts } = require ("./lib/prompts.js");

(async() => {
    //const {default: inquirer} = await import('inquirer');
    //const {logoPrompts} = await import('./lib/prompts.js');    //, textColorPrompts, shapePrompts, shapeColorPrompts
   
    inquirer.prompt(logoPrompts)     //, textColorPrompts, shapePrompts, shapeColorPrompts
    .then(answers => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="50" fill="${answers.textColor}">${answers.text}</text>
            <${answers.shape} cx="50" cy="50" r="40" fill="${answers.shapeColor}" />
            </svg>`;

        fs.writeFile('image.svg', svg, (err) => {
            if (err) throw err;
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