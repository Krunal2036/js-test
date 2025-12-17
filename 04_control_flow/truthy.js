const userEmail = "ksr@gmail.com";

if (userEmail) {
  console.log(`El email del usuario es: ${userEmail}`);
} else {
  console.log("El usuario no tiene email registrado");
}

const userPhone = "";

if (userPhone) {
  console.log(`El teléfono del usuario es: ${userPhone}`);
} else {
  console.log("El usuario no tiene teléfono registrado");
}

// -----------------------falsy values 
// in JavaScript are: false, 0, -0, bigint 0n, "", null, undefined, NaN.

// -----------------------truthy values
// "0", "false", [], {}, function() {}.
// All other values are considered truthy.

// -----------------------examples
const arryay = [];

if (arryay.length === 0) {
    console.log("Array is empty");
}

const object = {};

if (Object.keys(object).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??)

const username = null;

const userage = 18;

const defaultName = "Guest";

const displayName = username ?? userage ?? defaultName;

console.log(`Display Name: ${displayName}`); // Output: Display Name: Guest



//------------------ turnary operator

// syntax: condition ? exprIfTrue : exprIfFalse

const isMember = true;

const discount = isMember ? "yes is a member." : "no is not a member.";
console.log(discount);