/*

var mark = {
  fullName: 'Mark Jones',
  mass: 95,
  height: 192,
  calcBMI: function()
  {
    return this.bmi = this.mass / (this.height * this.height);
  }
};

var john = {
  fullName: "John Smith",
  mass: 95,
  height: 192,
  calcBMI: function()
  {
    return this.bmi = this.mass / (this.height * this.height);
  }
};

if (mark.calcBMI() > john.calcBMI())
{
console.log ("Mark's BMI is greater than John's");
} else if (mark.calcBMI() < john.calcBMI())
{
  console.log ("John's BMI is greater than Mark's");
} else {
  console.log("Both John and Mark have the same BMI");
}
*/

//CODING CHALLENGE 5

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i=0; i<this.bills.length; i++)
    {
//Determine percentage based on tipping rates
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      }
      else if (bill >= 50 && bill <=200)
      {
        percentage = .15;
      }
      else {
        percentage = .1;
      }
//Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }

}

john.calcTips();
console.log(john);

//Extra CHALLENGE

var mark = {
  fullName: 'Mark Jones',
  bills: [77, 0, 0, 45],
  }

function calcTips () {
    mark.tips = [];
    mark.finalValues = [];

    for (var i=0; i<mark.bills.length; i++)
    {
      var percentage;
      var bill = mark.bills[i];

      if (bill < 100)
      {
        percentage = .2;
      } else if (bill >=100 && bill <=300)
      {
        percentage = .1;
      } else {
        percentage = .25;
      }
        mark.tips[i] = bill * percentage;
        mark.finalValues[i] = bill + mark.tips[i];

      }

    }
calcTips();
console.log(mark);

var tipSumMark = mark.tips.reduce(function (a,b){
  return a+b;
})

var tipSumJohn = john.tips.reduce(function (a,b){
  return a+b;
})

markAvg = tipSumMark/mark.tips.length;
johnAvg = tipSumMark/john.tips.length;

if  (markAvg>johnAvg) {
  console.log("Mark/'s family tipped higher with an average of " + markAvg + " vs John's family which had an average of " + johnAvg);
} else
console.log("John/'s family tipped higher with an average of " + johnAvg + " vs Mark's family which had an average of " + markAvg);


//console.log (mark);
