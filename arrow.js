const doubleIt = function (num) { //ai const k bole = function expression, doubleIt k bole = function declaration 
    return num * 2;
}
const result = doubleIt(5);
//console.log(result);


//ES6 arrow function
const doubleIt2 = num => num * 2; // => er pore holo return value

//akadhik parameter thakle
const add = (x, y) => x + y;
const result2 = add(50, 70);
//console.log(result2);

//multiLine arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result3 = doMath(7, 5);
console.log(result3);