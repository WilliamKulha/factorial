//Take user input and parse it.
function gatherAndParse() {
  let number = parseInt($('#user_factorial').val(), 10);
  return number;
}

errorMessage = 'Please make sure that you enter an integer (whole number) that is not negative'

//Check to make sure that input is not a negative number and is an integer. If either are true, display error message.

//Take user inputted number and create an array of the number and each integer below it, then reduce this array by multiplying all the numbers.
function factorial(numberToMakeFactorial) {
  if (numberToMakeFactorial < 0 || Number.isInteger(numberToMakeFactorial) === false) {
    $('#error').append(errorMessage);
  } else {
    $('#error').empty();
    let factorialArray = []
    for (let currentNum = 1 ; currentNum <= numberToMakeFactorial; currentNum += 1) {
      factorialArray.push(currentNum);
    }
    let output = factorialArray.reduce(function(total, currentNum) {
      return total * currentNum;
    },)
    $('#output_here').text(output);
  }
}
//take number and add the number and all numbers after itself into an array.


//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userFactorial = gatherAndParse();
    let output = factorial(userFactorial);
    console.log(output);

  });
});
