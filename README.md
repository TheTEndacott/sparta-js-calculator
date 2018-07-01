# sparta-js-calculator

## Calculators

### Basic  
The initial calculator was a basic one to include addition, subtraction, multiplication and division. From the basic JavaScript learnt this wasn't too difficult to achieve.

### Advanced  
The advanced calculator required the addition of *power of* and *square root* functions. Following the basic calculator and researching the operators for these calculations made this reasonably achievable.

### BMI  
This proved more difficult finding a calculation that wasn't too long which I found with a *conversion factor* of 703. I then followed the *if/else if* already in-place to allow for metric and imperial.

### Trip  
I attempted the trip calculations but these proved difficult and even in research became confused with the conversion and equations I may or may not need to use.  
This is something I would like to get working in a future sprint and as such have left the code commented out as it is a *work in progress*.

----------

## Brief
**Timings**  
45 - 90 minutes

**Tasks**  
Your task is to write a command line calculator application that has two settings, (b)asic and (a)dvanced.
- First you will need to ask the user for which calculator they want to use
- Then you will need to ask the user for the numbers to operate on.
- Then you need to work out what to do with the numbers, depending on what operation they choose.

*Basic:*
- Additon
- Multiplication
- Division
- Subtraction

*Advanced:*
- Power
- Square root

**Setup**  
There is no starter code for this app.

**Hints**  
Get user input - var hello = prompt("What is your name")
Output to console - console.log(hello)

Bonus task - Add some additional functionality
Add the following calculator feature into your app.

**BMI Calculator**  
Calculate the BMI when given the height and weight - the user should be able to choose between the imperial and the metric system
- BMI Link 1
- BMI Link 1

**SUPER Bonus task**  
Add the following calculator feature into your app.
Trip Calculator
This feature asks the user for four inputs; distance, fuel efficiency (mpg), cost per gallon, speed and it will give you the time and price of your journey.
Example output: "Your trip will take 3.5 hours and cost £255.33.""
Note: For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph. Yes this gets silly at high speed where mpg goes to zero or gets negative - how will you handle this?)