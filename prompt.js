function addition(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    let sum = Number(num1) + Number(num2);
    console.log(`The sum of these two numbers are ${sum} .`);
}

function subtraction(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    let diff = Number(num1) - Number(num2);
    console.log(`The difference of ${num1} and ${num2} is ${diff} .`);
}

function multiplication(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    let product = Number(num1) * Number(num2);
    console.log(`The product of ${num1} and ${num2} is ${product} .`);
}

function division(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    let quotient = Number(num1) / Number(num2);
    console.log(`The quotient of ${num1} divided by ${num2} is ${quotient} .`);
}

function exponent(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    console.log(`${num1} to the ${num2}th power is ${Math.pow(Number(num1), Number(num2))} .`);
}

function modulus(){
    let num1 = prompt("Please input one integer: ");
    let num2 = prompt("Please input another integer: ");
    let remainder = Number(num1) % Number(num2);
    console.log(`The remainder of ${num1} divided by ${num2} is ${remainder} .`);
}