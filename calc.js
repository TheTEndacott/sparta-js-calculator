
// Which calculator
var whichCalc = prompt("Would you like to use the: \n(a)dvanced[+ - * / power sq-root] \n(b)asic calculator[+ - * /] \nB(M)I calculator?");

if(whichCalc.toLowerCase() == "b" || whichCalc.toLowerCase() == "basic" ) {
  basic();
} else if(whichCalc.toLowerCase() == "a" || whichCalc.toLowerCase() == "adv" || whichCalc.toLowerCase() == "advanced") {
  advanced();
} else if(whichCalc.toLowerCase() == "m" || whichCalc.toLowerCase() == "bmi") {
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

  if(measure.toLowerCase() == "m" || measure.toLowerCase() == "metric") {
    var heightMet = parseInt(prompt("What is your weight in kilograms?"));
    var weightMet = parseInt(prompt("What is your height in centimetres?"));
    alert("Your BMI is " + (1000*heightMet)/(Math.pow(heightMet, 2)));
  } else if(measure.toLowerCase() == "i" || measure.toLowerCase() == "imperial") {
    var heightImp = parseInt(prompt("What is your weight in pounds?"));
    var weightImp = parseInt(prompt("What is your height in inches?"));
    alert("Your BMI is " + (703*weight)/(Math.pow(height, 2)));
  }
}