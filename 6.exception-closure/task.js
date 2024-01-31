function parseCount (value) {
    let num = Number.parseFloat(value);       
    if (isNaN(num)) {
        throw new Error("Невалидное значение");        
    } else {
        return num;
    } 
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    } 
}

//(sideA, sideB, sideC)

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
        return sideA + sideB + sideC;    
    }

    get area () {
        let p = 1/2 * (sideA + sideB + sideC);
        let s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)); 
        return s;
    }
}

function getTriangle (sideA, sideB, sideC) {
    return 
}