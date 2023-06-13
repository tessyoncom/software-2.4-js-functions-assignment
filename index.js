/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

function fizzBuzz(number){
    if (number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    }else if (number % 3 == 0){
        console.log("Fizz");
    }else if (number % 5 == 0){
        console.log("Buzz");
    }else{
        console.log("Pop");
    }
}



/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let result = averager(prices);
console.log(result);

function averager(prices){
    let sumPrices = 0;
    for (price of prices){
        sumPrices += price;
    }
    return sumPrices / prices.length
}


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

function celToFah(celcius){
    return celcius*1.8 + 32;
}

function celToKel(celcius){
    return celcius + 273.15;
}


console.log(`37.5 Celcius is ${celToFah(37.5)} Fahreheit`)
console.log(`-40 Celcius is ${celToFah(-40)} Fahreheit`)
console.log(`0 Celcius is ${celToFah(0)} Fahreheit`)
console.log(`100 Celcius is ${celToFah(100)} Fahreheit`)
console.log(`173.13 Celcius is ${celToKel(173.13)} Kelvin`)
console.log(`-13 Celcius is ${celToKel(-13)} Kelvin`)


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(number,power){
    numberHold = number
    for (let count = 1; count < power; count++){
       numberHold *= number;  
    }
    return numberHold;  
}

console.log(pow(12,3))

