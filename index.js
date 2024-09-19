// NAME: SYDNEY HORNIDGE
// DATE: SEPTEMBER 18

// Declared variables

let x;
let y;
let operator;

// Console text to guide the user

console.log("-- Welcome to the Calculator! --")
console.log("Please enter the two numbers with the operation you wish to perform")

// Prompted user for numbers and an operation
// Added Error Handling using if/else if/else Control Flow to stop the program if the operation is not valid

x = parseFloat(prompt("Please Insert First number:  "));
if (isNaN(x)) {
    console.log("Error! Enter valid number"); 
}
else {
    operator = prompt("Please Insert Operation:  ");
    if (operator != "+" && operator != "-" && operator != "x" && operator != "*" && operator != "/") {
        console.log("Invalid operation! Try again!");
    }
    else {
        y = parseFloat(prompt("Please Insert Second number:  "));
        if (isNaN(y)) {
            console.log("Error! Enter valid number"); 
         }
     }
}

// Created Calculate Function

calculate(x, operator, y); 

// Added Calculate Function which can be called
// Uses if/else if/else Control Flow to perform valid calculations, but stops if the operation is invalid

function calculate(x, operator, y) {
    let result;
   
    if (operator == "+") {
        result = x + y;
    }
    else if (operator == "-") {
        result = x - y;
    }
    else if (operator == "x" || operator == "*") {
        result = x * y;
    }
    else if (operator == "/") {
        result = x / y;
    }
    else {
        result = ("Invalid operation! Try again!");
    }
    
    console.log("The answer is:  " + result);

}

// Ending message

console.log("Thank you for using the calculator!")