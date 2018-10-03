//Back-end Logic
//Assign the error message to a variable so it's easier to use.
errorMessage = 'Please make sure that you enter an integer (whole number) that is not negative'
//Take user input and parse it.
function gatherAndParse() {
  let number = parseInt($('#user_factorial').val(), 10);
  return number;
}
//Take user inputted number, make sure it isn't negative or a non-integer, then use a for loop to create an array of all the numbers to be used in the factorial calculation
//and then reduce the array they are pushed to by multiplying them thus calculating the factorial.
function factorial(numberToMakeFactorial) {
  if (numberToMakeFactorial < 0 || Number.isInteger(numberToMakeFactorial) === false) {
    $('#error').text(errorMessage);
  } else {
    $('#error').empty();
    let factorialArray = []
    for (let currentNum = 1; currentNum <= numberToMakeFactorial; currentNum += 1) {
      factorialArray.push(currentNum);
    }
    let output = factorialArray.reduce(function(total, currentNum) {
      return total * currentNum;
    },)
    $('#output_here').text(output);
  }
}

//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userFactorial = gatherAndParse();
    factorial(userFactorial);
  });
});
