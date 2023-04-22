const firstName = 'Kamsiyonna';
const job = 'Web Developer';
const birthYear = '1998';
const year = '2023'

const Kamsi = "My name is" + " " + firstName + ". I am a professional" + " " + job + ". I  was born in" + " " + birthYear + " " + "and so I am" + " " + (year - birthYear) + " " + "years old.";

console.log(Kamsi);

//TEMPLATE LITERALS using backticks ``
const kamsiNew = `My name is ${firstName}. I am a professional ${job}. I  was born in ${birthYear} and so I am ${year - birthYear} years old.`

console.log(kamsiNew)


//USING TEMP LITE FOR MULTILINE STRINGS
//NORMALLY YOU WOULD DO THIS
console.log(' this is one line\n\ this is another line\n\ this is another');

//NOW AN EASIER WAY TO DO IT 
console.log(`this is one line
this ie another
finally the last.`)