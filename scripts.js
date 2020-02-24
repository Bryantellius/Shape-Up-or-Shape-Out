let rectBtn = document.getElementById('rectBtn');
let squareBtn = document.getElementById('squareBtn');
let circleBtn = document.getElementById('circleBtn');
let triBtn = document.getElementById('triBtn');
rectBtn.addEventListener('click', ()=>{
    console.log(`rect`);
})
squareBtn.addEventListener('click', ()=>{
    console.log(`square`);
})
circleBtn.addEventListener('click', ()=>{
    console.log(`circle`);
})
triBtn.addEventListener('click', ()=>{
    console.log(`tri`);
})

class Shape{
    constructor(){

    }
}

class Rectangle{
    constructor(width, height){

    }
}

class Square extends Rectangle{
    constructor(sideLength){
        
    }
}

class Circle{
    constructor(radius){

    }
}

class Triangle{
    constructor(height){

    }
}