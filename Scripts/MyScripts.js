/*Multiples print fizz, buzz, or fizzbuzz*/
function fizzBuzz() {
    //Asks for user to input a range of two numbers
    var firstNum = Number(document.getElementById("fbNumOne").value);
    var secondNum = Number(document.getElementById("fbNumTwo").value);
    //Gets the the results of the for loop
    var result = "";
    //The inputs are passed through and cycles through the loop to find multiples of the firt and second numbers that were input
    for (var i = firstNum; i <= secondNum; i++) {
        if (i % firstNum == 0 && i % secondNum == 0) {
            if (secondNum != i) {
                result += "fizzbuzz, ";
            }
            else {
                result += "fizzbuzz, ";
            }
        }
        else if (i % firstNum == 0) {
            if (secondNum != i) {
                result += "fizz, ";
            }
            else {
                result += "fizz, ";
            }
        }
        else if (i % secondNum == 0) {
            if (secondNum != i) {
                result += "buzz, ";
            }

            else {
                result += "buzz, ";
            }
        }
        else {
            if (secondNum != i) {
                result += i + ", ";
            }
            else {
                result += i;
            }

        }
        //Shows the results of the number values 
        document.getElementById("fbResult").innerHTML = result;
    }

}