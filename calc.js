
// Which calculator
var whichCalc = prompt("Would you like to use the: \n(a)dvanced[+ - * / power sq-root] \n(b)asic calculator[+ - * /] \nB(M)I calculator?");

if(whichCalc == "b" || whichCalc == "basic") {
  basic();
} else if(whichCalc == "a" || whichCalc == "adv" || whichCalc == "advanced") {
  advanced();
} else if(whichCalc == "m" || whichCalc == "bmi") {
  bmi();
}

// Basic calculator
function basic() {
	var firstNum = parseFloat(prompt("What is your first number?"));
  var action = prompt("What action would you like to take? \n(+)addition (-)subtraction (*)multiplication (/)division");
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
  var action = prompt("What action would you like to take? \n(+)addition (-)subtraction (*)multiplication (/)division (p)power of (s)square root");
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
      alert(Math.pow(firstNum, secondNum));
      break;
    case "s":
      alert(Math.sqrt(firstNum));
      break;
  }
}

//BMI Calculator
function bmi() {
  var measure = prompt("Would you like to use (m)etric or (i)mperial measurements?");
  var heightImp = parseInt(prompt("Enter your height in inches"));
  var weightImp = parseInt(prompt("Enter your weight in pounds"));
  
  alert("Your BMI is " + (703*weight)/(Math.pow(height, 2)));
}









