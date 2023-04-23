const age = 23
age >= 18 ? console.log('I love juice 🧃') : console.log('I like to drink water')


//TRANSLATION
if (age >= 18) {
    console.log('I love juice 🧃')
} else {
    console.log('I like to drink water')
}

//In short form
const drink = age >= 18 ? 'red wine' : 'fresh water';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'red winezz'
} else {
    drink2 = 'fresh waterzzz'
}
console.log(drink2)

// Instead of this, console.log(drink2), we can also say:
console.log(`I like to drink ${drink2}`)
