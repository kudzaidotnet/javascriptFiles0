//object literal
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  job: 'teacher',
  isMarried: false;
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job ='designer';
john['isMarried'] = true;

console.log(john);

//new Object syntax
var jane = new Object();
jane.firstname = 'Jane';
jane.birthYear = 1983;
jane['lastName'] = 'Smith';
console.log(jane);
*/



/**********************
*Objects and methods
*/

//Object methods.  An object can hold different types of data.  We can add functions to object whicha are called methods
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1980,
  job: 'teacher',
  isMarried: false,
  calcAge: function()
  {
    this.age = 2018-this.birthYear;
  }

};

john.calcAge();
console.log(john); */

//Coding Challenge
/* Mark and John are comparing their BMI
BMI = mass / (height * height)

NOte: height in meters and mass in KG

1) Store Mark and John's mass and height in variable
2) Cal both their BMIs
3) Create a boolean var containing info about whether mark has a higher BMI than john4.Pring a string to the console with var from step 3.
 */

/*
var markMass = 85;
var markHeight = 183;
var johnMass = 90;
var johnHeight = 184;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var BMITest = markMass > johnMass;

console.log("it is " + BMITest + " that Marks BMI is greater than Johns");

*
