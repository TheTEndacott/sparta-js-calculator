
// Which calculator
var whichCalc = prompt("Would you like to use the: \n(a)dvanced[+ - * / power sq-root] \n(b)asic calculator[+ - * /]?");

// Basic calculator
function basic() {
	var firstNum = parseFloat(prompt("What is your first number?"));
  var action = prompt("What action would you like to take? (+)addition (-)subtraction (*)multiplication (/)division");
	var secondNum = parseFloat(prompt("What is your second number?"));
	switch(action) {
		case "+":
  		alert(firstNum+secondNum);
  		break;
		case "-":
  		alert(firstNum-secondNum);
  		break;
		case "*":
  		alert(firstNum*secondNum);
  		break;
		case "/":
  		alert(firstNum/secondNum);
  		break;
	}
}

// Advanced Calculator
function advanced() {
  var firstNum = parseInt(prompt("What is your first number?"));
  var action = prompt("What action would you like to take? (+)addition (-)subtraction (*)multiplication (/)division (p)power of (s)square root");
	var secondNum = parseFloat(prompt("What is your second number? \nLeave blank for a square root calculation"));

  switch(action) {
    case "+":
  		alert(firstNum+secondNum);
  		break;
		case "-":
  		alert(firstNum-secondNum);
  		break;
		case "*":
  		alert(firstNum*secondNum);
  		break;
		case "/":
  		alert(firstNum/secondNum);
  		break;
    case "p":
      alert(firstNum**secondNum);
      break;
    case "s":
      alert(sqrt("firstNum"));
      break;
  }
}

// Which calculator
if(whichCalc == "b" || whichCalc == "basic") {
  basic();
} else if(whichCalc == "a" || whichCalc == "adv" || whichCalc == "advanced") {
  advanced();
}