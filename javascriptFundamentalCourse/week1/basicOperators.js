// const ageJonah = 2023 - 1997;
// const ageSara = 2023 - 1992;
// console.log(ageJonah);
// console.log(ageSara);
// console.log(ageSara, ageJonah);

//a better way to write this may be to assign the 2023 to a variable
const currentYear = 2023;

//MATH OPERATORS
const ageJonah = currentYear - 1997;
const ageSara = currentYear - 1992;
console.log(ageJonah);
console.log(ageSara);
console.log(ageSara, ageJonah);

//other math operations
console.log(ageJonah * ageSara, ageJonah / ageSara);
console.log(ageJonah + ageSara, ageJonah - ageSara);

//CONCATENATION
const firstName = 'Kamsi';
const lastName = 'Yonna';

console.log(firstName + lastName);
console.log(firstName + ' ' + lastName); //will space the two


//ASSIGNMENT OPERATORS
//= is an operator and the plus operator is carried out first and then the value is assigned to x
let x = 10 + 5; //ans=15
x += 10; //x = x + 10. The initial x will be 15 ans=25
x *= 2; //x = x * 2. The initial x will be 25 ans=50
x++;  //x + 1. The initial x will be 50 ans=51
x--  //x + 1. The initial x will be 50 ans=51
console.log(x)

//COMPARISON OPERATOR
//<, >, <=, >=
console.log(ageJonah > ageSara);
console.log(ageSara > ageJonah);
console.log(ageSara >= 32);

const fullAge = ageSara >= 32; //fullAge stores the boolean value. 
