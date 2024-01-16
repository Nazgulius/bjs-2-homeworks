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
  if (this.marks.length === 0){
    
  }

  this.marks = [...marks];
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0){
    return 0;
  }

  let sum = this.marks.reduce((elementOne, elementTwo) => elementOne + elementTwo);
  let avg = Number((sum / this.marks.length).toFixed(0));

  return avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Вася", "мужской", 22);
student1.setSubject("Algebra");
student1.addMarks(4, 5, 4, 5);
console.log(student1);