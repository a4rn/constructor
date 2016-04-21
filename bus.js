var Student = require("./student.js");

function Bus(driverName, color, gas) {

  this.studentsOnTheBus = [];
  this.driverName = driverName;
  this.color = color;
  this.gas = gas;

  this.studentEntersBus = function(n, g, gr, GPA, d, s, c) {
    this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));

  }

  this.busChatter = function() {

  }

  this.removeStudent = function(name) {
    for (var i = 0; i < this.studentsOnTheBus.length; i++) {
      console.log(this.studentsOnTheBus[i].name);
      if (this.studentsOnTheBus[i].name == name) {
        delete this.studentsOnTheBus[i];
        break;
      }
    }
  }
}
module.exports = Bus;