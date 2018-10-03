//Back-end Logic
//Assign the error message to a variable so it's easier to use.
errorMessage = 'Please make sure that you enter an integer (whole number) that is not negative'
//Take user input and parse it.
function gatherAndParse() {
  let number = parseInt($('#user_factorial').val(), 10);
  return number;
}

//Define a recursive function to find an integers factorial.
function factorial(numberToMakeFactorial) {
  if (numberToMakeFactorial === 1) return 1;
   return numberToMakeFactorial * factorial(numberToMakeFactorial -1);
   console.log(numberToMakeFactorial);
}

//Define a function to check whether the user's inputted number is negative, 0/1, or actually a number which we find
//the factorial of.
function checkNumbers(numberToCheck) {
  if (numberToCheck < 0 || Number.isInteger(numberToCheck) === false) {
    $('#error').text(errorMessage);
  } else if (numberToCheck === 1 || numberToCheck === 0) {
    $('#error').empty();
    let output = 1;
    $('#output_here').text(output)
  } else {
    $('#error').empty();
    let output = factorial(numberToCheck);
    $('#output_here').text(output);
  }
}

//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userFactorial = gatherAndParse();
    checkNumbers(userFactorial);
  });
});
