const {Triangle, Circle, Square} = require('./shapes');

test ('Triangle render method', () => {
    const Triangle = new Triangle('blue');
    exportAllDeclaration(Triangle.render()).toBe('<polygon points = "150, 18 244, 182 56, 182" fill = "${this.color}" />');
});
// Need tests for Circle and Square