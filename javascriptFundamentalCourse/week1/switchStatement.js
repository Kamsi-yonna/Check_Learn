//an alternative way to write complicated if/else statement when comparing one value to multiple options


// const day = 'thursday';
//if we change the day to any case listed above, we would get the console log for that case


//all these cases represent scenarios/else if and the default case represents else
// switch (day) {
//     case 'monday': //this means if day === monday then execute this
//         console.log('Plan my course structure');
//         console.log('Go to the gym to train these biceps');
//         console.log('Ball out');
//         break;
//     case 'tuesday':
//         console.log('Watch some movies');
//         console.log('Text bae');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Run')
//         break;
//     case 'friday':
//         console.log('Thank God its Friday')
//         break;
//     case 'saturday':
//     case 'Sunday':
//         console('Enjoy the Weekend')
//         break;
//     default:
//         console.log('Not a valid day')
//         break;
// }


const day = 'tuesday';

if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to the gym to train these biceps');
    console.log('Ball out');
} else if (day === 'tuesday') {
    console.log('Watch some movies');
    console.log('Text bae');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Run')
} else if (day === 'friday') {
    console.log('Thank God its Friday')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the Weekend')
} else {
    console.log("Not a valid day")
}

