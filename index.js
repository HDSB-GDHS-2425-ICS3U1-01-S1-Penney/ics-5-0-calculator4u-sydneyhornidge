let x;
let y;
let operator;


x = parseFloat(prompt("First number:  "));
if (isNaN(x)) {
    console.log("Error! Enter valid number"); 
}
else {
    operator = prompt("Operation:  ");
    if (operator != "+" && operator != "-" && operator != "x" && operator != "*" && operator != "/") {
        console.log("Invalid operation! Try again!");
    }
    else {
        y = parseFloat(prompt("Second number:  "));
        if (isNaN(y)) {
            console.log("Error! Enter valid number"); 
         }
     }
}


calculate(x, operator, y); 

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
    
    console.log("Answer:  " + result);

}