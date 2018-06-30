var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180 , 42], //The bill totals before tips
//a method that calculates the what tip amounts should be

  calcTips: function(){
    this.tips = []; //John's tip amount for a given bill
    this.finalValues = []; //John's final values of his bills including tips

    for (var i = 0; i < this.bills.length; i++) //a for loop to determine bills array position that we're calculating
          {
            var bill = this.bills[i]; // shortening this.bills[i] to bills
            var percentage;

              if (bill < 50)
               {
              percentage = .2;
                }

              else if (bill >= 50 && bill < 200)
               {
                percentage = .15;
                }

              else
               {
                 percentage = .1;
                }

                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
      }

}

//Mark's family

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45], //The bill totals before tips
//a method that calculates the what tip amounts should be

  calcTips: function(){
    this.tips = []; //Mark's tip amount for a given bill
    this.finalValues = []; //John's final values of his bills including tips

    for (var i = 0; i < this.bills.length; i++) //a for loop to determine bills array position that we're calculating
          {
            var bill = this.bills[i]; // shortening this.bills[i] to bills
            var percentage;

              if (bill < 100)
               {
              percentage = .2;
                }

              else if (bill >= 100 && bill < 300)
               {
                percentage = .10;
                }

              else
               {
                 percentage = .25;
                }

                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
      }

}

function calcAvg(tips)
{
  var sum = 0;
  for (var i = 0; i<tips.length; i++){
    sum += tips[i];
  }
  return sum / tips.length;
}
//Do all the calculations
john.calcTips();
mark.calcTips();

//Calculate average
john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
  console.log (john.fullName + "\'s family pays the higher tips with an average of " + john.average);
} else {
  console.log (mark.fullName + "\'s family pays the higher tips with an average of " + mark.average);
}
