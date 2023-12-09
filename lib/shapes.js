class Shape {
    constructor(color, width = 300, height = 200) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill = "${this.color}" />`
    }
}
class Circle extends Shape {
    constructor(color, radius) {
            super(color);
            this.radius = radius;
        }
        render(){
            return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />`
        }
    }
class Square extends Shape {
    constructor(color,sideLength) {
        super(color);
        this.sideLength = sideLength;
    }
    render() {
        return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`
    }
}

//Example TEST usage (delete before going live)
const triangle = new Triangle('blue');
console.log(triangle.render());
const circle = new Circle('red', 50);
console.log(circle.render());
const square = new Square('green', 50);
console.log(square.render());