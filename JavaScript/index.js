var score = 70;
var passingScore = 70;

if (score >= passingScore) {
    console.log("You passed!");
    } else {
        console.log("You failed!");
        }

        ////----------------------------/
    
var name = ["john Smith", "Marry Gao", "Todd Jordan"];

for (var i = 0; i < name.length; i++) {   
    console.log("Name: " + name(i))
  
}



//////////////////
// In this example, a simple function is created 
// to square a number, which means to multiply the value 
// of a number by itself. The code creates a variable, 
// assigns it a value, and then passes this number to the
//  “square” function, which returns the value of 
//  that number multiplied by itself. Another 
//  variable stores and then displays the number 
//  that is returned by the function. 

function square(x) {
    return x * x;
}

var numToSquare = 2;
var squared = square(numberToSquare);
console.log("The square of " + numToSquare + " is " + squared);


// In this scenario, you’re working on the phone routing 
// system for a small business. When someone 
// calls, they’ll be prompted to enter a number 
// to indicate the reason for their call. 
// The number they enter is stored in a 
// variable called dialedNumber. 
// The output of the code depends on the 
// value of the dialedNumber variable.

// To complete this lab:

// Set the value of dialedNumber to make the 
// output show the office hours of the Mapleton location.

var dialedNumber = 1;
if (dialedNumber === 1){
    console.log("Office Hours: Monday - Friday from 9am-5pm");
    } else if (dialedNumber == 2){
        console.log("Office Hours: Tuesday - Thursday from 8am-4pm")
        }else{
            console.log ("Please enter a valid number.")
            };
            // Set the value of dialedNumber to make the
            // output show the office hours of the
            // Winston location.
            var dialedNumber = 3;
            if (dialedNumber === 3){
                console.log("Office Hours: Monday - Wednesday from 7am-6pm")
                } else if (dialedNumber == 4){
                    console.log("Office Hours: Thursday - Saturday from 8am-5pm")
                    }else{
                        console.log ("Please enter a valid number.")
                        };