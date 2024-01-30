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
        let num = parseCount(value);
        if (num) {
            return num;
        }
               
    } catch (error) {
        console.log(error);
    } 
}

