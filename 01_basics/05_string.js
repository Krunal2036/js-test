let name ="krunal";
let cnt = 25

// console.log(`hello my name is${name} and my ccount is ${25}`);

const strDemo = new String('krunal')

// console.log(strDemo[0]);
// console.log(strDemo.length);
// console.log(strDemo.toLocaleUpperCase());
// console.log(strDemo.charAt(3));
// console.log(strDemo.indexOf('r'));
// console.log(strDemo.substring(0,3));
// console.log(strDemo.slice(-6,3));

const trimDemo = new String('      krunal   ')
// console.log(trimDemo.trim());

const url = "abcxy.com/abc%20xy"
console.log(url.replace('%20','-'));
console.log(url.includes('xy'));
console.log(url.split('/'));