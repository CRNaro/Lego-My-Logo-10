
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
{                                          // was: const textColorPrompts =
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text:'  
},
{                                           // was: const shapePrompts =
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
},
{                                           // was: const shapeColorPrompts =
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape:'
}];

module.exports = {
    logoPrompts
};