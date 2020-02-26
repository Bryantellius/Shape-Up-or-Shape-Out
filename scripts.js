let drawingSurface = document.getElementById('drawingSurface');

let nameSpan = document.getElementById('nameSpan');
let widthSpan = document.getElementById('widthSpan');
let heightSpan = document.getElementById('heightSpan');
let radiusSpan = document.getElementById('radiusSpan');
let areaSpan = document.getElementById('areaSpan');
let perimeterSpan = document.getElementById('perimeterSpan');

let rectBtn = document.getElementById('rectBtn');
let squareBtn = document.getElementById('squareBtn');
let circleBtn = document.getElementById('circleBtn');
let triBtn = document.getElementById('triBtn');

let rectWidth = document.getElementById('rectWidth');
let rectHeight = document.getElementById('rectHeight');
let squSide = document.getElementById('squSide');
let radius = document.getElementById('circRadius');
let triHeight = document.getElementById('triHeight');

let feedbackName = document.getElementById('shapeName');
let feedbackWidth = document.getElementById('width');
let feedbackHeight = document.getElementById('height');
let feedbackRadius = document.getElementById('radius');
let feedbackArea = document.getElementById('area');
let feedbackPerimeter = document.getElementById('perimeter');

// DELETE SHAPE FUNCTION
let removeShape = (object) => {
    object.div.addEventListener('dblclick', () => {
        drawingSurface.removeChild(object.div);
    })
}

let removeSpan = () => {
    feedbackName.removeChild(nameSpan);
    feedbackWidth.removeChild(widthSpan);
    feedbackHeight.removeChild(heightSpan);
    feedbackRadius.removeChild(radiusSpan);
    feedbackArea.removeChild(areaSpan);
    feedbackPerimeter.removeChild(perimeterSpan);
}

// FEEDBACK SPAN FUNCTION
let changeSpanFeedback = (object) => {
    nameSpan.textContent = `${object.name}`;
    widthSpan.textContent = `${object.width}px`;
    heightSpan.textContent = `${object.height}px`;
    radiusSpan.textContent = object.radius;
    areaSpan.textContent = `${object.area}px`;
    perimeterSpan.textContent = `${object.perimeter}px`;
}

// 
let randomNum = () => Math.floor(Math.random() * (200 - 25)) + 25;

// EVENT LISTENERS ON BUTTONS
// EVENT LISTENERS ON DIVS
rectBtn.addEventListener('click', () => {
    let newShape;
    if(rectWidth.value === '' || rectHeight.value === ''){
        newShape = new Rectangle(randomNum(), randomNum(), 'Rectangle');
    }else{
        newShape = new Rectangle(rectWidth.value, rectHeight.value, 'Rectangle');
    }
    newShape.div.addEventListener('click', () => {
        changeSpanFeedback(newShape);
    })
    removeShape(newShape);
})
squareBtn.addEventListener('click', () => {
    let newShape;
    if(squSide.value === ''){
        newShape = new Square(randomNum(), 'Square');
    }else{
        newShape = new Square(squSide.value, 'Square');
    }
    newShape.div.addEventListener('click', () => {
        changeSpanFeedback(newShape);
    })
    removeShape(newShape);
})
circleBtn.addEventListener('click', () => {
    let newShape;
    if(radius.value === ''){
        newShape = new Circle(randomNum(), 'Circle');
    }else{
        newShape = new Circle(radius.value, 'Circle');
    }
    newShape.div.addEventListener('click', () => {
        changeSpanFeedback(newShape);
    })
    removeShape(newShape);
})
triBtn.addEventListener('click', () => {
    let newShape;
    if(triHeight.value === ''){
        newShape = new Triangle(randomNum(), 'Triangle');
    }else{
        newShape = new Triangle(triHeight.value, 'Triangle');
    }
    
    newShape.div.addEventListener('click', () => {
        changeSpanFeedback(newShape);
    })
    removeShape(newShape);
})

// PROTOTYPE CLASS, METHODS AND SUB-CLASSES
class Shape {
    constructor(width, height, name) {
        this.randomCoord(0, 600);
        this.randomCoord(0, 400);
        this.width = width;
        this.height = height;
        this.name = name;
        this.createShape();
        this.area();
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

    area = () => {
        this.area = parseInt(this.width) * parseInt(this.height);
    }
}

class Rectangle extends Shape {
    constructor(width, height, name) {
        super(width, height, name);
        this.div.className = 'shape rect';
        this.perimeter();
    }

    perimeter = () => {
        this.perimeter = 2 * (parseInt(this.width) + parseInt(this.height));
    }
}

class Square extends Shape {
    constructor(sideLength, name) {
        super(sideLength, sideLength, name);
        this.div.className = 'shape square';
        this.perimeter();
    }

    perimeter = () => {
        this.perimeter = 4 * parseInt(this.width);
    }
}

class Circle extends Shape {
    constructor(radius, name) {
        super(radius*2, radius*2, name);
        this.radius = `${radius}px`;
        this.div.className = 'shape circle';
        this.area();
        this.perimeter();
    }

    area = () => {
        this.area = Math.round(3.14 * (parseInt(this.radius) * parseInt(this.radius)));
    }

    perimeter = () => {
        this.perimeter = 2 * 3.14 * parseInt(this.radius);
    }
}

class Triangle extends Shape {
    constructor(height, name) {
        super(height, height, name);
        this.div.className = 'shape';
        this.div.style.borderBottom = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.area();
        this.perimeter();
    }

    area = () => {
        this.area = 0.5 * (this.height * this.width);
    }

    perimeter = () => {
        let thirdSideSquared = (parseInt(this.height) * parseInt(this.height)) + (parseInt(this.height) * parseInt(this.height));
        let thirdSide = Math.round(Math.sqrt(thirdSideSquared));
        this.perimeter = 2 * parseInt(this.height) + thirdSide;
    }
}