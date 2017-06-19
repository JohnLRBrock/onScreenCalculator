function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function multiply(a, b){
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function parentFilter(number) {
  switch(number) {
    case 69:
      return 'nice';
      break;
    case -69:
      return "-nice";
      break;
    case 37047734:
      return "Please, this place isn't all that bad";
      break;
    case 5318008:
      return "How mature";
      break;
    default:
      return number;
      break;
  }
}

function calculate() {
  var str =  document.getElementById("output").innerHTML;
  var intArr = [];
  var operArr = [];
  var numbers = "1234567890";
  var operators = '+-*/';
  for (var  i = 0; i < str.length; i++){
    if (i === 0) {
      // isn't a number
      if (!numbers.includes(str[0]) && str[0] != '-') {
        return 'Syntax Error: First character isn\'t a number';
      }
      // is a number
      else {
        intArr.push(str[i]);
      }
    }
    // current character isn't a number
    else if (!numbers.includes(str[i])) {
      operArr.push(str[i]);
    }
    // previous character was a number or was the first character in case of negative numbers
    else if (numbers.includes(str[i - 1]) || i - 1 === 0) {
      // add current character to last number in array
      intArr[intArr.length - 1] += str[i]; 
    }
    // start of new number chain
    else {
      intArr.push(str[i]);
    }
  }

  // not two numbers
  if (intArr.length != 2) {
    return 'Syntax error: more than or less than two numbers';
  }
  // not one operator
  if (operArr.length != 1) {
    return 'Syntax error: more than or less than one operator';
  }
  switch (operArr[0]) {
    case '+':
      return parentFilter(add(intArr[0], intArr[1]));
      break;
    case '-':
      return parentFilter(subtract(intArr[0], intArr[1]));
      break;
    case '*':
      return parentFilter(multiply(intArr[0], intArr[1]));
      break;
    case '/':
      return parentFilter(divide(intArr[0], intArr[1]));
      break;
    default:
      return 'Syntax error: unknown operator';
  }
}

document.querySelector('#one').onclick = function() {
  document.getElementById("output").innerHTML+= '1';
}
document.querySelector('#two').onclick = function() {
  document.getElementById("output").innerHTML+= '2';
}
document.querySelector('#three').onclick = function() {
  document.getElementById("output").innerHTML+= '3';
}
document.querySelector('#plus').onclick = function() {
  document.getElementById("output").innerHTML+= '+';
}
document.querySelector('#four').onclick = function() {
  document.getElementById("output").innerHTML+= '4';
}
document.querySelector('#five').onclick = function() {
  document.getElementById("output").innerHTML+= '5';
}
document.querySelector('#six').onclick = function() {
  document.getElementById("output").innerHTML+= '6';
}
document.querySelector('#minus').onclick = function() {
  document.getElementById("output").innerHTML+= '-';
}
document.querySelector('#seven').onclick = function() {
  document.getElementById("output").innerHTML+= '7';
}
document.querySelector('#eight').onclick = function() {
  document.getElementById("output").innerHTML+= '8';
}
document.querySelector('#nine').onclick = function() {
  document.getElementById("output").innerHTML+= '9';
}
document.querySelector('#multiply').onclick = function() {
  document.getElementById("output").innerHTML+= '*';
}
document.querySelector('#zero').onclick = function() {
  document.getElementById("output").innerHTML+= '0';
}
document.querySelector('#clear').onclick = function() {
  document.getElementById("output").innerHTML= '';
}
document.querySelector('#equal').onclick = function() {
  alert(calculate());
  document.getElementById("output").innerHTML= '';
}
document.querySelector('#divide').onclick = function() {
  document.getElementById("output").innerHTML+= '/'
}