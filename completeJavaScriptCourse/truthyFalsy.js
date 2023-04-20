// falsy values are values that will become false when you try to covnert them into a boolean They are - 0, "" / '' , Nan, Null and undefined

console.log(Boolean(0)); //FALSE
console.log(Boolean(undefined)); //FALSE
console.log(Boolean({})); //TRUE
console.log(Boolean("")); //FALSE
console.log(Boolean("Kamsiyonna")); //TRUE
console.log(Boolean(0)); //FALSE


console.log(Boolean(String(0))); //TRUE
//to convert the falsy value 0into a boolean, I first converted it into a string.

console.log(Boolean(Number(0))); //FALSE //WHY???

// Javascript does type coercion behind the scenes. it does this when using logical operations and in a logical context. like an ifelse statement

let money = 0;
console.log(money);// this is 0 which is a false value and so the boolean will be false
if (money) {
    console.log("Go all out bro. YOLO")
} else {
    console.log('Get a job maybe')
}
//if there is money, tell me to go all out if NOT/FALSE, then tell me to get a job. The money = 0 is a false value

//With undefined
let height;
console.log(height);
if (height) {
    console.log('A very well defined height')
} else {
    console.log('Sadly the height is undefined')
}