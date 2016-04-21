var prompt = require('prompt');
var Bus = require('./bus.js');


prompt.start();

var myBus = new Bus('John', 'red', 'full');

myBus.studentEntersBus('Owens', 'M', 'B', 3.5, 14, true, "Let's party");
myBus.studentEntersBus('Roy', 'M', 'C', 2, 2, true, 'Ok');
myBus.studentEntersBus('Ana', 'F', 'A', 1, 1, true, 'Hello');
myBus.studentEntersBus('Jackie', 'F', 'B', 2, 5, true, 'Yeah');


console.log('  ');
console.log(myBus);
console.log('  ');

// var schema = require('./schema.js');
var schema = {
  properties: {
    name: {
      description: "Enter Student's Name ",
      pattern: /^[A-Za-z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    gender: {
      description: 'Gender ',
      pattern: /^[MFmf]+$/,
      message: 'Gender must be M or F.',
      required: true
    },
    grade: {
      description: 'Grade ',
      pattern: /^[AaBbCcDdFf\+\-]+$/,
      message: 'Not a valid Grade',
      required: true
    },
    GPA: {
      pattern: /^[0.0-4.0\.]+$/,
      message: 'GPA must be between 0 - 4.',
      required: true
    },
    detentions: {
      description: 'No of Detentions ',
      pattern: /^[0-9]+$/,
      message: 'Must be numeric.'
    },
    sleepinginclass: {
      description: 'Caught sleeping in the class? ',
      type: 'boolean',
      message: 'Must be T or F',
      required: true
    },
    catchphrase: {
      description: "Student's catch phrase "
    }
  }
};

prompt.get(schema, function(e, r) {
  myBus.studentEntersBus(r.name, r.gender, r.grade, r.GPA, r.detentions, r.sleepinginclass, r.catchphrase);

});
myBus.busChatter();