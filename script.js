let sum = 0;
function oddoreven(num,sum)
{
    var splitnumber = Array.from(num); //put every digit in array
    var splitnumber = splitnumber.map(str => Number(str)); //number for calculations
    for (i of splitnumber) {
        sum += i;
    }
    if (sum % 2 == 0){
        return "Sum of your number's digits are even!"
    }
    else if (sum % 2 != 0){
        return "Sum of your number's digits are odd!"
    }
    else{
        return "Invalid value"
    }
}

var num = window.prompt("Enter your number: ");
document.write(oddoreven(num,sum));

