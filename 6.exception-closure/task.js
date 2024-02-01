function parseCount (value) {
    let num = Number.parseFloat(value);       
    if (Number.isNaN(num)) {
        throw new Error("Невалидное значение");        
    } else {
        return num;
    } 
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch (error) {
        console.log("Невалидное значение");
        return error;
    } 
}

class Triangle {
    constructor (sideA, sideB, sideC) {
        this.sideA = sideA; 
        this.sideB = sideB;
        this.sideC = sideC;

        if (((sideA + sideB) < sideC) || ((sideA + sideC) < sideB) || ((sideC + sideB) < sideA)) {
           throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    get perimeter () {
        return Number((this.sideA + this.sideB + this.sideC).toFixed(3));    
    }

    get area () {
        let p = this.perimeter / 2;
       // let s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)); 
        return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
    }
}

function getTriangle (sideA, sideB, sideC) {
    try {  
        return new Triangle (sideA, sideB, sideC);
    } catch (error) {
        return {
            get area () {return "Ошибка! Треугольник не существует"},
            get perimeter () {return "Ошибка! Треугольник не существует"}
        } 
    }
}
