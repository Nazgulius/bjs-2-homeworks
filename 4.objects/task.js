function Student(name, gender, age) {
    this.name = name, 
    this.gender = gender, 
    this.age = age, 
    this.marks = []  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) { 
    if (Array.isArray(this.marks)) {
        this.marks.push(...marks);
    }

    return 0;      
}

Student.prototype.getAverage = function () {
    if (!Array.isArray(this.marks) || this.marks.length === 0){
      return 0;
    }    

    let sum = this.marks.reduce((elementOne, elementTwo) => elementOne + elementTwo);

    return Number((sum / this.marks.length).toFixed(0));
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
