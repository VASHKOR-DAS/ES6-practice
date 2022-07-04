//akadhik array ke jodi akta array te convert korte hoy, tobe string er moto kore + korte hoy ar age 3ta ... die hoy
//spread operator

const age1 = [12, 14, 16, 15];
const age2 = [11, 10, 5, 15];
const allAges = [...age1, ...age2];
console.log(allAges);

//single array max ber kotte chaile
const max = Math.max(...age1);
console.log(max);