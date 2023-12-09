
const logoPrompts = [{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: function (value) {
        if (value.length > 3) {
            return 'Please enter up to three characters for the text.';
        } else {
            return true;
        }
    }
},
{
    type: 'list',
    name: 'font',
    message: 'Choose your font style:',
    choices: ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact']
},
{                                          
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text:'  
},
{                                          
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
},
{                                          
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape:'
}];

module.exports = {
    logoPrompts
};