
//For Loop

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'Successful'];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
*/

// While Loop

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'Successful'];
var i=0;
while(i < john.length)
{
  console.log(john[i]);
  i++;
}
*/

//Continue and Break Statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'Successful'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
*/

var john = ['John', 'Smith', 1990, 'designer', false, 'Successful'];
for (var i = john.length-1; i>=0; i--) {
  console.log(john[i]);
}
