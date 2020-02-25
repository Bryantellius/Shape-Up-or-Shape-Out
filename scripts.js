let drawingSurface = document.getElementById('drawingSurface');
let rectBtn = document.getElementById('rectBtn');
let squareBtn = document.getElementById('squareBtn');
let circleBtn = document.getElementById('circleBtn');
let triBtn = document.getElementById('triBtn');
let rectWidth = document.getElementById('rectWidth');
let rectHeight = document.getElementById('rectHeight');
let squSide = document.getElementById('squSide');
let radius = document.getElementById('radius');
let triHeight = document.getElementById('triHeight');

rectBtn.addEventListener('click', () => {
    let newShape = new Rectangle(rectWidth.value, rectHeight.value);
})
squareBtn.addEventListener('click', () => {
    let newShape = new Square(squSide.value);
})
circleBtn.addEventListener('click', () => {
    let newShape = new Circle(radius.value);
})
triBtn.addEventListener('click', () => {
    let newShape = new Triangle(triHeight.value);
})

class Shape {
    constructor(width, height) {
        this.randomCoord(0, 600);
        this.randomCoord(0, 400);
        this.width = width;
        this.height = height;
        this.createShape();
    }

    createShape = () => {
        let newShape = document.createElement('div');
        newShape.className = 'shape';
        newShape.style.left = `${this.xCoord}px`;
        newShape.style.top = `${this.yCoord}px`;
        newShape.style.width = `${this.width}px`;
        newShape.style.height = `${this.height}px`;
        this.div = newShape;
        drawingSurface.appendChild(newShape);
    }

    randomCoord = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.xCoord = Math.floor(Math.random() * (max - min)) + min;
        this.yCoord = Math.floor(Math.random() * (max - min)) + min;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.className = 'shape rect';
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.className = 'shape square';
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.div.className = 'shape circle';
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.className = 'shape';
        this.div.style.borderBottom = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
    }
}