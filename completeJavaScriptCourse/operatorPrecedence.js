//JavaScrips has a precedence in which it handles its operations
const currentYear = 2023;
const ageJonah = currentYear - 1997;
const ageSara = currentYear - 1992;

console.log(currentYear - 1997 > currentYear - 1992);

//using MDN operators, you will see the preceddence in which the operators are carried out. The higher precedence on the table will be carried out

let x, y;
x = y = 12 - 4 - 4; //it will calculate x = y = 4
console.log(x, y);

//Calculating the average of two values

const wrongAverageAge = ageJonah + ageSara / 2; //Js will do the division first. i.s ageSara/2 then add it to ageJonah
const averageAge = (ageJonah + ageSara) / 2; //separating with parenthesis
console.log(ageJonah, ageSara);
console.log(wrongAverageAge, averageAge);
