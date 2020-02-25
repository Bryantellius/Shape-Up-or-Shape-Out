let drawingSurface = document.getElementById('drawingSurface');

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

let addNameSpan = (object) => {
    // feedbackName.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.name}`;
    feedbackName.appendChild(newSpan);
}
let addWidthSpan = (object) => {
    // feedbackWidth.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.width}px`;
    feedbackWidth.appendChild(newSpan);
}
let addHeightSpan = (object) => {
    // feedbackHeight.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.height}px`;
    feedbackHeight.appendChild(newSpan);
}
let addRadiusSpan = (object) => {
    // feedbackRadius.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.radius}px`;
    console.log('test');
    feedbackRadius.appendChild(newSpan);
}
let addAreaSpan = (object) => {
    // feedbackArea.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.area}px`;
    feedbackArea.appendChild(newSpan);
}
let addPerimeterSpan = (object) => {
    // feedbackPerimeter.removeChild();
    let newSpan = document.createElement('span');
    newSpan.textContent = ` ${object.perimeter}px`;
    feedbackPerimeter.appendChild(newSpan);
}

rectBtn.addEventListener('click', () => {
    let newShape = new Rectangle(rectWidth.value, rectHeight.value);
    newShape.div.addEventListener('click', () => {
        addNameSpan(newShape);
        addWidthSpan(newShape);
        addHeightSpan(newShape);
        addAreaSpan(newShape);
        addPerimeterSpan(newShape);
    })
})
squareBtn.addEventListener('click', () => {
    let newShape = new Square(squSide.value);
    newShape.div.addEventListener('click', () => {
        addNameSpan(newShape);
        addWidthSpan(newShape);
        addHeightSpan(newShape);
        addAreaSpan(newShape);
        addPerimeterSpan(newShape);
    })
})
circleBtn.addEventListener('click', () => {
    let newShape = new Circle(radius.value);
    newShape.div.addEventListener('click', () => {
        addNameSpan(newShape);
        addRadiusSpan(newShape);
        addAreaSpan(newShape);
        addPerimeterSpan(newShape);
    })
})
triBtn.addEventListener('click', () => {
    let newShape = new Triangle(triHeight.value);
    newShape.div.addEventListener('click', () => {
        addNameSpan(newShape);
        addWidthSpan(newShape);
        addHeightSpan(newShape);
        addAreaSpan(newShape);
        addPerimeterSpan(newShape);
    })
})

class Shape {
    constructor(width, height) {
        this.randomCoord(0, 600);
        this.randomCoord(0, 400);
        this.width = width;
        this.height = height;
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
    constructor(width, height) {
        super(width, height);
        this.div.className = 'shape rect';
        this.perimeter();
    }

    perimeter = () => {
        this.perimeter = 2 * (parseInt(this.width) + parseInt(this.height));
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.className = 'shape square';
        this.perimeter();
    }

    perimeter = () => {
        this.perimeter = 4 * parseInt(this.width);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.div.className = 'shape circle';
        this.area();
        this.perimeter();
    }

    area = () => {
        this.area = 3.14 * (parseInt(this.radius) * parseInt(this.radius));
    }

    perimeter = () => {
        this.perimeter = 2 * 3.14 * parseInt(this.radius);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.className = 'shape';
        this.div.style.borderBottom = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.area();
    }

    area = () => {
        this.area = 0.5 * (this.height * this.width);
    }
}