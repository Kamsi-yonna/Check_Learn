// type conversion is done manually
// Coercion is when Js does this and is usually not visible to us

const inputYear = '1992';
console.log(Number(inputYear), inputYear); //1992 and a string '1992'
console.log(Number(inputYear) + 18); //1992 + 18 

console.log(Number('Jonas')); //converting this will give Nan
console.log(typeof Nan); //Nan is a number type. 

//Operators with coercion and conversion
console.log(String(21), 21)
console.log('100' > 21) //will read 100 > 21 as true
console.log(String(100) > 21) //reads true even though it has been converted into a string
console.log(100 > "that") //100 is not greater than that. WHY SO?
console.log(String(100) > "that") //converted 100 to a string and it gave me false. any reason??
console.log("red" > "blue") //it gave me true. Maybe colors have their values
console.log("sky" > "fry") //it gave me true. How come?
console.log("fry" > "sky") //it gave me false. How come?
console.log("100" * " that")


let n = "1" + 5; //this will be 15 because 1 here is a string and not a number. Concatenation occurs.
n = n - 8; //then this will be 15-2
console.log(typeof n, n);


console.log('red' >= 'red')
console.log(String(100) > "that")
console.log("T" > "t")