'strict mode'

//AN ARROW FUNCTION IS A FORM OF FUNCTION EXPRESSION WHICH IS EASIER TO WRITE
// const calcAge1 = function (birthYear) {
//     const age1 = 2023 - birthYear
//     return age1;
// }
// const age1 = calcAge1(1998);
// console.log(age1);

//ARROW FUNCTION
const calcAge3 = birthYear => 2023 - birthYear;
const age1 = calcAge3(1998);
console.log(age1);
