for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        console.log(`${element} is found, please continue.`);
        continue;
    }
    if (element === 8) {
        console.log(`${element} is found, stopping the loop.`);
        break;
    }
    console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         // console.log(i);
//         break;
//     }
// }