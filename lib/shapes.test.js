const { default: test } = require('node:test');
const {Triangle, Circle, Square} = require('./lib/shapes');

test ('Triangle render method', () => {
    const Triangle = new Triangle('blue');
    expect(Triangle.render()).toBe('<polygon points = "150, 18 244, 182 56, 182" fill = "${this.color}" />');
});

test ('Circle render method', () => {
    const Circle = new Circle('red');
    expect(Circle.render()).toBe('<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />');
});
test ('Square render method', () => {
    const Square = new Square('green');
    expect(Square.render()).toBe('<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />');
});
// Need tests for Circle and Square